import React, { useState, useEffect } from 'react';

function CheckoutPage() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [priceFee, setPriceFee] = useState(JSON.parse(localStorage.getItem('priceFee')) || {total: 0});
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedPriceFee = JSON.parse(localStorage.getItem('priceFee')) || {total: 0};
        setCart(updatedCart);
        setPriceFee(updatedPriceFee);
    }, []);

    useEffect(() => {
        const newTotalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0) + priceFee.total;
        setTotalValue(newTotalValue);
    }, [cart, priceFee]);

    return (
        <div>
            <h2>Checkout</h2>
            <p>Total Value: {totalValue} $ USD</p>
        </div>
    );
}

export default CheckoutPage;