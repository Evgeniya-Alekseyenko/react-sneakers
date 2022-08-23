function App() {
    return (
        <div className='wrapper'>
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
                    <li className='cart-box'>
                        <img
                            src='/img/Cart.svg'
                            width={18}
                            height={18}
                            alt='Cart'
                        />
                        <span>45$</span>
                    </li>
                    <li>
                        <img
                            src='/img/Favorite-outline.svg'
                            width={18}
                            height={18}
                            alt='User'
                        />
                    </li>
                    <li>
                        <img
                            src='/img/User.svg'
                            width={18}
                            height={18}
                            alt='User'
                        />
                    </li>
                </ul>
            </header>
            <div className='content'>
                <h1>All sneakers</h1>
            </div>
        </div>
    );
}
// 2:09
export default App;
