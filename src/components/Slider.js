import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styledComponents from 'styled-components'
import { SliderItems } from '../pages/data';

const Container = styledComponents.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styledComponents.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styledComponents.div`
  height: 100%;
  display: flex;
  margin-top: 14px;
  transition: all 1.5s ease;
  transform: translateX(${(props)=> props.slideIndex * -100}vw);
`;

const Slide = styledComponents.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;

const ImgContainer = styledComponents.div`
  flex: 1
`;

const Image = styledComponents.img`
  height: 60%;
  width: 60%;
`;

const Infocontainer = styledComponents.div`
  flex: 1;
  padding: 50px;
`;

const Title = styledComponents.h1`
  font-size: 70px;
`;

const Descrition = styledComponents.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

`;

const Button = styledComponents.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;  

const Slider = () => {

  const[slideIndex , setslideIndex] = useState([]);
  const handleClick = (direction) => {
    if(direction === "left"){
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }else{
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
    <Arrow direction="left" onClick={() => handleClick("Left")}>
    <ArrowLeftOutlined />
    </Arrow>
    <Wrapper slideIndex={slideIndex}>

    {SliderItems.map((item) => (
    <Slide bg={item.bg} key={item.id}>
    <ImgContainer>
    <Image src = {item.img} />
    </ImgContainer>
    <Infocontainer>
    <Title>{item.title}</Title>
    <Descrition>
    {item.desc}
    </Descrition>
    <Button>SHOP NOW</Button>
    </Infocontainer>
    </Slide>
    ))}

    </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("Right")}>
    <ArrowRightOutlined />
    </Arrow>
    </Container>
  )
}

export default Slider