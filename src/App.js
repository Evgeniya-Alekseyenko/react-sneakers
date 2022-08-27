import Card from './components/Card';
import Header from './components/Header';

function App() {
    return (
        <div className='wrapper'>
            <div
                //  style={{ display: 'none' }}
                className='overlay'
            >
                <div className='drawer'>
                    <h2>
                        Cart
                        <img
                            className='cart-item-btn___remove'
                            src='/img/Btn-removed.svg'
                            alt='Remove'
                        />
                    </h2>
                    <div className='cart-item-box'>
                        <div className='cart-item'>
                            <div>
                                <img
                                    width={70}
                                    height={70}
                                    src='/img/sneakers/1.jpg'
                                    alt='Sneakers'
                                />
                            </div>
                            <div className='cart-item__text'>
                                <p className='card-box__title'>
                                    Nike Blazer Mid Suede Men's Sneakers
                                </p>
                                <b>750 $</b>
                            </div>
                            <img
                                className='cart-item-btn___remove'
                                src='/img/Btn-removed.svg'
                                alt='Remove'
                            />
                        </div>
                        <div className='cart-item'>
                            <img
                                width={70}
                                height={70}
                                src='/img/sneakers/1.jpg'
                                alt='Sneakers'
                            />
                            <div className='cart-item__text'>
                                <p className='card-box__title'>
                                    Nike Blazer Mid Suede Men's Sneakers
                                </p>
                                <b>750 $</b>
                            </div>
                            <img
                                className='cart-item-btn___remove'
                                src='/img/Btn-removed.svg'
                                alt='Remove'
                            />
                        </div>
                    </div>
                    <div className='cart-item-bottom'>
                        <ul>
                            <li>
                                <span>Total:</span>
                                <div></div>
                                <b>1500 $</b>
                            </li>
                            <li className='cart-item-bottom__info'>
                                <span>Discount:</span>
                                <div></div>
                                <b>0 %</b>
                            </li>
                        </ul>
                        <button className='cart-item-btn greenButton'>
                            Checkout
                            <img src='/img/Arrow.svg' alt='Arrow' />
                        </button>
                    </div>
                </div>
            </div>

            <Header />
            {/* 
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
            </header> */}
            <div className='content'>
                <div className='content-header'>
                    <h1>All sneakers</h1>
                    <div className='search-block'>
                        <img src='/img/Search.svg' alt='Search icon' />
                        <input placeholder='Search...' />
                    </div>
                </div>
                <div className='content-card-box'>
                    {/* <div className='card-box'>
                        <div className='favorite'>
                            <img src='/img/Heart-unliked.svg' alt='Unliked' />
                        </div>
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
                    </div> */}

                    <Card />

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
                </div>
            </div>
        </div>
    );
}
// #2 1:48
export default App;
