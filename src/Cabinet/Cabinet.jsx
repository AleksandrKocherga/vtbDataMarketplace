import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import ava from './avatar.jpeg';
import './style.scss';

const Cabinet = () => {
  const [datasetsList, setDatasetsList] = useState([]);
  const user = useSelector((state) => state.user);
  const datasets = useSelector((state) => state.datasets);
  console.log('🚀 ~ file: Cabinet.jsx ~ line 9 ~ Cabinet ~ datasets', datasets);

  useEffect(() => {
    const goods = Object.values(datasets)
      .flat()
      .filter((dataset) => user?.userDatasets.includes(dataset.name));

    console.log('🚀 ~ file: Cabinet.jsx ~ line 11 ~ Cabinet ~ goods', goods);
    setDatasetsList(goods);
  }, [datasets, user?.userDatasets]);

  const activate = (name) => {
    setDatasetsList((state) =>
      state.map((el) => {
        if (el.name === name) {
          const elCopy = { ...el };
          elCopy.active = !elCopy.active;
          return elCopy;
        }
        return el;
      })
    );
  };

  return (
    <div className='cabinet-wrapper'>
      <div className='cabinet'>
        <div className='cabinet-header'>
          <div className='avatar'>
            <img src={ava} alt='Аватар пользователя' />
          </div>
          <div className='user-name'>
            <p>{user.fullName}</p>
            <p className='role'>
              Роль: <b>{user.role}</b>
            </p>
          </div>
          <div className='balance'>
            Баланс: <span className='money'>{user.balance} руб</span>
          </div>
        </div>

        <div className='goods'>
          <h3>Датасеты доступные вам:</h3>
          <ul>
            {datasetsList.map(({ name, fields, active }) => (
              <li
                key={name}
                onClick={() => activate(name)}
                className={cn({ 'active-li': active })}
              >
                Название датасета: <span className='good-title'>{name}</span>
                {!!fields?.length && (
                  <div className='fields'>
                    Поля:
                    {fields?.map((field) => (
                      <p key={field?.name}>{field?.name}</p>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;
