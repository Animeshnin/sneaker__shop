import React from 'react';

function DrawerAside({handleCloseClick, sneakers , cartItems, deleteItemToCart}) {

    return (
        <aside  className={'overlay'}>
            <div className="overlay-drawer">
                <h2 className={'bold'}>Корзина <img onClick={handleCloseClick} className={'cart-item-btn__remove'} src="/img/icon/btn-remove.svg"
                                                    alt="Button remove"/></h2>
                <div className="cart-list">
                    {
                        cartItems.map((item, index) => (
                            sneakers.filter((id, index) => (
                                Number(id.id) === item
                            )).map((sneaker, index) => (
                                <div key={index} className="cart-item">
                                    <img width={70} height={70} src={sneaker.imageUrl} alt="Sneakers"/>
                                    <div className={'card-item-information'}>
                                        <p>{sneaker.title}</p>
                                        <p><b>{sneaker.price}руб.</b></p>
                                    </div>
                                    <img onClick={() => deleteItemToCart(sneaker.id)} className={'cart-item-btn__remove'} src="/img/icon/btn-remove.svg"
                                         alt="Button remove"/>
                                </div>
                            ))

                        ))
                        //     sneakers.filter((item) => cartItems.includes(item.id))
                        //     .map((item, key) => (
                        //     <div key={key} className="cart-item">
                        //         <img width={70} height={70} src={`${item.imageUrl}`} alt="Sneakers"/>
                        //         <div className={'card-item-information'}>
                        //             <p>{item.title}</p>
                        //             <p><b>{item.price}руб.</b></p>
                        //         </div>
                        //         <img className={'cart-item-btn__remove'} src="/img/icon/btn-remove.svg"
                        //          alt="Button remove"/>
                        // </div>
                    // ))
                    }

                </div>

                <div className="overlay-drawer-bottom__list">
                    <div className={'overlay-drawer-bottom__item'}>
                        <span>Итого</span>
                        <div></div>
                        <b>21 498 руб. </b>
                    </div>
                    <div className={'overlay-drawer-bottom__item'}>
                        <span>Налог 5%</span>
                        <div></div>
                        <b>1074 руб. </b>
                    </div>
                    <button className={'button-buy'}>Оформить заказ <img src="/img/icon/arrow.svg" alt="Arrow"/>
                    </button>
                </div>

            </div>

        </aside>
    );
}

export default DrawerAside;