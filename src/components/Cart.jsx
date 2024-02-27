import React from 'react';
import '../App.css';
function Cart() {
    const retrieveValue = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        return cart;
    }
    return (
        <div className='shopping-cart'>
            <h2>Carrito de compras</h2>
            <p id='total-value'>{retrieveValue() + " $ USD"}</p>
        </div>
    );
}
export default Cart;