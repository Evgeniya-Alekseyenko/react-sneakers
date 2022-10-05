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
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // axios
        //     .get('https://630e37de3792563418798019.mockapi.io/items')
        //     .then((res) => {
        //         setItems(res.data);
        //     });
        // axios
        //     .get('https://630e37de3792563418798019.mockapi.io/cart')
        //     .then((res) => {
        //         setCartItems(res.data);
        //     });
        // axios
        //     .get('https://630e37de3792563418798019.mockapi.io/favorites')
        //     .then((res) => {
        //         setFavorites(res.data);
        //     });
        async function fetchData() {
            // TODO: Сделать try catch + Promise.all
            // setIsLoading(true);// если ф-я вып-ся больше, чем 1 раз, то ставить еще и тру
            const cartResponse = await axios.get(
                'https://630e37de3792563418798019.mockapi.io/cart'
            );
            const favoritesResponse = await axios.get(
                'https://630e37de3792563418798019.mockapi.io/favorites'
            );
            const itemsResponse = await axios.get(
                'https://630e37de3792563418798019.mockapi.io/items'
            );

            setIsLoading(false);
            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
        }

        fetchData();
    }, []);

    const onAddtoCart = (obj) => {
        // console.log('obj is', obj);
        // axios.post('https://630e37de3792563418798019.mockapi.io/cart', obj);
        // setCartItems((prev) => [...prev, obj]);
        console.log(obj);
        if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
            axios.delete(
                `https://630e37de3792563418798019.mockapi.io/cart/${obj.id}`
            );
            setCartItems((prev) =>
                prev.filter((item) => Number(item.id) !== Number(obj.id))
            );
        } else {
            axios.post('https://630e37de3792563418798019.mockapi.io/cart', obj);
            setCartItems((prev) => [...prev, obj]);
        }
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
        setSearchValue(event.target.value);
    };

    // const isItemAdded = (id) => {
    //     return cartItems.some((obj) => Number(obj.id) === Number(id));
    //   };

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
                            cartItems={cartItems}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite}
                            onAddtoCart={onAddtoCart}
                            isLoading={isLoading}
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
// #6 02:00
export default App;
