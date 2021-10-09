import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Card}  from 'antd';
import { mockPartner } from '../common/const'
import styles from './MainPage.module.css';

function MainPage() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.logoImg} src='https://miro.medium.com/max/1024/0*ENJEJZztXj1sUTRi.png'
                         alt='logo'/>
                    <div className={styles.logoTitle}>DataPlace</div>
                </div>
                <Input.Search className={styles.input}/>
                <div className={styles.cardList}>
                    {mockPartner.length && mockPartner.map(contr => (
                      <Link to={`/partner/${contr.path}`}>
                        <Card key={contr.id} className={styles.cardListItem}
                              cover={
                                <img
                                alt="example"
                                src={contr.img}/>
                              }
                              hoverable
                              />
                        </Link>))
                    }
                </div>
            </div>
        </>
    );
}

export default MainPage;
