import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
// import { useCart } from 'react-use-cart';
// import React, { useState } from 'react'
import styledComponents from 'styled-components'
// import { popularProduct } from '../pages/Prouctsdata';
// import { popularProducts } from '../pages/data';


const Container = styledComponents.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5fbfd;
`;

const Circle = styledComponents.div``;

const Image = styledComponents.img`
  height: 75%
`;

const Info = styledComponents.div`
  cursor: pointer;
`;

const Icon = styledComponents.div``;

const Product = ({item , handleAddProduct}) => {
  // const {popularProduct} = props;

  return (

      <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <button onClick={() => handleAddProduct(item)}>
            <ShoppingCartOutlined />
          </button>
        </Icon>
       </Info>
    </Container>
    

  );
};

export default Product