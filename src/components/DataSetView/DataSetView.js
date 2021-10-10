import React from 'react';
import {Tabs} from 'antd';
import {Attributes} from "../Attributes/Attributes";
import styles from './DataSetView.module.css'


function DataSetView({dataSet}) {
    const {TabPane} = Tabs;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{dataSet.title}</h1>
                <div className={styles.description}> Descriptions</div>
            </div>
            <div className={styles.tabs}>
                <Tabs defaultActiveKey="1" onChange={null}>
                    <TabPane tab="Схема" key="1">
                        <pre>
                            <code>
                                {JSON.stringify(dataSet).replaceAll(',', '\n')}
                            </code>
                        </pre>
                    </TabPane>
                    <TabPane tab="Связи" key="3">
                        <div>Список с какими датасетами этот датасет связан</div>
                    </TabPane>
                    <TabPane tab="Статистика" key="4">
                        <div>2 графика</div>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default DataSetView;
