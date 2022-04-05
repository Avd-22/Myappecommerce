import React from 'react';
import "./Cart2.css"

const Cart2 = ({ cartItems = [], handleAddProduct, handleRemoveProduct, handleCartClearance }) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
        <div className='cart-items'>
            <h2 className='cart-items-header'>YOUR CART</h2>

            <div className='clear-cart'>
                {cartItems.length >= 1 && (
                    <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
                )}
            </div>

            {cartItems.length === 0 && (
                <div className='cart-items-empty'> No Items are added</div>
            )}

            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-items-list">
                        <img
                            className='cart-items-image'
                            src={item.img}
                            alt={item.name}
                        />

                        <div className='cart-items-name'>{item.name}</div>

                        <div className='cart-items-function'>
                            <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                            <label className='cart-quantity'>{item.quantity}</label>
                            <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                        </div>

                        <div className='cart-items-price'>
                            ${item.quantity * item.price}
                        </div>
                    </div>
                ))}
            </div>

            <div className='cart-items-total-price-name'>
                Total Price
                <div className='cart-items-total-price'>${totalPrice}</div>
                <button className='cart-checkout' onClick={() => alert("Thank You for Shopping")}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart2