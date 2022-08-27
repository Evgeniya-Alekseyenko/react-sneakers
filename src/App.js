import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
    return (
        <div className='wrapper'>
            <Drawer />
            <Header />
            <div className='content'>
                <div className='content-header'>
                    <h1>All sneakers</h1>
                    <div className='search-block'>
                        <img src='/img/Search.svg' alt='Search icon' />
                        <input placeholder='Search...' />
                    </div>
                </div>
                <div className='content-card-box'>
                    <Card />

                    {/* <div className='card-box'>
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
                    </div> */}
                </div>
            </div>
        </div>
    );
}
// #3 55:00
export default App;
