import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
  height: 28px;
  background-color: teal;
  color: white;
  diplay: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 0.2px;
`;

const Announcement = () => {
  return (
    <Container>Super Deal! Free Shipping on Orders Over 100$</Container>
  )
}

export default Announcement