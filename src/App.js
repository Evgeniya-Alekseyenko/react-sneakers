import React, { useState } from 'react';

import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

// const arr = [
//     {
//         title: "Nike Blazer Mid Suede Men's Sneakers",
//         price: 750,
//         imageUrl: '/img/sneakers/1.jpg',
//     },
//     {
//         title: "Nike Air Max 270 Men's Sneakers",
//         price: 750,
//         imageUrl: '/img/sneakers/2.jpg',
//     },
//     {
//         title: "Nike Blazer Mid Suede Men's Sneakers",
//         price: 800,
//         imageUrl: '/img/sneakers/3.jpg',
//     },
//     {
//         title: 'Puma X Aka Boku Future Rider Sneakers',
//         price: 950,
//         imageUrl: '/img/sneakers/4.jpg',
//     },
// ];

function App() {
    const [items, setItems] = useState([
        {
            title: 'Nike Blazer Mid Suede Sneakers',
            price: 750,
            imageUrl: '/img/sneakers/1.jpg',
        },
        {
            title: 'Nike Air Max 270 Sneakers',
            price: 750,
            imageUrl: '/img/sneakers/2.jpg',
        },
        {
            title: 'Nike Blazer Mid Suede Sneakers',
            price: 800,
            imageUrl: '/img/sneakers/3.jpg',
        },
        {
            title: 'Puma X Aka Boku Future Rider Sneakers',
            price: 950,
            imageUrl: '/img/sneakers/4.jpg',
        },
        {
            title: 'Under Armour Curry 8 Sneakers',
            price: 650,
            imageUrl: '/img/sneakers/5.jpg',
        },
        {
            title: 'Nike Kyrie 7 Sneakers',
            price: 900,
            imageUrl: '/img/sneakers/6.jpg',
        },
        {
            title: 'Jordan Air Jordan 11 Sneakers',
            price: 490,
            imageUrl: '/img/sneakers/7.jpg',
        },
    ]);
    const [cartOpened, setCartOpened] = useState(false);

    return (
        <div className='wrapper'>
            {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
            {/* {cartOpened ? ( <Drawer onClose={() => setCartOpened(false)} />) : null} */}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className='content'>
                <div className='content-header'>
                    <h1>All sneakers</h1>
                    <div className='search-block'>
                        <img src='/img/Search.svg' alt='Search icon' />
                        <input placeholder='Search...' />
                    </div>
                </div>
                <div className='content-card-box'>
                    {items.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            // onClickPlus={() => console.log('Click')}
                            // onClickFavorite={() => console.log('Heart')}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
// #3 1:52
export default App;
