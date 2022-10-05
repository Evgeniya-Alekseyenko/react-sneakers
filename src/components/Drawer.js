export default function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <h2>
                    Cart
                    <img
                        onClick={onClose}
                        className='cart-item-btn___remove'
                        src='/img/Btn-removed.svg'
                        alt='Close'
                    />
                </h2>

                {items.length > 0 ? (
                    <div className='cart-item-box'>
                        {items.map((obj) => (
                            <div key={obj.id} className='cart-item'>
                                <img
                                    width={70}
                                    height={70}
                                    src={obj.imageUrl}
                                    alt='Sneakers'
                                />
                                <div className='cart-item__text'>
                                    <p className='card-box__title'>
                                        {obj.title}{' '}
                                    </p>
                                    <b>{obj.price}</b>
                                </div>
                                <img
                                    onClick={() => onRemove(obj.id)}
                                    className='cart-item-btn___remove'
                                    src='/img/Btn-removed.svg'
                                    alt='Remove'
                                />
                            </div>
                        ))}
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
                ) : (
                    <div className='cartEmpty'>
                        <img
                            className='mb-20'
                            width='120px'
                            height='120px'
                            src='/img/EmptyCart.svg'
                            alt='Empty cart'
                        />
                        <h2>Cart is empty</h2>
                        <p className='opacity-6'>
                            Add at least one pair of sneakers to place an order.
                        </p>
                        <button onClick={onClose} className='greenButton'>
                            <img src='/img/Arrow.svg' alt='Arrow' />
                            Come back
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
