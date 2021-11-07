import React from "react";
import "./modelstyle.css";


export default function ModelWrapper(props) {
  return <div className="model-wrapper-container">{props.children}</div>;
  
}