import React from 'react';
import Card from '../components/Card/Card';

export default function Orders() {
    return (
        <div className='content'>
            <div className='content-header'>
                <h1>My orders</h1>
            </div>
            <div className='content-card-box'>
                {' '}
                <div className='content-card-box'>
                    {[].map((item, index) => (
                        <Card />
                    ))}
                </div>
            </div>
        </div>
    );
}
