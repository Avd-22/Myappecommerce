import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
// import Register from '../pages/Register';
import styledComponents from 'styled-components'
// import './navbarstyle.css'

const Container = styledComponents.div`
  height: 60px;
`;

const Wrapper = styledComponents.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styledComponents.div`
  flex: 1;
  display: flex;
  aligh-items: center;
`;

const Language = styledComponents.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer =styledComponents.div`
  border: 1px solid lightgray;
  display: flex;
  aligh-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styledComponents.input`
  border: none;
`;

const Center = styledComponents.div`
  flex: 1;
  text-align: center;
`;

const Logo = styledComponents.h1`
font-weight: bold;
`;

const Right = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Item = styledComponents.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
    <Left>
    <Language></Language>
    <SearchContainer>
    <Input placeholder='Search'/>
    <Search style={{color: "gray" , fontSize: 16}}/>
    </SearchContainer>
    </Left>
    <Center>
    <Logo>Anuvab.com</Logo>
    </Center>
    <Right>
    <Item>
    <Link to={"/Register"} style={{color: 'black' , fontWeight: 'bold'}}>REGISTER</Link>
    <br></br>
    <Link to={"/Login"} style={{color: 'black' , fontWeight: 'bold'}}>LOGIN</Link>
    </Item>
    <Item>
    <Badge badgeContent={0} color="primary">
    <Link to={"/Cart2"} style={{color: 'black'}}><ShoppingCartOutlined /></Link> 
    </Badge>
    </Item>
    </Right>
    </Wrapper>
    </Container>
  )
}

export default Navbar