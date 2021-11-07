import React from 'react';
import "./modelstyle.css";

export default function Model(props){
    return(
        <div className={`${props.className}modelComponent`} style={
            {
                height:`${props.height||500}px`,
                width:`${props.width||500}px`
            }
        }>
            {props.children}

        </div>
    )
}