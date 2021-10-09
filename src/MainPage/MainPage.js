import React from 'react';
import {Input, Card} from 'antd';
import styles from './MainPage.module.css';

const mockContr = [{
    id: 1,
    name: 'ГК «Донстрой»',
    img: 'https://www.vtb.ru/-/media/Feature/Companies/donstroy.png'
}, {
    id: 2,
    name: 'Группа Компаний ГАЛС',
    img: 'https://www.vtb.ru/-/media/Feature/Companies/gals.png'
},
    {
        id: 3,
        name: 'ПИК',
        img: 'https://www.vtb.ru/-/media/Feature/Companies/pik-new.png'
    }]


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
                    {mockContr.length && mockContr.map(contr => (
                        <Card key={contr.id} className={styles.cardListItem}
                              cover={
                                  <img
                                      alt="example"
                                      src={contr.img}/>
                              }
                              hoverable
                        />))
                    }
                </div>
            </div>
        </>
    );
}

export default MainPage;
