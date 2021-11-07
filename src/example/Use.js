import React, { useState,useEffect } from "react";
import useForm from "./UseForm"

const Use = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value,handleChange ] =useForm({
    name:"",
    email:""
  })


useEffect(()=>{
  console.log("running")
  return()=>{
    
  }
},[value.name,value.email])

  return (
    <div>
     <form autoComplete="off">
     <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={value.email}
        onChange={handleChange}
      />
     </form>
    </div>
  );
};

export default Use;
