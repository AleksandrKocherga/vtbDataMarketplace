export const mockPartner = [
  {
    id: 1,
    path: 'Donstroy',
    name: 'ГК «Донстрой»',
    img: 'https://www.vtb.ru/-/media/Feature/Companies/donstroy.png'
  }, {
    id: 2,
    path: 'GALS',
    name: 'Группа Компаний ГАЛС',
    img: 'https://www.vtb.ru/-/media/Feature/Companies/gals.png'
  },
  {
      id: 3,
      path: 'PIK',
      name: 'ПИК',
      img: 'https://www.vtb.ru/-/media/Feature/Companies/pik-new.png'
}
];
 
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
  Donstroy: [
    {
      id: 1,
      type: 'popular', 
      title: 'DataSet-Clients-Donstroy-1'
    }, 
    {
      id: 2,
      type: 'new', 
      title: 'DataSet-Items-Donstroy-1'
    },
    {
      id: 3,
      type: 'popular', 
      title: 'DataSet-Items-Donstroy-2'
    }, 
  ], 
  GALS: [
    {
      id: 1,
      type: 'popular', 
      title: 'DataSet-Clients-GALS-1'
    }, 
    {
      id: 2,
      type: 'new', 
      title: 'DataSet-Items-GALS-1'
    },
    {
      id: 3,
      type: 'popular', 
      title: 'DataSet-Items-GALS-2'
    }, 
  ], 
  PIK: [
    {
      id: 1,
      type: 'popular', 
      title: 'DataSet-Clients-PIK-1'
    }, 
    {
      id: 2,
      type: 'new', 
      title: 'DataSet-Items-PIK-1'
    },
    {
      id: 3,
      type: 'popular', 
      title: 'DataSet-Items-PIK-2'
    }, 
  ]
};
