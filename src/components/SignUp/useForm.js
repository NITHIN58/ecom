import { useState, useEffect } from "react";
import axios from "axios";
import validateInfo from "./validateInfo";
import { isValid } from "ipaddr.js";

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    mobile:""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
   

      const user = {
        firstName: values.username,
        email: values.email,
        mobile:values.mobile,
        pass: values.password,
        pass2: values.password2,
      };
      axios
        .post("/createUser", user)
        .then((res) => {
          console.log(res);
          alert("success")
        })
        .catch((error) => {
          alert("error")
          console.log(error);
        });
       
  };
  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
