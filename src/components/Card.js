export default function Card() {
    return (
        <div className='card-box'>
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
        </div>
    );
}
