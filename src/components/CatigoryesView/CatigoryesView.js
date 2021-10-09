import React from 'react';
import {Tabs, Card} from 'antd';
import {useParams} from 'react-router-dom';
import styles from './CatigoryesView.module.css'

import {dataSets} from '../../common/const'

function CatigoryesView() {
    const {TabPane} = Tabs;

    const {name} = useParams();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Название категории</h1>
                <div className={styles.description}>Очень подробное описание категории или без него</div>
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
