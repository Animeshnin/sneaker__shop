import React, {useEffect, useState} from 'react';
import styles from './card.module.scss'


function Card(props) {
    const {title, price, imageUrl, handleClickFavorite, handleClickPlus, id, cartItems } = props;
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClickHeart = () => {
        handleClickFavorite(Number(id));
        setIsFavorite(prevState => !prevState);
    }

    const handleClickAdded = () => {
        handleClickPlus(Number(id))
        setIsAdded(prevState => !prevState);
    }

    useEffect(() => {
        // Проверяем, есть ли id в cartItems
        const newArr = cartItems.map((item) => item.id);
        setIsAdded(newArr.includes(Number(id))); // обновляем состояние isAdded
    }, [cartItems]); // зависимость от cartItems и id


    return (
        <div className={styles.card}>
            <div className={styles.cardButtonFavorite}>
                <img src={isFavorite ? "/img/icon/heart-liked.svg" : "/img/icon/heart-unliked.svg"} onClick={() => handleClickHeart()} alt="Unliked"/>
            </div>
            <img width={133} height={11} src={imageUrl} alt=""/>
            <h5>{title}</h5>
            <div className={styles.cardInformation}>
                <div>
                    <p className={'grey'}>Цена:</p>
                    <b>{price}р.</b>
                </div>
                <button className={'button-added'} onClick={() => handleClickAdded()}>
                    <img src={isAdded ? "/img/icon/button-added.svg" : "/img/icon/btn-plus.svg"} alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Card;