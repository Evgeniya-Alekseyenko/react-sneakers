import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';
// import AppContext from '../context';

export default function Header(props) {
    // const { cartItems } = useContext(AppContext);
    // const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

    const { totalPrice } = useCart();

    return (
        <header>
            <div className='headerLeft'>
                <Link to='/'>
                    <img
                        src='/img/logo.png'
                        width={40}
                        height={40}
                        alt='Logo sneakers'
                    />
                    <div className='headerInfo'>
                        <h3>React Sneakers</h3>
                        <p>Shop the best sneakers</p>
                    </div>
                </Link>
            </div>
            <ul className='headerRight'>
                <li className='cart-box' onClick={props.onClickCart}>
                    <img
                        src='/img/Cart.svg'
                        width={20}
                        height={20}
                        alt='Cart'
                    />
                    <span>{totalPrice} $</span>
                </li>
                <li>
                    <Link to='/favorites'>
                        <img
                            src='/img/Favorite-outline.svg'
                            width={21}
                            height={21}
                            alt='Bookmarks'
                        />
                    </Link>
                </li>
                {/* <li>
                    <img
                        src='/img/User.svg'
                        width={20}
                        height={20}
                        alt='User'
                    />
                </li> */}
                <Link to='/orders'>
                    <img
                        width={18}
                        height={18}
                        src='/img/User.svg'
                        alt='User'
                    />
                </Link>
            </ul>
        </header>
    );
}
