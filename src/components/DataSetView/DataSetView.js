import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Divider, Space, Tabs, Tag } from 'antd';
import Avatar from 'antd/es/avatar/avatar';
import { DollarCircleOutlined } from '@ant-design/icons';
import { Line } from 'react-chartjs-2';
import { addDatasetToUser } from '../../redux/actions';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Количество скачиваний',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);
function DataSetView({ dataSet }) {
  const dispatch = useDispatch();
  const { TabPane } = Tabs;
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [btnBuy, setBtnBuy] = useState(false);
  const [tags, setTags] = useState(['продажи', 'sales', 'SAP', 'отдел продаж']);
  const [colors, setColors] = useState(['magenta', 'volcano', 'cyan', 'blue']);
  const handlerBtnBuy = () => {
    setLoadingBtn(true);
    setTimeout(() => {
      setBtnBuy(true);
      setTags((prev) => [...prev, 'куплено']);
      setColors((prev) => [...prev, 'green']);
      dispatch(addDatasetToUser(dataSet.name));
    }, 4000);
  };

  return (
    <div>
      <Link to='/cabinet'>Кабинет</Link>
      <h1>{dataSet.title}</h1>
      <div> Descriptions</div>
      499 RUB
      <Space style={{ width: '100%' }}>
        {btnBuy ? null : (
          <Button
            type='green'
            loading={loadingBtn}
            icon={<DollarCircleOutlined />}
            onClick={handlerBtnBuy}
          >
            Купить
          </Button>
        )}
      </Space>
      <div>
        Владелец
        <Avatar
          size={64}
          src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
        />
        Семен Игоревич
      </div>
      <Divider orientation='left'>Теги</Divider>
      <div>
        {tags.map((tag, i) => (
          <Tag key={tag} color={[colors[i]]}>
            {tag}
          </Tag>
        ))}
      </div>
      <div>
        <LineChart />
      </div>
      <div>
        <Tabs defaultActiveKey='1' onChange={null}>
          <TabPane tab='Схема' key='1'>
            <div>Название полей и тип данных</div>
          </TabPane>
          <TabPane tab='Связи' key='3'>
            <div>Список с какими датасетами этот датасет связан</div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default DataSetView;
