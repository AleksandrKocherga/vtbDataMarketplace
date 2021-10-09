import React from 'react';
import { Tabs } from 'antd';
import {Attributes} from "../Attributes/Attributes";

function DataSetView() {
  const { TabPane } = Tabs;

  return (
    <div>
      <h1>Title</h1>
      <div> Descriptions </div>
      <div>
        <Tabs defaultActiveKey="1" onChange={null}>
          <TabPane tab="Схема" key="1">
            <div>Название полей и тип данных</div>
          </TabPane>
            <TabPane tab="Атрибуты" key="2">
                <Attributes/>
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
