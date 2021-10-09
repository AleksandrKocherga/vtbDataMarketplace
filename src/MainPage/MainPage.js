import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, Card }  from 'antd';
import { mockPartner } from '../common/const'
import styles from './MainPage.module.css';

function MainPage() {
  const [partners, setPartners] = useState(mockPartner);

  useEffect(() => {
    setPartners(mockPartner);
  }, [])

  const searchPartners  = (event) => {
    let searchPartner = event.target.value;
    if(searchPartner.length) {
      setPartners(mockPartner.filter(el => el.name.toLowerCase().indexOf(searchPartner.toLowerCase()) > - 1));
    } else {
      setPartners(mockPartner);

    }

  };

  return (
      <>
          <div className={styles.container}>
              <div className={styles.logo}>
                  <img className={styles.logoImg} src='https://miro.medium.com/max/1024/0*ENJEJZztXj1sUTRi.png'
                        alt='logo'/>
                  <div className={styles.logoTitle}>DataMarket</div>
              </div>
              <Input.Search className={styles.input} onChange={searchPartners}/>
              <div className={styles.cardList}>
                  {partners.length ? partners.map(contr => (
                    <Link key={contr.path} to={`/partner/${contr.path}`}>
                      <Card key={contr.id} className={styles.cardListItem}
                            cover={
                              <img
                              alt="example"
                              src={contr.img}/>
                            }
                            hoverable
                            />
                      </Link>))
                   : null}
              </div>
          </div>
      </>
  );
}

export default MainPage;
