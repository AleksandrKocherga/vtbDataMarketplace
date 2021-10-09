import { CarryOutOutlined, FormOutlined } from '@ant-design/icons';

export const treeData = [
  {
    title: 'Clients',
    key: '0-1',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'DataSet-Clients-1',
        key: '0-1-0',
        icon: <CarryOutOutlined />,
      },
    ],
  },
  {
    title: 'Items',
    key: '0-2',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'DataSetItems-1',
        key: '0-2-0',
        icon: <CarryOutOutlined />,
      },
      {
        title: 'DataSetItems-2',
        key: '0-3-0',
        icon: <CarryOutOutlined />,
      },
    ],
  },
];

export const dataSets = [
  {
    id: 1,
    type: 'popular', 
    title: 'DataSet-Clients-1'
  }, 
  {
    id: 2,
    type: 'new', 
    title: 'DataSetItems-1'
  },
  {
    id: 3,
    type: 'popular', 
    title: 'DataSetItems-2'
  }, 
]
