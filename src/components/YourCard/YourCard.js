import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './YourCard.css'
import CartItem from '../CartItem/CartItem';

function YourCard(props) {
    const { cart } = useSelector(state => state.cart)
    useEffect(() => {
        console.log(cart)
    }, [cart])

    const rendePrice = () => {
        let total = 0;
        if (cart.length > 0) {
            total = cart.reduce((total, item) => { return total += item.amount * item.price }, 0);
        }
        return total.toLocaleString(2);
    }

    return (
        <div className='card'>
            <img className='card__logo' src='./app/assets/nike.png' ></img>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className='card__title'>Your cart</div>
                <div className='card__title'>${rendePrice()}</div>
            </div>
            <div className='card__product'>
                {
                    console.log(cart)
                }
                {
                    cart || cart.length !== 0 ? cart.map((value, index) => (
                        <CartItem cart={value} key={index}></CartItem>
                    )) : (
                        <div className='cart__product--empty'>
                            Your cart is empty.
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default YourCard;