import React from "react";


const Overlay =(props)=>{
    const onAlertBoxEvent=(e,type)=>{
        if(e.type==="click"){
            if(type==="closeIcon"){
                props.onEvent(e,"closeicon");

            }else if(type==="okButton"){
                props.onEvent(e,"okbutton")

            }
        }
    }
    return(
        <div>
            {props.showCloseIcon ? <i className="fa fa-close" title="Are you ready to close ?"
            onClick={(e)=>{
                onAlertBoxEvent(e,"closeIcon");
            }}
            ></i>:null}


            <h2>{props.heading}</h2>
            <p>{props.body}</p>


            <button onClick={(e)=>{
                onAlertBoxEvent(e,"okButton")
            }}>{props.OkButtonText}</button>

        
            {props.showOkButton ? <button>{props.CloseButtonText}</button>:null}

        </div>

    )
}
export default React.memo(Overlay)