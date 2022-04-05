import { TextField } from "@mui/material";
import styledComponents from "styled-components";
import { Link } from "react-router-dom";

const Container = styledComponents.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styledComponents.div`
  width: 25%;
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
  flex-direction: column;
`;

// const Input = styledComponents.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

const Button = styledComponents.button`
  width: 100%;
  boder: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Links = styledComponents.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  text-align: center;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <TextField id="filled-basic" style={{marginBottom: "10px"}} label="username" variant="filled"  required />
          <TextField id="filled-basic" style={{marginBottom: "10px"}} label="password" variant="filled" required />
          <Button>LOGIN</Button>
          <Links><b>DON'T  REMEMBER THE PASSWORD</b></Links>
          <Links><Link to={"/Register"} style={{color: "black"}} ><b>CREATE A NEW ACCOUNT</b></Link></Links>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login