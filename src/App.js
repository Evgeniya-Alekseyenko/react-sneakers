import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import AppContext from './context';
import Header from './components/Header';
import Drawer from './components/Drawer/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [orderId, setOrderId] = useState(null);
    const [isOrderComplete, setIsOrderComplete] = useState(false);

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

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find(
                (item) => Number(item.parentId) === Number(obj.id)
            );
            if (findItem) {
                setCartItems((prev) =>
                    prev.filter(
                        (item) => Number(item.parentId) !== Number(obj.id)
                    )
                );
                await axios.delete(
                    `https://630e37de3792563418798019.mockapi.io/cart/${findItem.id}`
                );
            } else {
                setCartItems((prev) => [...prev, obj]);
                const { data } = await axios.post(
                    'https://630e37de3792563418798019.mockapi.io/cart',
                    obj
                );
                setCartItems((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    })
                );
            }
        } catch (error) {
            alert('Error adding to cart');
            console.error(error);
        }
    };
    const onRemoveItem = (id) => {
        // axios.delete(`https://630e37de3792563418798019.mockapi.io/cart/${id}`);
        // setCartItems((prev) => prev.filter((item) => item.id !== id));
        try {
            axios.delete(
                `https://630e37de3792563418798019.mockapi.io/cart/${id}`
            );
            setCartItems((prev) =>
                prev.filter((item) => Number(item.id) !== Number(id))
            );
        } catch (error) {
            alert('Error when deleting from cart');
            console.error(error);
        }
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (
                favorites.find((favObj) => Number(favObj.id) === Number(obj.id))
            ) {
                axios.delete(
                    `https://630e37de3792563418798019.mockapi.io/favorites/${obj.id}`
                );
                setFavorites((prev) =>
                    prev.filter((item) => Number(item.id) !== Number(obj.id))
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

    const isItemAdded = (id) => {
        // return cartItems.some((obj) => Number(obj.id) === Number(id));
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

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
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                isItemAdded,
                onAddToFavorite,
                onAddToCart,
                setCartOpened,
                setCartItems,
                orderId,
                onClickOrder,
                isOrderComplete,
            }}
        >
            <div className='wrapper'>
                {/* {cartOpened && (
                    <Drawer
                        items={cartItems}
                        onClose={() => setCartOpened(false)}
                        onRemove={onRemoveItem}
                    />
                )} */}

                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                    onRemove={onRemoveItem}
                    opened={cartOpened}
                />

                <Header onClickCart={() => setCartOpened(true)} />

                <Routes>
                    <Route
                        exact
                        path=''
                        element={
                            <Home
                                items={items}
                                cartItems={cartItems}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                onAddToFavorite={onAddToFavorite}
                                onAddtoCart={onAddToCart}
                                isLoading={isLoading}
                            />
                        }
                    ></Route>
                </Routes>
                <Routes>
                    <Route
                        exact
                        path='favorites'
                        element={<Favorites />}
                    ></Route>
                </Routes>
                <Routes>
                    <Route exact path='/orders' element={<Orders />}></Route>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}
// #7 01:07
export default App;
