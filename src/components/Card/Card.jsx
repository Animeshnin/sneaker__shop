import React, {useState} from 'react';
import styles from './card.module.scss'


function Card(props) {
    const {title, price, imageUrl, handleClickFavorite, handleClickPlus, id, cartItems } = props;
    const [isAdded, setIsAdded] = useState(false);
    let newArr = cartItems.map((item, index) => (item.id))

    const handleClickAdded = () => {
        handleClickPlus(Number(id))
        setIsAdded(!isAdded);
    }

    if(newArr.includes(id)){
        console.log("Все есть")
    }


    return (
        <div className={styles.card}>
            <div className={styles.cardButtonFavorite}>
                <img src="/img/icon/heart-unliked.svg" onClick={() => handleClickFavorite()} alt="Unliked"/>
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