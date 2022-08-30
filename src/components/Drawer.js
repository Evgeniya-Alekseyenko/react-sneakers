export default function Drawer(props) {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <h2>
                    Cart
                    <img
                        onClick={props.onClose}
                        className='cart-item-btn___remove'
                        src='/img/Btn-removed.svg'
                        alt='Close'
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
    );
}
