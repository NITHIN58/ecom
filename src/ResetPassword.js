import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import axios from "axios";
import CryptoJS from "crypto-js";



function ResetPassword(props) {
  const [password, setPassword] = useState("");
  const onInputChange = (event) => {
    if (event.type === "change") {
      setPassword(event.target.value);
    }
  };
useEffect(()=>{
  

},[])
  const resetButtonHandler= async(e)=>{
      if(e.type==='click'){
          await axios.post("/changePassword",{
            newPassword:  CryptoJS.AES.encrypt(JSON.stringify(password), '8129538913').toString(),
            resetToken:props.match.params.resetToken
              
          }).then((success)=>{
            console.log("Reset password successfully ")
          }).catch((error)=>{
            console.log("Rest failed")
          })
      }
  }
  return (
    <div style={{ padding: "100px" }}>
      <Container component="main" maxWidth="xs">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={onInputChange}
          />
          <Button
            style={{ color: "white", background: "red" }}
            variant="outlined"
            onClick={resetButtonHandler}
          >
            Reset
          </Button>
        </Box>
      </Container>
    </div>
  );
}
export default withRouter(ResetPassword);
