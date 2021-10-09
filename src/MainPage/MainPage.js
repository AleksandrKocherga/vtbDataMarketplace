import React from 'react';
import { Input, Card, Layout } from 'antd';
import { Link } from 'react-router-dom';

import { mockPartner } from '../common/const';

import styles from './MainPage.module.css';


function MainPage() {

  return (
    <>
    <div className={styles.mainPage}>
        <div>Main page</div>
        <Input/>
        <div className={styles.cardContainer}>
          {mockPartner.length && mockPartner.map(contr => (
            <Link key={contr.name} to={`/catalog/${contr.name}`}>
              <Card key={contr.id} title={contr.name} style={{ width: 300 }}
                cover={
                  <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
                }
                hoverable
                />
              </Link>
            ))
          }
        </div>
    </div>
    </>
  );
}

export default MainPage;
