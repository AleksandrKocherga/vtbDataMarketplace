import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          src='https://miro.medium.com/max/1024/0*ENJEJZztXj1sUTRi.png'
          alt='logo'
        />
        <span>
          <Link to='/'>DataMarket</Link>
        </span>
      </div>
      <div className={styles.office}>
        <Link to='/cabinet'>Мой Кабинет</Link>
      </div>
    </div>
  );
}

export default Header;
