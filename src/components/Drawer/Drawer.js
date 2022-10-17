import React, { useState } from 'react';
import axios from 'axios';

import Info from '../info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Drawer({ onClose, onRemove, items = [], opened }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(
                'https://630e37de3792563418798019.mockapi.io/orders',
                {
                    items: cartItems,
                }
            );
            setOrderId(data.id);
            setIsOrderComplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(
                    'https://630e37de3792563418798019.mockapi.io/cart/' +
                        item.id
                );
                await delay(1000);
            }
        } catch (error) {
            alert('Error creating order');
        }
        setIsLoading(false);
    };
    return (
        <div
            className={`${styles.overlay} ${
                opened ? styles.overlayVisible : ''
            }`}
        >
            <div className={styles.drawer}>
                <h2>
                    Cart
                    <img
                        onClick={onClose}
                        className='cart-item-btn___remove'
                        src='/img/Btn-removed.svg'
                        alt='Close'
                    />
                </h2>
                {items.length > 0 ? (
                    <div className={styles.drawerCart}>
                        <div className='cart-item-box'>
                            {items.map((obj) => (
                                <div key={obj.id} className={styles.cartItem}>
                                    <img
                                        width={70}
                                        height={70}
                                        src={obj.imageUrl}
                                        alt='Sneakers'
                                    />
                                    <div className='cart-item__text'>
                                        <p className='card-box__title'>
                                            {obj.title}{' '}
                                        </p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className='cart-item-btn___remove'
                                        src='/img/Btn-removed.svg'
                                        alt='Remove'
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='cart-item-bottom'>
                            <ul>
                                <li>
                                    <span>Price:</span>
                                    <div></div>
                                    <b>{totalPrice} $</b>
                                </li>
                                <li className='cart-item-bottom__info'>
                                    <span>Discount 5%:</span>
                                    <div></div>
                                    <b>{Math.round(totalPrice * 0.05)} $</b>
                                </li>
                                <li className='cart-item-bottom__info'>
                                    <span>Total:</span>
                                    <div></div>
                                    <b>
                                        {totalPrice -
                                            Math.round(totalPrice * 0.05)}
                                        $
                                    </b>
                                </li>
                            </ul>
                            <button
                                disabled={isLoading}
                                onClick={onClickOrder}
                                className='cart-item-btn greenButton'
                            >
                                Checkout
                                <img src='img/Arrow.svg' alt='Arrow' />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={
                            isOrderComplete
                                ? 'Order is processed!'
                                : 'Cart is empty'
                        }
                        description={
                            isOrderComplete
                                ? `Your order #${orderId} will soon be handed over to courier delivery`
                                : 'Add at least one pair of sneakers to place an order.'
                        }
                        image={
                            isOrderComplete
                                ? '/img/Complete-order.jpg'
                                : '/img/EmptyCart.svg'
                        }
                    />
                )}
            </div>
        </div>
    );
}
