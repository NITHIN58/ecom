import React from "react";
import { withRouter } from "react-router"
import ModelWrapper from "../common/modelWrapper.component";
import Model from '../common/Model.component'
import { Button } from "@material-ui/core";
import SignUp from "../SignUp/SignUp";
import { Link } from "react-router-dom";
function Login(props) {
  const goBack = (e) => {
    const { history } = props;
    if (e.type === "click") {
      history.goBack();
    }
  };

  const onModelEvent=()=>{

  }

 

  
  return (
    <div>
      <ModelWrapper>
        <Model height={800} width={500}>
 
       <form>
        <label> Name:</label>
        <input type="text" placeholder="Enter your username"
        onChange={(e)=>{onModelEvent(e,"f")}}></input><br></br>
        <lable> password:</lable>
        <input type="password" placeholder="Enter your password"></input><br></br>
        <Button  variant="contained" color="primary">Login</Button>
        
       
      </form><br></br>
      <button onClick={goBack}>Go Back</button>
      <Link to="/signup">Click here to register</Link>
      </Model>
      </ModelWrapper>
    </div>
  );
}

export default withRouter(Login);
