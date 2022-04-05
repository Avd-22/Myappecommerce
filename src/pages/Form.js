import React, { useState } from 'react'
import Register from './Register';
import signupFormSuccess from './signupFormSuccess';

const Form = () => {
    const [formIsSubmitted , setFormIsSubmitted] = useState(false);

    const submitform = () => {
        setFormIsSubmitted(true);
    };

  return (
    <div>
    {(!formIsSubmitted) ? <Register submitform={submitform}/> : <signupFormSuccess />}
    </div>
  )
}

export default Form