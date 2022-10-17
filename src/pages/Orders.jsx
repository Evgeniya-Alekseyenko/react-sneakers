import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card/Card';

export default function Orders() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        const response = axios.get(
            'https://630e37de3792563418798019.mockapi.io/orders'
        );
        // await delay(2000);
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
            <div className='content-header'>
                <h1>My orders</h1>
            </div>
            <div>
                {orders.map((order) => (
                    <div key={order.id}>
                        {console.log(order)}
                        <div>Order # {order.id}</div>
                        <div>
                            {order.items.map((item) => (
                                <Card key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
