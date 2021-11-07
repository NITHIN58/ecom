import React from 'react'

export default function Input(props){
    const onChangeEvent=(e)=>{
        props.onChange(e)
    }
    return(
        
             <input type={props.type} value={props.value} placeholder={props.placeholder}
        onChange={onChangeEvent}></input>
         

    )

}
