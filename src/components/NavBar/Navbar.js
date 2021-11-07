import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import homepage from "../../assets/mock/homepage.json";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { CenterFocusStrong } from "@material-ui/icons";



export default class Navbar extends Component {


 
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="nav">
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            e-comm<i className="fab fa-react"></i>
          </h1>
          <p
            style={{ textAlign: CenterFocusStrong,color:"white" }}
          >{`${homepage.userName}`}</p>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (

                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                  
                </li>
              );
            })}
          </ul>
          {/* { <Button onClick={(e)=>{
                           if (e.type==="click"){
                               this.setState.setLoginState=true
                           }
                       }}>Sigin</Button> } */}

                 
            
         
        </nav>
      </div>
    );
  }
}
