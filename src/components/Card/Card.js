import React, { useState, useContext } from 'react';
import ContentLoader from 'react-content-loader';

import styles from './Card.module.scss';
import AppContext from '../../context';

export default function Card({
    id,
    title,
    imageUrl,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    // added = false,
    loading = false,
}) {
    const { isItemAdded } = useContext(AppContext);
    // const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(favorited);
    const obj = { id, parentId: id, title, imageUrl, price };

    const onClickPlus = () => {
        // onPlus({ id, imageUrl, title, price });
        onPlus(obj);
        // setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        // onFavorite({ id, title, imageUrl, price });
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
                    {/* <div className={styles.favorite} onClick={onClickFavorite}>
                        <img
                            src={
                                isFavorite
                                    ? '/img/Heart-liked.svg'
                                    : '/img/Heart-unliked.svg'
                            }
                            alt='Unliked'
                        />
                    </div> */}
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
                        {onPlus && (
                            // <img
                            //     onClick={onClickPlus}
                            //     src={
                            //         // isAdded
                            //         isItemAdded(id)
                            //             ? '/img/Btn-checked.svg'
                            //             : '/img/Btn-plus.svg'
                            //     }
                            //     alt='plus'
                            // />

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
