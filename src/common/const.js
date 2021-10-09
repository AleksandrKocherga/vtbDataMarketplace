export const mockPartner = [{id: 1, name: 'Aple'}, {id: 2, name: 'Nike'}];
 
export const treeData = [
  {
    title: 'Clients',
    key: '0-1',
    children: [
      {
        title: 'DataSet-Clients-1',
        key: '0-1-0',
  
      },
    ],
  },
  {
    title: 'Items',
    key: '0-2',
    children: [
      {
        title: 'DataSetItems-1',
        key: '0-2-0',
  
      },
      {
        title: 'DataSetItems-2',
        key: '0-3-0',
  
      },
    ],
  },
];

export const dataSets = { 
  Aple: [
    {
      id: 1,
      type: 'popular', 
      title: 'DataSet-Clients-Aple-1'
    }, 
    {
      id: 2,
      type: 'new', 
      title: 'DataSet-Items-Aple-1'
    },
    {
      id: 3,
      type: 'popular', 
      title: 'DataSet-Items-Aple-2'
    }, 
  ], 
  Nike: [
    {
      id: 1,
      type: 'popular', 
      title: 'DataSet-Clients-Nike-1'
    }, 
    {
      id: 2,
      type: 'new', 
      title: 'DataSet-Items-Nike-1'
    },
    {
      id: 3,
      type: 'popular', 
      title: 'DataSet-Items-Nike-2'
    }, 
  ]
};
