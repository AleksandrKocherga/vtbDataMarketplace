import React from 'react';
import { Tabs, Card} from 'antd';
import { useParams } from 'react-router-dom';

import { dataSets } from '../../common/const'

function CatigoryesView() {
  const { TabPane } = Tabs;

  const { name } = useParams();

  return (
    <div>
      <h1>Title</h1>
      <div> Descriptions </div>
      <div>
        <Tabs defaultActiveKey="1" onChange={null}>
          <TabPane tab="Все датасеты" key="1">
            {dataSets[name].length && dataSets[name].map(el => (<Card key={el.id} title={el.title} hoverable/>))}
          </TabPane>
          <TabPane tab="Новые датасеты" key="2">
            {dataSets[name].length && dataSets[name].map(el =>  el.type === 'new' ? (<Card key={el.id} title={el.title} hoverable/>) : null)}
          </TabPane>
          <TabPane tab="Популярные" key="3">
          {dataSets[name].length && dataSets[name].map(el => el.type === 'popular' ? (<Card key={el.id} title={el.title} hoverable/>) : null)}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default CatigoryesView;
