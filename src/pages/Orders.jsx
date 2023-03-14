import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import Card from '../components/Card/Card';

export default function Orders() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const response = axios.get(
            'https://630e37de3792563418798019.mockapi.io/orders'
        );
        if (!response) {
            throw new Error('Data coud not be fetched!');
        } else {
            return (await response).data;
        }
    };

    useEffect(() => {
        fetchOrders()
            .then((res) => {
                setOrders(res);
            })
            .catch((e) => console.log(e.message));
    }, []);

    return (
        <div className='content'>
            {orders.length > 0 ? (
                <div>
                    <div className='content-header'>
                        <h1>My orders</h1>
                    </div>
                    <div>
                        {orders.map((order) => (
                            <div key={order.id}>
                                <div className='order-title'>
                                    Order # {order.id}
                                </div>
                                <div>
                                    {order.items.map((item) => (
                                        <Card key={item.id} {...item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='emptyList'>
                    <h1>No orders</h1>
                    <p className='emptyList-title'>Please place an order</p>
                    <button className='greenButton'>
                        <Link to='/'>
                            <span className='btn-title'>Return</span>
                            <img src='/img/Arrow.svg' alt='Arrow' />
                        </Link>
                    </button>
                </div>
            )}
        </div>
    );
}
