import React from "react";
import { useState,useEffect } from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Route, Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import Navbar from "../components/NavBar/Navbar"
import Button from "../components/NavBar/Button"
import { useHistory } from "react-router";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  paper: {
    color: "black",
    marginTop: 60,
  },
}));

function Admin(props) {
  const classes = useStyles();

  const history=useHistory();
  const logoutHandler=(e)=>{
    if(e.type==="click"){
      axios.get("/logout").then((logoutData)=>{
        console.log(logoutData)
        history.push('/')
      })
    }
  }
  return (
    <div>
      <h2 className={classes.paper}>Admin</h2>
      <Navbar/>
      <Button className="btn--primary" onClick={(e)=>{logoutHandler(e)}}>Logout</Button>
    
      <AddProduct/>
  
    </div>
  );
}

export default withRouter(Admin);
