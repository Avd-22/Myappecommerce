import React from 'react'
import styledComponents from 'styled-components'
import popularProduct from '../pages/Prouctsdata';
// import { popularProducts } from '../pages/data'
import Product from './Product';

const Container = styledComponents.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = () => {
    // const {popularProduct} = props;
  return (
    <Container>
      {popularProduct.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products

