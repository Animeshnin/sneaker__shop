import React from 'react';

function Header({handleOpenClick}) {
    return (
        <header className={'header'}>
            <div className={'header-logo'}>
                <img src={'/img/icon/logo.svg'} alt={'React sneaker logo'} width={40} height={40}/>
                <div className={'header-logo-info'}>
                    <h3>React Sneakers</h3>
                    <span className={'grey'}>Магазин лучших кроссовок</span>
                </div>
            </div>
            <ul className={'header-menu'}>
                <li onClick={handleOpenClick}>
                    <img src={'/img/icon/trash.svg'} alt={''}/>
                    <span>1205 руб</span></li>
                <li>
                    <img src={'/img/icon/like.svg'} alt={''}/>
                    <span>Закладки </span>
                </li>
                <li>
                    <img src={'/img/icon/user.svg'} alt={''}/>
                    <span>Профиль</span>
                </li>
            </ul>
        </header>

    );
}

export default Header;