import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import ava from './avatar.jpeg';
import './style.scss';

const Cabinet = () => {
  const [datasetsList, setDatasetsList] = useState([]);
  console.log(
    '🚀 ~ file: Cabinet.jsx ~ line 9 ~ Cabinet ~ datasetsList',
    datasetsList
  );
  const user = useSelector((state) => state.user);
  console.log('🚀 ~ file: Cabinet.jsx ~ line 11 ~ Cabinet ~ user', user);
  const datasets = useSelector((state) => state.datasets);
  console.log('🚀 ~ file: Cabinet.jsx ~ line 9 ~ Cabinet ~ datasets', datasets);

  useEffect(() => {
    const goods = Object.values(datasets)
      .flat()
      .filter((dataset) => user?.userDatasets.includes(dataset.name));

    console.log('🚀 ~ file: Cabinet.jsx ~ line 11 ~ Cabinet ~ goods', goods);
    setDatasetsList(goods);
  }, [datasets, user?.userDatasets?.length]);

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

  const combine = () => {
    const selectedDatasets = datasetsList.filter((el) => el.active);
    console.log(
      '🚀 ~ file: Cabinet.jsx ~ line 37 ~ combine ~ selectedDatasets',
      selectedDatasets
    );
    const newDataset = {
      name: `new___${selectedDatasets.map((el) => el.name).join('___')}`,
      type: 'userCreated',
      fields: selectedDatasets
        .map((el) => el.fields)
        .flat()
        .reduce((acc, curr) => [...acc, curr], []),
    };
    console.log(
      '🚀 ~ file: Cabinet.jsx ~ line 41 ~ combine ~ newDataset',
      newDataset
    );

    setDatasetsList((state) =>
      [...state, newDataset].map((el) => {
        const elCopy = { ...el };
        elCopy.active = false;
        return elCopy;
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
            {datasetsList.map(({ name, fields, active }, i) => (
              <li
                key={name + '_' + i}
                onClick={() => activate(name)}
                className={cn({ 'active-li': active })}
              >
                Название датасета: <span className='good-title'>{name}</span>
                {!!fields?.length && (
                  <div className='fields'>
                    Поля:
                    {fields?.map((field, i) => (
                      <p key={field?.name + '_' + i}>{field?.name}</p>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {datasetsList?.filter((el) => el.active).length > 1 && (
          <button onClick={combine}>Объединить датасеты</button>
        )}
      </div>
    </div>
  );
};

export default Cabinet;
