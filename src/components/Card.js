export default function Card(props) {
    return (
        <div className='card-box'>
            <div className='favorite'>
                <img src='/img/Heart-unliked.svg' alt='Unliked' />
            </div>
            <img src={props.imageUrl} alt='Sneakers' />
            <p className='card-box__title'>{props.title}</p>
            <div className='card-box__info'>
                <div className='card-box__text'>
                    <span>Price:</span>
                    <b>{props.price} $</b>
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
