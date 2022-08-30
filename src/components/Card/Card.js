import styles from './Card.module.scss';

export default function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src='/img/Heart-unliked.svg' alt='Unliked' />
            </div>
            <img src={props.imageUrl} alt='Sneakers' />
            <p className={styles.title}>{props.title}</p>
            <div className={styles.info}>
                <div className={styles.text}>
                    <span>Price:</span>
                    <b>{props.price} $</b>
                </div>
                <button className={styles.btn} onClick={props.clickMe}>
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
