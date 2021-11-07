import React,{ useEffect, useState }from "react";

import Footer from "./Footer/Footer";
import Content from './Carousel/Content';
import Navbar from "./NavBar/Navbar";
import Tilec from "../components/Tile";
import Content1 from "./Carousel/Content";
import { Grid } from "@material-ui/core";
import Button from "@restart/ui/esm/Button";
import { useHistory } from "react-router";
import axios from "axios";
import reduxStore from "../store/store";
import {addArticle,addProduct,login} from "../store/actions/action"




export default function Home() {
  const [product, setProduct] = useState([]);
  const getProductData = async () => {
    try {
      const data = await axios.get("/getProducts");
      console.log(data.data);
      setProduct(data.data);
  
    } catch (e) {
      console.log(e);
    }
  };


  //redux example

window.store=reduxStore
window.addArticle=addArticle
window.login=login;
window.store.dispatch(addProduct({product}))
console.log(window.store.getState())
window.store.dispatch(addArticle({title:"heeey"}))

console.log(window.store.getState())

 
 return(
   <div style={{padding:"10px"}}>
    
     <Navbar/>
    
     <h1 style={{color:"black",textAlign:"center",padding:"30px"}}>Hi!!!! How Are You???</h1>
      <Content/>
     <Tilec/>
     <Content1/>
     <Footer/>
     
   </div>
 )

 
}
 

 