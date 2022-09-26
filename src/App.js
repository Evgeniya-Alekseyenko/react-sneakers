import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setsearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        axios
            .get('https://630e37de3792563418798019.mockapi.io/items')
            .then((res) => {
                setItems(res.data);
            });
        axios
            .get('https://630e37de3792563418798019.mockapi.io/cart')
            .then((res) => {
                setCartItems(res.data);
            });
        axios
            .get('https://630e37de3792563418798019.mockapi.io/favorites')
            .then((res) => {
                setFavorites(res.data);
            });
    }, []);

    const onAddtoCart = (obj) => {
        // console.log('obj is', obj);
        axios.post('https://630e37de3792563418798019.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };
    // console.log(cartItems);

    const onRemoveItem = (id) => {
        axios.delete(`https://630e37de3792563418798019.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(
                    `https://630e37de3792563418798019.mockapi.io/favorites/${obj.id}`
                );
            } else {
                const { data } = await axios.post(
                    'https://630e37de3792563418798019.mockapi.io/favorites',
                    obj
                );
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Failed to add to favorites');
        }
    };
    const onChangeSearchInput = (event) => {
        setsearchValue(event.target.value);
    };

    return (
        <div className='wrapper'>
            {cartOpened && (
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                    onRemove={onRemoveItem}
                />
            )}
            {/* {cartOpened ? ( <Drawer onClose={() => setCartOpened(false)} />) : null} */}
            <Header onClickCart={() => setCartOpened(true)} />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setsearchValue={setsearchValue}
                            onAddtoCart={onAddtoCart}
                            onAddToFavorite={onAddToFavorite}
                            onChangeSearchInput={onChangeSearchInput}
                        />
                    }
                ></Route>
            </Routes>
            <Routes>
                <Route
                    exact
                    path='/favorites'
                    element={
                        <Favorites
                            items={favorites}
                            onAddToFavorite={onAddToFavorite}
                        />
                    }
                ></Route>
            </Routes>
        </div>
    );
}
// #5 02:25
export default App;
