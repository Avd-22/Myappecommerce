/*import React , {useState} from "react";
import { Routes , Route } from "react-router-dom";
// import Product from "./components/Product";
import Products2 from "./components/Products2";
// import { Slider } from "@material-ui/core";
// import Navbar from "./components/navbar";
import Cart from "./pages/Cart";
import Home from "./pages/home";
import Login from "./pages/Login";
// import popularProduct from "./pages/Prouctsdata";
import data from "./pages/Prouctsdata";
import Register from "./pages/Register";
// import data from "./pages/Prouctsdata";

const App = ( ) => {
  const { popularProduct } = data;
  const [cartItems, setcartItems] = useState([]);

  // const _addToCartHandler = (popularProduct) => {
  //   let prevInCartItems = [...cartItems]
  //   //if item already exists
  //   //if the item does not exists
  //   if(prevInCartItems){
  //     setcartItems(prevInCartItems , {quantity: prevInCartItems.quantity + 1});
  //   }
  //   else{
  //     setcartItems(
  //     prevInCartItems.push({popularProduct: 1}));
  //   }
  // }

  const handleAddProduct = (item) => {
    console.log("clicked here");

    const ProducExist = cartItems.find((props) => props.id === item.id);
    if (ProducExist) {
      setcartItems(cartItems.map((props) => props.id === item.id ?
        { ...ProducExist, quantity: ProducExist.quantity + 1 } : props));
    }
    else {
      setcartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // const handleRemoveProduct = (product) => {
  //   const ProducExist = cartItems.find((item) => item.id === product.id);
  //   if (ProducExist.quantity === 1) {
  //     setcartItems(cartItems.filter((item) => item.id !== product.id));
  //   }
  //   else {
  //     setcartItems(cartItems.map((item) => item.id === product.id ?
  //       { ...ProducExist, quantity: ProducExist.quantity - 1 } : item));
  //   }
  // };

  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} />} />
        <Route path="/Products2" element={<Products2 popularProduct={popularProduct} handleAddProduct={handleAddProduct}  />} />
      </Route>
    </Routes>
  );
};

export default App;*/



import React, { useState } from "react";
import data from "./pages/Prouctsdata";
import Rout from "./components/Rout"
import { BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/Header";
import Announcement from './components/Announcement';
import Navbar from './components/navbar';
// import Slider from './components/Slider';

const App = () => {
  const { popularProduct } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
      )
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item)
      )
    }
  }

  const handleCartClearance = () => {
    setCartItems([]);
  }

  return <div>
    <Router>
      <Announcement />
      <Navbar />
      <br></br>
     
      <Rout popularProduct={popularProduct}
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance} />
    </Router>
  </div>
};

export default App
