import React from 'react';
import { Tabs, Card, Button, Tooltip, message } from 'antd';
import { useParams } from 'react-router-dom';
import styles from './CatigoryesView.module.css'

import {dataSets} from '../../common/const'

function CatigoryesView({ catigory }) {
    const {TabPane} = Tabs;

    const { name } = useParams();

    const date = '23/09/2021'

    const handleClick = () => {
      setTimeout(() => {
        message.success('категория куплена')
      }, 1000)
    }

    console.log(catigory)

    return (
        <div className={styles.container}>
            <div className={styles.header}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>{ catigory.title }</h1>
                <Tooltip title="Купить все датасеты в данной категории" placement="bottom">
                   <Button type="primary" shape="round" onClick={handleClick}>Купить</Button>
                </Tooltip>
              </div>
                <div className={styles.description}>
                  <div>{`В даннай категории хранятся датасеты с данными о клиентах нашей компании`}</div>
                  <div>{`Всего датасетов ${catigory.children.length} в категории ${catigory.title}`} </div>
                  <div>{`Дата загрузки последнего датасета ${date}`}</div>
                </div>
            </div>
            <div>
                <Tabs defaultActiveKey="1" onChange={null} className={styles.tabs}>
                    <TabPane tab="Все датасеты" key="1" className={styles.tab}>
                        {dataSets[name].length && dataSets[name].map(el => (
                            <Card key={el.id} hoverable>
                                <div className={styles.cardListItem}>
                                    <div className={styles.cardListItemTitle}>{el.title}</div>
                                    <div className={styles.price}>{el.price}</div>
                                </div>

                            </Card>))}
                    </TabPane>
                    <TabPane tab="Новые датасеты" key="2">
                        {dataSets[name].length && dataSets[name].map(el => el.type === 'new' ? (
                            <Card key={el.id} hoverable>
                                <div className={styles.cardListItem}>
                                    <div className={styles.cardListItemTitle}>{el.title}</div>
                                    <div className={styles.price}>{el.price}</div>
                                </div>
                            </Card>) : null)}
                    </TabPane>
                    <TabPane tab="Популярные" key="3">
                        {dataSets[name].length && dataSets[name].map(el => el.type === 'popular' ? (
                            <Card key={el.id} hoverable>
                                <div className={styles.cardListItem}>
                                    <div className={styles.cardListItemTitle}>{el.title}</div>
                                    <div className={styles.price}>{el.price}</div>
                                </div>
                            </Card>) : null)}
                    </TabPane>
                    <TabPane tab="Куплено" key="4">
                        {dataSets[name].length && dataSets[name].map(el => el.type === 'isPurchased' ? (
                            <Card key={el.id} hoverable>
                                <div className={styles.cardListItem}>
                                    <div className={styles.cardListItemTitle}>{el.title}</div>
                                    <div className={styles.buy}>Куплено</div>
                                </div>
                            </Card>) : null)}
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default CatigoryesView;
