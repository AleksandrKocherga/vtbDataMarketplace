import React from 'react';
import { Input, Card, Layout } from 'antd';
import styles from './MainPage.module.css';

const mockContr = [{id: 1, name: 'Adid'}, {id: 2, name: 'Nike'}]
function MainPage() {

  return (
    <>
    <div className={styles.mainPage}>
        <div>Main page</div>
        <Input/>
        <div className={styles.cardContainer}>
          {mockContr.length && mockContr.map(contr=> (<Card key={contr.id} title={contr.name} style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
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
