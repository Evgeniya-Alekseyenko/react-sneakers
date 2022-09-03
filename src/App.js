import React, { useState, useEffect } from 'react';

import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setsearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        fetch('https://630e37de3792563418798019.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    const onAddtoCart = (obj) => {
        setCartItems((prev) => [...prev, obj]);
    };
    // console.log(cartItems);

    const onChangeSearchInput = (event) => {
        setsearchValue(event.target.value);
    };

    return (
        <div className='wrapper'>
            {cartOpened && (
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                />
            )}
            {/* {cartOpened ? ( <Drawer onClose={() => setCartOpened(false)} />) : null} */}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className='content'>
                <div className='content-header'>
                    <h1>
                        {searchValue
                            ? `Search by: "${searchValue}" `
                            : `All sneakers`}
                    </h1>
                    <div className='search-block'>
                        <img src='/img/Search.svg' alt='Search icon' />
                        {searchValue && (
                            <img
                                onClick={() => setsearchValue('')}
                                className='clear'
                                src='/img/Btn-removed.svg'
                                alt='Clear'
                            />
                        )}
                        <input
                            onChange={onChangeSearchInput}
                            value={searchValue}
                            placeholder='Search...'
                        />
                    </div>
                </div>
                <div className='content-card-box'>
                    {items
                        .filter((item) =>
                            item.title
                                .toLowerCase()
                                .includes(searchValue.toLocaleLowerCase())
                        )
                        .map((item, title) => (
                            <Card
                                key={item.title}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onPlus={(obj) => onAddtoCart(obj)}
                                // onClickFavorite={() => console.log('item is', item)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
// #5 44:00
export default App;
