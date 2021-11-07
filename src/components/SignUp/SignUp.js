import React from "react";
import { withRouter } from "react-router"
import Model from "../common/Model.component";
import ModelWrapper from "../common/modelWrapper.component";
import useForm from "./useForm";
import validate from "./validateInfo";
import './Form.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import OverlayComponent from "../common/OverlayComponent";



// function Signup(props) {
//   const goBack = (e) => {
//     const { history } = props;
//     if (e.type === "click") {
//       history.goBack();
//     }
//   };

  const Signup = ()=>{
    const{handleChange, values ,handleSubmit,errors}=useForm(validate);
    
  
  


  return (
    <div className='form-content-right'>
      <ModelWrapper>
        <Model>
          
          
     <form className="form" onSubmit={handleSubmit}>
       <h1>Create  your account</h1>
      
       <div className="form-inputs">
         
          <label htmlFor='username'className="form-label">UserName</label>
          <input 
          id="username"
          type="text"
          name="username" 
          className="form-input"
          placeholder="Enter your username"
          value={values.username}
          onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
      
        
        </div>
        <div className="form-inputs">
         
         <label htmlFor='email'className="form-label">Email</label>
         <input 
         id="email"
         type="email"
         name="email" 
         className="form-input"
         placeholder="Enter your username"
         value={values.email}
         onChange={handleChange}
         />
         {errors.email && <p>{errors.email}</p>}
     
       
       </div>
       <div className="form-inputs">
         
         <label htmlFor='mobile'className="form-label">mobile</label>
         <input 
         id="mobile"
         type="number"
         name="mobile" 
         className="form-input"
         placeholder="mobile number"
         value={values.mobile}
         onChange={handleChange}
         />
         {errors.mobile && <p>{errors.mobile}</p>}
     
       
       </div>
       
         
        <div className="form-inputs">
            <label htmlFor='password'
            className="form-label">
              password
            </label>
            <input 
            id="password"
            type="password"
            name="password" 
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
            </div>
        <div className="form-inputs">
          <label htmlFor=' password2'
          className="form-label">
            Confirm password
          </label>
          <input 
          id=" password2"
          type="password"
          name="password2"
          className="form-input" 
          placeholder=" Confirm  password"
          value={values.password2}
          onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        
       <button className="form-input-btn" 
       type="submit">
         Sign Up
       </button>   <span className="form-input-login">
        Already have an account? Login
        <a href='/login'>here</a>
      </span>
      <OverlayComponent>

      </OverlayComponent>

        
     
      </form>
      {/* <button onClick={goBack}>Go Back</button> */}
   
      </Model>
      </ModelWrapper>
    </div>
  );
  } 

export default withRouter(Signup);
