import React from 'react';
import { Tabs, Card} from 'antd';

import { dataSets } from '../../common/const'

function CatigoryesView() {
  const { TabPane } = Tabs;

  return (
    <div>
      <h1>Title</h1>
      <div> Descriptions </div>
      <div>
        <Tabs defaultActiveKey="1" onChange={null}>
          <TabPane tab="Все датасеты" key="1">
            {dataSets.length && dataSets.map(el => (<Card key={el.id} title={el.title} hoverable/>))}
          </TabPane>
          <TabPane tab="Новые датасеты" key="2">
            {dataSets.length && dataSets.map(el => {
              if( el.type === 'new') {
                return (<Card key={el.id} title={el.title} hoverable/>)
              }
              })}
          </TabPane>
          <TabPane tab="Популярные" key="3">
          {dataSets.length && dataSets.map(el => {
              if( el.type === 'popular') {
                return (<Card key={el.id} title={el.title} hoverable/>)
              }
              })}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default CatigoryesView;
