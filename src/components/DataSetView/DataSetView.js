import React from 'react';
import {Tabs} from 'antd';
import {Doughnut} from 'react-chartjs-2';
import styles from './DataSetView.module.css'


function DataSetView({dataSet}) {
    const {TabPane} = Tabs;
    const options = {
        plugins: {
            legend: false,
            tooltip: false,
        },
    }
    const data = {
        labels: ['Red', 'Blue',],
        datasets: [
            {
                data: [20, 80],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.1)',
                    'rgba(54, 162, 235, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 0,
            },
        ],
    };
    const data2 = {
        labels: ['Red', 'Blue',],
        datasets: [
            {
                data: [20, 80],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0)',
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{dataSet.title}</h1>
                <div className={styles.description}>
                    <div className={styles.descriptionText}>
                        Описание если есть, автор может добавть
                        <div><strong>Автор</strong>:  {dataSet.author|| "Аноним"}</div>
                    </div>
                    <div className={styles.charts}>
                        <div className={styles.chart}>
                            <div>Популярность</div>
                            <Doughnut data={data} options={options}/>
                            <span>80</span>
                        </div>
                        <div className={styles.chart}>
                            <div>Качество</div>
                            <Doughnut data={data2} options={options}/>
                            <span>20</span>
                        </div>
                    </div>
                </div>
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
