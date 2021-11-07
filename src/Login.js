import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, withRouter } from "react-router-dom";
import headhome from "./Home.json";
import Footer from "./components/Footer/Footer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CryptoJS from "crypto-js";
import {connect} from "react-redux"
import {login,addArticle} from "./store/actions/action"
import Model from "./components/common/Modelwrapper/Model.component"
import ModelWrapper from "./components/common/Modelwrapper/ModelWrapper.component";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`${headhome.footer.footingout}`} {`${headhome.footer.year}`}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "white",
    color: "blue",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  nav: {
    position: "fixed",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const log = async (e) => {
    if (e.type === "click") {
      await axios
        .post("/logins", {
          userEmail: email,
          userpwd: password,
        })
        .then((loginSuccess) => {
          console.log(loginSuccess);
          if (loginSuccess.data.userAuthenticated === true) {
            if (loginSuccess.data.userAdmin === true) {
              sessionStorage.setItem("authenticated", true);
              sessionStorage.setItem("isAdmin", true);
              document.cookie = "loggedIn=true";
              history.push("/admin");
            } else {
              sessionStorage.setItem("authenticated", true);
              sessionStorage.setItem("isAdmin", false);
              document.cookie = "loggedIn=true";
              window.location.href = "/admin";
            }
          } else {
            setEmailEr("error");
            setPasswordEr("error");
          }
        })
        .catch((loginErorr) => {
          console.log(loginErorr);
          setEmailEr("error");
          setPasswordEr("error");
        });
    }
  };
  // const log = async (e) => {
  //   const { history } = props;
  //   if (e.type === "click") {
  //     await axios
  //       .post("/Logins", {
  //         userEmail: email,
  //         userPassword: CryptoJS.AES.encrypt(JSON.stringify(password), '9645051492').toString()
  //       })
  //       .then((loginSuccess) => {
  //         if (loginSuccess.data.userAuthenticated === true) {
  //           sessionStorage.setItem("authenticated", true);
  //           document.cookie = "loggedIn=true";
  //           setRegEmailErr("noerror");
  //           history.push("/admin");
  //         } else {
  //           setRegEmailErr("error");
  //         }
  //       })
  //       .catch((loginError) => {
  //         setRegEmailErr("error");
  //       });
  //   }
  // };

  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [EmailEr, setEmailEr] = useState({});
  const [passwordEr, setPasswordEr] = useState({});
  const [regEmailErr, setRegEmailErr] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      setEmail("");
      setPassword("");
    }
  };

  const formValidation = () => {
    const EmailEr = {};
    const passwordEr = {};
    let isValid = true;

    if (!email.match("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$")) {
      EmailEr.EmailMatchErr = "Invalid Data";
      isValid = false;
    }

    if (
      !password.match(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      )
    ) {
      passwordEr.passwordMatchErr = "Invalid Password";
      isValid = false;
    }

    setEmailEr(EmailEr);
    setPasswordEr(passwordEr);
    return isValid;
  };
  const resetPassword = async (e) => {
    e.preventDefault();
    if (e.type === "click") {
      const EmailEr={};
      if (email.match('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$')) {
        EmailEr.EmailMatchErr = "";
        setEmailEr(EmailEr);
        // backend logic
        await axios.post("/resetPassword", {
          userEmail: email
        }).then((success)=> {
          EmailEr.EmailMatchErr = "";
          if (success.data.userEmailFound === true) {
            console.log("");
          } else if (success.data.userEmailFound === false) {
            EmailEr.EmailMatchErr = "Email id not registered";
            setEmailEr(EmailEr);
          }

        }).catch((error)=> {
          console.log(error);
          EmailEr.EmailMatchErr = "Email id not registered";
          setEmailEr(EmailEr);
        })
      } else {
        EmailEr.EmailMatchErr = "Please provide valid email id";
        setEmailEr(EmailEr);
      }
    }
  }

  return (
    <ModelWrapper>
    <Model >
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <b>Sign In</b>
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
          />
          {Object.keys(EmailEr).map((key) => {
            return <div style={{ color: "red" }}>{EmailEr[key]}</div>;
          })}
          <br></br>

          <TextField
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          {Object.keys(passwordEr).map((key) => {
            return <div style={{ color: "red" }}>{passwordEr[key]}</div>;
          })}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            onClick={log}
            variant="contained"
            color="primary"
            disabled={!email || !password}
            className={classes.submit}
          >
            {`${headhome.login.loginbtn}`}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#"onClick={resetPassword} variant="body2">
                {`${headhome.login.forgotpass}`}
              </Link>
            </Grid>
            <Grid item>
              <Link to={`/signup`}>{`${headhome.login.noaccount}`}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </Model>
    </ModelWrapper>
   
  );
}
const mapStateToProps = (reduxstate) => {
  return {
    isAuthenticated: reduxstate.loggedIn,
    articles: reduxstate.articles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: () => {
      dispatch(login());
    },
    addArticle: (articleData) => {
      dispatch(addArticle(articleData))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(Login));
