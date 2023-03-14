import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card/Card';
import AppContext from '../context';

export default function Favorites() {
    const { onAddToFavorite } = useContext(AppContext);

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites =
            JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    return (
        <div className='content'>
            <div>
                {favorites.length > 0 ? (
                    <div>
                        <div className='content-header'>
                            <h1>My bookmarks</h1>
                        </div>
                        <div className='content-card-box'>
                            {favorites.map((item, index) => (
                                <Card
                                    key={index}
                                    favorited={true}
                                    onFavorite={onAddToFavorite}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='emptyList'>
                        <h1>No bookmarks</h1>
                        <p className='emptyList-title'>
                            You haven't bookmarked anything
                        </p>
                        <button className='greenButton'>
                            <Link to='/'>
                                <span className='btn-title'>Return</span>
                                <img src='/img/Arrow.svg' alt='Arrow' />
                            </Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
