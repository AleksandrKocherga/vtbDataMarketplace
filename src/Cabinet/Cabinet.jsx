import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ava from './avatar.jpeg';
import './style.scss';

const Cabinet = () => {
  const [datasetsList, setDatasetsList] = useState([]);
  const user = useSelector((state) => state.user);
  const datasets = useSelector((state) => state.datasets);
  console.log('๐ ~ file: Cabinet.jsx ~ line 9 ~ Cabinet ~ datasets', datasets);

  useEffect(() => {
    const goods = Object.values(datasets)
      .flat()
      .filter((dataset) => user?.userDatasets.includes(dataset.name));

    console.log('๐ ~ file: Cabinet.jsx ~ line 11 ~ Cabinet ~ goods', goods);
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

  const combine = () => {
    const selectedDatasets = datasetsList.filter((el) => el.active);
    console.log(
      '๐ ~ file: Cabinet.jsx ~ line 37 ~ combine ~ selectedDatasets',
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
      '๐ ~ file: Cabinet.jsx ~ line 41 ~ combine ~ newDataset',
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
      <Link to='/' style={{ background: '#000', padding: '2px 4px' }}>
        ะะฐะณะปะฐะฒะฝัั
      </Link>
      <div className='cabinet'>
        <div className='cabinet-header'>
          <div className='avatar'>
            <img src={ava} alt='ะะฒะฐัะฐั ะฟะพะปัะทะพะฒะฐัะตะปั' />
          </div>
          <div className='user-name'>
            <p>{user.fullName}</p>
            <p className='role'>
              ะ?ะพะปั: <b>{user.role}</b>
            </p>
          </div>
          <div className='balance'>
            ะะฐะปะฐะฝั: <span className='money'>{user.balance} ััะฑ</span>
          </div>
        </div>

        <div className='goods'>
          <h3>ะะฐัะฐัะตัั ะดะพัััะฟะฝัะต ะฒะฐะผ:</h3>
          <ul>
            {datasetsList.map(({ name, fields, active }, i) => (
              <li
                key={name + '_' + i}
                onClick={() => activate(name)}
                className={cn({ 'active-li': active })}
              >
                ะะฐะทะฒะฐะฝะธะต ะดะฐัะฐัะตัะฐ: <span className='good-title'>{name}</span>
                {!!fields?.length && (
                  <div className='fields'>
                    ะะพะปั:
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
          <button onClick={combine}>ะะฑัะตะดะธะฝะธัั ะดะฐัะฐัะตัั</button>
        )}
      </div>
    </div>
  );
};

export default Cabinet;
