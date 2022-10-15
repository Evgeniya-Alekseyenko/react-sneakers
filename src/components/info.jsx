import React, { useContext } from 'react';

import AppContext from '../context';

export default function Info({ title, image, description }) {
    const { setCartOpened } = useContext(AppContext);

    return (
        <div className='cartEmpty'>
            <img width='120px' src={image} alt='Empty' />
            <h2>{title}</h2>
            <p>{description}</p>
            <button
                onClick={() => setCartOpened(false)}
                className='greenButton'
            >
                <img src='/img/Arrow.svg' alt='Arrow' />
                Return
            </button>
        </div>
    );
}
