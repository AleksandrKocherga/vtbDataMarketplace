import React from 'react';

import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src='https://miro.medium.com/max/1024/0*ENJEJZztXj1sUTRi.png' alt="logo"/>
                <span>DataMarket</span>

            </div>
            <div className={styles.office}>Мой Кабинет</div>
        </div>
    );
}

export default Header;

