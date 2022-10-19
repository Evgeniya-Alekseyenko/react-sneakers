import React, { useContext } from 'react';

import Card from '../components/Card/Card';
import AppContext from '../context';

export default function Favorites() {
    const { favorites, onAddToFavorite } = useContext(AppContext);

    return (
        <div className='content'>
            <div className='content-header'>
                <h1>My bookmakers</h1>
            </div>
            <div>
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
        </div>
    );
}
