import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
// import popularProduct from '../pages/Prouctsdata';
import "./Products2.css";

const Products2 = ({ popularProduct, handleAddProduct }) => {
  return (
    <div className='products'>
      {popularProduct.map((productItems) => (
        <div className='card'>
          <div>
            <img
              className='product-image'
              src={productItems.img}
              alt={productItems.name}
            />
          </div>

          <div>
            <h3 className='product-name'>{productItems.name}</h3>
          </div>

          <div className='product-price'>
            ${productItems.price}
          </div>

          <div>
            <div className='info'>
              <FavoriteBorderOutlined />
              <SearchOutlined />
              <div className='product-add-button'>
                <ShoppingCartOutlined onClick={() => handleAddProduct(productItems)} />
              </div>
            </div>
          </div>
        </div>
      )
      )
      }

    </div>
  )
}

export default Products2