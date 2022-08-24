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
            <div className='content'>
                <h1>All sneakers</h1>
                <div className='content-box'>
                    <div className='card-box'>
                        <img src='/img/sneakers/1.jpg' alt='green sneakers' />
                        <p className='card-box__title'>
                            Nike Blazer Mid Suede Men's Sneakers
                        </p>
                        <div className='card-box__info'>
                            <div className='card-box__text'>
                                <span>Price:</span>
                                <b>750 $</b>
                            </div>
                            <button className='card-box__btn'>
                                <img
                                    width={11}
                                    height={11}
                                    src='/img/Plus.svg'
                                    alt='plus'
                                />
                            </button>
                        </div>
                    </div>

                    <div className='card-box'>
                        <img src='/img/sneakers/2.jpg' alt='green sneakers' />
                        <p className='card-box__title'>
                            Nike Blazer Mid Suede Men's Sneakers
                        </p>
                        <div className='card-box__info'>
                            <div className='card-box__text'>
                                <span>Price:</span>
                                <b>750 $</b>
                            </div>
                            <button className='card-box__btn'>
                                <img
                                    width={11}
                                    height={11}
                                    src='/img/Plus.svg'
                                    alt='plus'
                                />
                            </button>
                        </div>
                    </div>

                    <div className='card-box'>
                        <img src='/img/sneakers/3.jpg' alt='green sneakers' />
                        <p className='card-box__title'>
                            Nike Blazer Mid Suede Men's Sneakers
                        </p>
                        <div className='card-box__info'>
                            <div className='card-box__text'>
                                <span>Price:</span>
                                <b>750 $</b>
                            </div>
                            <button className='card-box__btn'>
                                <img
                                    width={11}
                                    height={11}
                                    src='/img/Plus.svg'
                                    alt='plus'
                                />
                            </button>
                        </div>
                    </div>

                    <div className='card-box'>
                        <img src='/img/sneakers/4.jpg' alt='green sneakers' />
                        <p className='card-box__title'>
                            Nike Blazer Mid Suede Men's Sneakers
                        </p>
                        <div className='card-box__info'>
                            <div className='card-box__text'>
                                <span>Price:</span>
                                <b>750 $</b>
                            </div>
                            <button className='card-box__btn'>
                                <img
                                    width={11}
                                    height={11}
                                    src='/img/Plus.svg'
                                    alt='plus'
                                />
                            </button>
                        </div>
                    </div>

                    {/* <div className='card-box'>
                        <img src='/img/sneakers/5.jpg' alt='green sneakers' />
                        <p className='card-box__title'>
                            Nike Blazer Mid Suede Men's Sneakers
                        </p>
                        <div className='card-box__info'>
                            <div className='card-box__text'>
                                <span>Price:</span>
                                <b>750 $</b>
                            </div>
                            <button className='card-box__btn'>
                                <img
                                    width={11}
                                    height={11}
                                    src='/img/Plus.svg'
                                    alt='plus'
                                />
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
// 2:09
export default App;
