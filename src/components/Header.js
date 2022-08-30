export default function Header(props) {
    return (
        <header>
            <div className='headerLeft'>
                <img
                    src='/img/logo.png'
                    width={40}
                    height={40}
                    alt='logo sneakers'
                />
                <div className='headerInfo'>
                    <h3>React Sneakers</h3>
                    <p>Shop the best sneakers</p>
                </div>
            </div>
            <ul className='headerRight'>
                <li className='cart-box' onClick={props.onClickCart}>
                    <img
                        src='/img/Cart.svg'
                        width={20}
                        height={20}
                        alt='Cart'
                    />
                    <span>45 $</span>
                </li>
                <li>
                    <img
                        src='/img/Favorite-outline.svg'
                        width={21}
                        height={21}
                        alt='User'
                    />
                </li>
                <li>
                    <img
                        src='/img/User.svg'
                        width={20}
                        height={20}
                        alt='User'
                    />
                </li>
            </ul>
        </header>
    );
}
