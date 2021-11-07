export default function validateInfo(values){
    let errors={}


    if(!values.username.trim()){
        errors.username="username required"
    }
    //Email
    if(!values.email){
        errors.email="Email required"
    }else if(!/^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)){
        errors.email="Email address is invalid"
    }

    //mobile
    if(!values.mobile){
        errors.mobile="mobile number required"
    }
    //password
    if(!values.password){
        errors.password="password required"
    }else if(values.password.length<6){
        errors.password="password needs to be atleast 6 character"
    }
    if(!values.password2){
        errors.password2="password is Required"
    }else if(values.password2 !== values.password){
        errors.password2='password do not match'
    }
    return errors;
}
