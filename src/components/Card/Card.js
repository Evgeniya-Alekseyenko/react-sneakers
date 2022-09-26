import React, { useState } from 'react';
import styles from './Card.module.scss';

export default function Card({
    id,
    imageUrl,
    title,
    price,
    onFavorite,
    onPlus,
    favorited = false,
}) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
        onPlus({ imageUrl, title, price });
    };

    // const onClickFavorite = () => {
    //     onFavorite({ imageUrl, title, price });
    //     setIsFavorite(!isFavorite);
    // };

    const onClickFavorite = () => {
        onFavorite({ id, title, imageUrl, price });
        setIsFavorite(!isFavorite);
    };

    // useEffect(() => {
    //     console.log('Changed');
    // }, [isAdded]);

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img
                    src={
                        isFavorite
                            ? '/img/Heart-liked.svg'
                            : '/img/Heart-unliked.svg'
                    }
                    alt='Unliked'
                    // onClick={onClickFavorite}
                />
            </div>
            <img className={styles.cardImg} src={imageUrl} alt='Sneakers' />
            <p className={styles.title}>{title}</p>
            <div className={styles.info}>
                <div className={styles.text}>
                    <span>Price:</span>
                    <b>{price} $</b>
                </div>
                <img
                    onClick={onClickPlus}
                    src={isAdded ? '/img/Btn-checked.svg' : '/img/Btn-plus.svg'}
                    alt='plus'
                />
            </div>
        </div>
    );
}
