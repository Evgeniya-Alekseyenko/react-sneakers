import React, { useState, useEffect } from 'react';

import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
    const [items, setItems] = useState([]);
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
// #4 1:52
export default App;
