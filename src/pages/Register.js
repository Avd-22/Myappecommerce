import React, { useState } from "react";
import styledComponents from "styled-components";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Validation from "./Validation";
import { Checkbox } from "@material-ui/core";
// import { Button } from "@material-ui/core";
// import { width } from "@mui/system";

const Container = styledComponents.div`
  width: 100vw;
  height: 100vh;
  
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styledComponents.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  margin-top: 100px;
`;

const Title = styledComponents.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styledComponents.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

// const error = styledComponents.div``;

// const Input = styledComponents.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px;
// `;

const Agreement = styledComponents.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styledComponents.button`
  width: 100%;
  boder: none;
  padding: 10px 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Registers = styledComponents.div`
  padding-top: 10px;
  text-transform: uppercase;
  font-size: 82%;
`;

const labels = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Register = () => {

  const [values, setValues] = useState({
    fullname: "",
    username: "",
    email: "",
    number: "",
    password: "",
    confirmpassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <TextField id="filled-basic" style={{ marginBottom: "10px" }}
            label="fullname" variant="filled"
            type={"text"} name="fullname"
            value={values.fullname} onChange={handleChange} required />
          {errors.fullname && <p className="error">{errors.fullname}</p>}

          <TextField id="filled-basic" style={{ marginBottom: "10px" }}
            label="username" variant="filled"
            type={"text"} name="username"
            value={values.username} onChange={handleChange} required />
          {errors.username && <p className="error">{errors.username}</p>}

          <TextField id="filled-basic" style={{ marginBottom: "10px" }}
            label="email" variant="filled"
            type={"email"} name="email"
            value={values.email} onChange={handleChange} required />
          {errors.email && <p className="error">{errors.email}</p>}

          <TextField id="filled-basic" style={{ marginBottom: "10px" }}
            label="phone number" variant="filled"
            type={"number"} name="number"
            value={values.number} onChange={handleChange} required />
          {errors.number && <p className="error">{errors.number}</p>}

          <TextField id="filled-basic" style={{ marginBottom: "10px" }}
            label="password" variant="filled"
            type={"password"} name="password"
            value={values.password} onChange={handleChange} required />
          {errors.password && <p className="error">{errors.password}</p>}

          <TextField id="filled-basic"
            label="confirm password" variant="filled"
            type={"password"} name="confirmpassword"
            value={values.confirmpassword} onChange={handleChange} required />
          {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}

          <Agreement>
            <Checkbox {...labels} defaultChecked />
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button onClick={handleFormSubmit} >REGISTER</Button>

          <Registers>
            <Link to={"/Login"}
              style={{ color: "black", textDecoration: "none" }}>
              <b>Already Registered?Click Here To Login</b>
            </Link>
          </Registers>

        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register