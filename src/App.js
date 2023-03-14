import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router';

import AppContext from './context';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            // setIsLoading(true);// если ф-я вып-ся больше, чем 1 раз, то ставить еще и тру
            try {
                const [cartResponse, favoritesResponse, itemsResponse] =
                    await Promise.all([
                        axios.get(
                            'https://630e37de3792563418798019.mockapi.io/cart'
                        ),
                        axios.get(
                            'https://630e37de3792563418798019.mockapi.io/favorites'
                        ),
                        axios.get(
                            'https://630e37de3792563418798019.mockapi.io/items'
                        ),
                    ]);
                // const cartResponse = await axios.get(
                //     'https://630e37de3792563418798019.mockapi.io/cart'
                // );
                // const favoritesResponse = await axios.get(
                //     'https://630e37de3792563418798019.mockapi.io/favorites'
                // );
                // const itemsResponse = await axios.get(
                //     'https://630e37de3792563418798019.mockapi.io/items'
                // );

                setIsLoading(false);
                setCartItems(cartResponse.data);
                setFavorites(favoritesResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert('Error requesting data');
                console.error(error);
            }
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
                //чтобы не дожидаться ответа с бэка, и сразу в корзину добавлять товар:
                //если parentId из массива = тому parentId, что пришел с бэка, замени этот item, возьми все его старые данные ..., возьми его id и замени на тот, что пришел с бэка, иначе return item;
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

    function onAddToFavorite(item) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        let index = favorites.findIndex((f) => f.id === item.id);

        if (index === -1) {
            favorites.push(item);
        } else {
            favorites.splice(index, 1);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
        //пробегаемся по каждому объекту, вытаскиваем parentId, и сравниваем с тем id, кот передали в ф-ю
    };

    const isItemFavorited = (id) => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        return favorites.some((obj) => Number(obj.parentId) === Number(id));
    };

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                isItemAdded,
                isItemFavorited,
                onAddToFavorite,
                onAddToCart,
                setCartOpened,
                setCartItems,
            }}
        >
            <div className='wrapper'>
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
                        path='/'
                        element={
                            <Home
                                items={items}
                                cartItems={cartItems}
                                favorites={favorites}
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                onAddToFavorite={onAddToFavorite}
                                onAddtoCart={onAddToCart}
                                isLoading={isLoading}
                            />
                        }
                    ></Route>
                    <Route
                        exact
                        path='favorites'
                        element={<Favorites />}
                    ></Route>
                    <Route exact path='orders' element={<Orders />}></Route>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}
export default App;
