import React from 'react';
import Products2 from './Products2';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart2 from '../pages/Cart2';
import { Route, Routes } from 'react-router-dom';

const Rout = ({ popularProduct, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products2 popularProduct={popularProduct} handleAddProduct={handleAddProduct} />}></Route>
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Cart2' element={<Cart2 cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance} />} />
      </Routes>
    </div>
  )
}

export default Rout