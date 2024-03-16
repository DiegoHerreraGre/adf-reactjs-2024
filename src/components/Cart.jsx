import React, { useState } from 'react';
import '../App.css';

function Cart() {
    const priceFee = {
        apoyoTesis: 300,
        asesoriaHistoriaEconomica: 100,
        clasesPrivadas: 150,
        otros: 250
    }
    const retrieveValue = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        return cart;
    }
    const [cart, setCart] = useState(retrieveValue());
    const totalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

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
    }

    const handleReset = () => {
        setCart([]);
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
                <buttom className='btn-filter' onClick={handleReset}>Vaciar carro de compras</buttom>
            </div>
        </section>
    );
}
export default Cart;