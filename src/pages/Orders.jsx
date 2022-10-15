import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import Card from '../components/Card/Card';
import AppContext from '../context';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { orderId } = useContext(AppContext);
    console.log(orderId);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    'https://630e37de3792563418798019.mockapi.io/orders'
                );
                setOrders(
                    data.reduce((prev, obj) => [...prev, ...obj.items], [])
                );
                setIsLoading(false);
            } catch (error) {
                alert('Error when requesting orders');
                console.error(error);
            }
        })();
    }, []);

    return (
        <div className='content'>
            <div className='content-header'>
                <h1>My orders</h1>
            </div>
            <div>
                {(isLoading ? [...Array(8)] : orders).map((item, orderId) => (
                    <div>
                        Your order № {orderId}
                        <Card
                            key={orderId}
                            loading={isLoading}
                            {...item}
                        />{' '}
                    </div>
                ))}
            </div>
        </div>
    );
}
