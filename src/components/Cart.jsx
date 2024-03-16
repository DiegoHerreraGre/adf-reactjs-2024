import React, { useState } from 'react';
import Checkout from './Checkout';
import '../App.css';
import {Link} from "react-router-dom";

function Cart() {
    let [totalValue, setTotalValue] = useState(0);
    const priceFee = {
        apoyoTesis: 300,
        asesoriaHistoriaEconomica: 100,
        clasesPrivadas: 150,
        otros: 250
    }
    const retrieveValue = () => {
        let cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }
    const [cart, setCart] = useState(retrieveValue());
    totalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    function handleAddFeeToCart (fee, price) {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === fee);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === fee ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { id: fee, price: price, quantity: 1 }];
            }
        });
        const currentFee = JSON.parse(localStorage.getItem('priceFee')) || {total: 0};
        const newFee = {total: currentFee.total + price};
        localStorage.setItem('priceFee', JSON.stringify(newFee));
        setTotalValue(totalValue + price);
    }
    const handleReset = async () => {
        setCart([]);
        localStorage.removeItem('cart');
        localStorage.removeItem('priceFee');
        localStorage.removeItem('clickNumber')
        setTotalValue(0);
    }

    async function handleReloadPageResetValue () {
        await handleReset();
        window.location.reload();
    }

    async function handleCheckout(a, b) {
        a = cart;
        b = await handleAddFeeToCart();
        return a + b;
        handleReset();
    }

    return (
        <section>
            <h3>Otros servicios por Fee (aprete para agregar al carrito)</h3>
            <article>
                <ul id='price-container-item'>
                    <li className="price-item one" onClick={() => handleAddFeeToCart('apoyoTesis', priceFee.apoyoTesis)}>Apoyo en tesis: {priceFee.apoyoTesis} $</li>
                    <li className="price-item two" onClick={() => handleAddFeeToCart('asesoriaHistoriaEconomica', priceFee.asesoriaHistoriaEconomica)}>Apoyo en historia económica: {priceFee.asesoriaHistoriaEconomica} $</li>
                    <li className="price-item three" onClick={() => handleAddFeeToCart('clasesPrivadas', priceFee.clasesPrivadas)}>Clases Privadas: {priceFee.clasesPrivadas} $</li>
                    <li className="price-item four" onClick={() => handleAddFeeToCart('otros', priceFee.otros)}>Otros: {priceFee.otros} $</li>
                </ul>
            </article>
            <div className='shopping-cart'>
                <h2>Carrito de compras</h2>
                <div className='cart-items'>
                    {cart.map(item => {
                        return (
                            <div key={item.id} className='cart-item'>
                                <p>{item.quantity + " x " + item.price + " $ USD"}</p>
                            </div>
                        );
                    })}
                </div>
                <p id='total-value'>{totalValue + " $ USD"}</p>
                <buttom className='btn-filter' onClick={handleReset && handleReloadPageResetValue}>Vaciar carro de compras</buttom>
                <Link to='/cart/checkout'>
                    <Checkout onClick={handleCheckout}/>
                </Link>
            </div>
        </section>
    );
}
export default Cart;