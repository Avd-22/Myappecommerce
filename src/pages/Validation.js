// import React from 'react'

const Validation = (values) => {
    let errors = {};
    console.log(values);

    if(values.fullname.length < 4 && values.fullname.length > 20){
        errors.fullname = "your name should be between 4 to 20 characters";
    }
    if(values.username.length < 3 && values.username.length > 5){
        errors.username = "your username shoulde be between 3 to 5 characters";
    }
    if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "email is invalid";
    }
    if(values.number.length < 10 && values.number.length > 10){
        errors.number = "phone number should be of 10 numbers";
    }
    if(values.password.length < 5){
        errors.password = "password must be more than 5 characters";
    }
    if(values.confirmpassword !== values.password){
        errors.confirmpassword = "password does not match";
    }

  return errors;
}

export default Validation