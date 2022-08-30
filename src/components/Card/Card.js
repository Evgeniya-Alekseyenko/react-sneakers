import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';

export default function Card(props) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    };

    useEffect(() => {
        console.log('Changed');
    }, [isAdded]);

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img
                    src='/img/Heart-unliked.svg'
                    alt='Unliked'
                    onClick={props.onClickFavorite}
                />
            </div>
            <img
                className={styles.cardImg}
                src={props.imageUrl}
                alt='Sneakers'
            />
            <p className={styles.title}>{props.title}</p>
            <div className={styles.info}>
                <div className={styles.text}>
                    <span>Price:</span>
                    <b>{props.price} $</b>
                </div>
                <img
                    onClick={onClickPlus}
                    src={isAdded ? '/img/Btn-checked.svg' : '/img/Btn-plus.svg'}
                    alt='plus'
                />
                {/* </button> */}
            </div>
        </div>
    );
}
