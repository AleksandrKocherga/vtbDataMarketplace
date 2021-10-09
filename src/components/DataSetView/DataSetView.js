import React from 'react';
import { Tabs } from 'antd';

function DataSetView({dataSet}) {
  const { TabPane } = Tabs;

  return (
    <div>
      <h1>{ dataSet.title }</h1>
      <div> Descriptions </div>
      <div>
        <Tabs defaultActiveKey="1" onChange={null}>
          <TabPane tab="Схема" key="1">
            <div>Название полей и тип данных</div>
          </TabPane>
          <TabPane tab="Связи" key="2">
            <div>Список с какими датасетами этот датасет связан</div>
          </TabPane>
          <TabPane tab="Статистика" key="3">
            <div>2 графика</div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default DataSetView;
