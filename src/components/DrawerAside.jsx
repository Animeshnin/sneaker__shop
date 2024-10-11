import React from 'react';

function DrawerAside({handleCloseClick, sneakers , cartItems, deleteItemToCart}) {


    return (
        <aside  className={'overlay'}>
            <div className="overlay-drawer">
                <h2 className={'bold'}>Корзина <img onClick={handleCloseClick} className={'cart-item-btn__remove'} src="/img/icon/btn-remove.svg"
                                                    alt="Button remove"/></h2>


                {
                    cartItems.length > 0 ?
                        <>
                            <div className="cart-list">
                                {
                                    cartItems.map((item, index) => (
                                        sneakers.filter((id) => (
                                            Number(id.id) === item.id
                                        )).map((sneaker) => (
                                            <div key={index} className="cart-item">
                                                <img width={70} height={70} src={sneaker.imageUrl} alt="Sneakers"/>
                                                <div className={'card-item-information'}>
                                                    <p>{sneaker.title}</p>
                                                    <p><b>{sneaker.price}руб.</b></p>
                                                </div>
                                                <img onClick={() => deleteItemToCart(item.sneakerId)}
                                                     className={'cart-item-btn__remove'} src="/img/icon/btn-remove.svg"
                                                     alt="Button remove"/>
                                            </div>
                                        ))

                                    ))
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
                                <button className={'button-buy'}>Оформить заказ <img src="/img/icon/arrow.svg"
                                                                                     alt="Arrow"/>
                                </button>
                            </div>
                        </> :
                        <div className="cart-list-clear">
                            <img src="/img/icon/clearCart.svg" alt=""/>
                            <b>Корзина пустая</b>
                            <p className={'cart-list-clear-text grey'}>Добавьте хотя бы одну пару кроссовок, чтобы
                                сделать
                                заказ.</p>
                            <button onClick={() => handleCloseClick()} className={'button-buy'} data-arrow={'back'}><img src="/img/icon/arrow.svg"
                                                                                      alt="Arrow"/> Оформить заказ
                            </button>
                        </div>


                }


            </div>

        </aside>
    );
}

export default DrawerAside;