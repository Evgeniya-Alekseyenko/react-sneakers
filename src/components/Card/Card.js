import React, { useState, useContext } from 'react';
import ContentLoader from 'react-content-loader';

import AppContext from '../../context';

import styles from './Card.module.scss';

export default function Card({
    id,
    title,
    imageUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false,
}) {
    const { isItemAdded } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);
    const obj = { id, parentId: id, title, imageUrl, price };

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox='0 0 155 265'
                    backgroundColor='#f3f3f3'
                    foregroundColor='#ecebeb'
                >
                    <rect
                        x='1'
                        y='0'
                        rx='10'
                        ry='10'
                        width='155'
                        height='155'
                    />
                    <rect x='0' y='167' rx='5' ry='5' width='155' height='15' />
                    <rect x='0' y='187' rx='5' ry='5' width='100' height='15' />
                    <rect x='1' y='234' rx='5' ry='5' width='80' height='25' />
                    <rect
                        x='124'
                        y='230'
                        rx='10'
                        ry='10'
                        width='32'
                        height='32'
                    />
                </ContentLoader>
            ) : (
                <>
                    {/*onFavorite && : если у нас нет onFavorite, то не отображаем его(напр. на странице заказов нам не нужно отображать сердечко в карточке)  */}
                    {onFavorite && (
                        <div
                            className={styles.favorite}
                            onClick={onClickFavorite}
                        >
                            <img
                                src={
                                    isFavorite
                                        ? '/img/Heart-liked.svg'
                                        : '/img/Heart-unliked.svg'
                                }
                                alt='Unliked'
                            />
                        </div>
                    )}
                    <img
                        className={styles.cardImg}
                        src={imageUrl}
                        alt='Sneakers'
                    />
                    <p className={styles.title}>{title}</p>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <span>Price:</span>
                            <b>{price} $</b>
                        </div>
                        {/* нигде не отображаем плюсик кроме главной страницы, нам не нужен он напр на странице ордеров */}
                        {onPlus && (
                            <img
                                className={styles.plus}
                                onClick={onClickPlus}
                                src={
                                    isItemAdded(id)
                                        ? '/img/Btn-checked.svg'
                                        : '/img/Btn-plus.svg'
                                }
                                alt='Plus'
                            />
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
