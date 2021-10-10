export const mockPartner = [
  {
    id: 1,
    path: 'Donstroy',
    name: 'ГК «Донстрой»',
    img: 'https://www.vtb.ru/-/media/Feature/Companies/donstroy.png',
  },
  {
    id: 2,
    path: 'GALS',
    name: 'Группа Компаний ГАЛС',
    img: 'https://www.vtb.ru/-/media/Feature/Companies/gals.png',
  },
  {
    id: 3,
    path: 'PIK',
    name: 'ПИК',
    img: 'https://www.vtb.ru/-/media/Feature/Companies/pik-new.png',
  },
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
        key: '0-2-1',
      },
    ],
  },
  {
    title: 'Vertica',
    key: '0-3',
    children: [
      {
        title: 'RESOURCE_POOL-1',
        key: '0-3-0',
      },
      {
        title: 'NI_FI_JOB-2',
        key: '0-3-1',
      },
      {
        title: 'SAP_ERP_-2',
        key: '0-3-2',
      },
    ],
  },
  {
    title: 'Test_EBAN_SAP',
    key: '0-4',
    children: [
      {
        title: 'Artify_NO_SIDI-1',
        key: '0-4-0',
      },
      {
        title: 'NI_FI_JOB_TEST_',
        key: '0-4-1',
      },
      {
        title: 'ERP_-2',
        key: '0-4-2',
      },
    ],
  },
];

export const dataSets = {
  Donstroy: [
    {
      id: 1,
      type: 'popular',
      name: 'DataSet-Clients-Donstroy-1',
      fields: [
        { name: 'ФИО', quality: '50%', type: 'string' },
        { name: 'Телефон', quality: '20%', type: 'string' },
        { name: 'Почта', quality: '10%', type: 'string' },
        { name: 'Город', quality: '60%', type: 'string' },
      ],
      links: [2, 4],
      price: '499',
    },
    {
      id: 2,
      type: 'new',
      name: 'DataSet-Items-Donstroy-1',
      price: '499',
    },
    {
      id: 3,
      type: 'popular',
      name: 'DataSet-Items-Donstroy-2',
      price: '499',
    },
    {
      id: 4,
      type: 'isPurchased',
      name: 'DataSet-Items-Donstroy-2',
      price: '499',
    },
  ],
  GALS: [
    {
      id: 1,
      type: 'popular',
      name: 'DataSet-Clients-GALS-1',
      fields: [
        { name: 'ФИО', quality: '20%', type: 'string' },
        { name: 'Телефон', quality: '70%', type: 'string' },
        { name: 'Город', quality: '60%', type: 'string' },
      ],
    },
    {
      id: 2,
      type: 'new',
      name: 'DataSet-Items-GALS-1',
      fields: [
        { name: 'Название', quality: '40%', type: 'string' },
        { name: 'Цена', quality: '70%', type: 'string' },
        { name: 'Габариты', quality: '60%', type: 'string' },
      ],
    },
    {
      id: 3,
      type: 'popular',
      name: 'DataSet-Items-GALS-2',
    },
  ],
  PIK: [
    {
      id: 1,
      type: 'popular',
      name: 'DataSet-Clients-PIK-1',
      fields: [
        { name: 'ФИО', quality: '50%', type: 'string' },
        { name: 'Телефон', quality: '20%', type: 'string' },
      ],
    },
    {
      id: 2,
      type: 'new',
      name: 'DataSet-Items-PIK-1',
    },
    {
      id: 3,
      type: 'popular',
      name: 'DataSet-Items-PIK-2',
    },
  ],
  datahub: [],
};

const emergencyMock = {
  datasets: {
    Donstroy: [
      {
        id: 1,
        type: 'popular',
        name: 'DataSet-Clients-Donstroy-1',
        fields: [
          {
            name: 'ФИО',
            quality: '50%',
            type: 'string',
          },
          {
            name: 'Телефон',
            quality: '20%',
            type: 'string',
          },
          {
            name: 'Почта',
            quality: '10%',
            type: 'string',
          },
          {
            name: 'Город',
            quality: '60%',
            type: 'string',
          },
        ],
        links: [2, 4],
        price: '499',
      },
      {
        id: 2,
        type: 'new',
        name: 'DataSet-Items-Donstroy-1',
        price: '499',
      },
      {
        id: 3,
        type: 'popular',
        name: 'DataSet-Items-Donstroy-2',
        price: '499',
      },
      {
        id: 4,
        type: 'isPurchased',
        name: 'DataSet-Items-Donstroy-2',
        price: '499',
      },
    ],
    GALS: [
      {
        id: 1,
        type: 'popular',
        name: 'DataSet-Clients-GALS-1',
        fields: [
          {
            name: 'ФИО',
            quality: '20%',
            type: 'string',
          },
          {
            name: 'Телефон',
            quality: '70%',
            type: 'string',
          },
          {
            name: 'Город',
            quality: '60%',
            type: 'string',
          },
        ],
      },
      {
        id: 2,
        type: 'new',
        name: 'DataSet-Items-GALS-1',
        fields: [
          {
            name: 'Название',
            quality: '40%',
            type: 'string',
          },
          {
            name: 'Цена',
            quality: '70%',
            type: 'string',
          },
          {
            name: 'Габариты',
            quality: '60%',
            type: 'string',
          },
        ],
      },
      {
        id: 3,
        type: 'popular',
        name: 'DataSet-Items-GALS-2',
      },
    ],
    PIK: [
      {
        id: 1,
        type: 'popular',
        name: 'DataSet-Clients-PIK-1',
        fields: [
          {
            name: 'ФИО',
            quality: '50%',
            type: 'string',
          },
          {
            name: 'Телефон',
            quality: '20%',
            type: 'string',
          },
        ],
      },
      {
        id: 2,
        type: 'new',
        name: 'DataSet-Items-PIK-1',
      },
      {
        id: 3,
        type: 'popular',
        name: 'DataSet-Items-PIK-2',
      },
    ],
    datahub: [
      {
        __typename: 'Dataset',
        name: 'SampleHdfsDataset',
        status: null,
        tags: {
          __typename: 'GlobalTags',
          tags: [],
        },
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleHdfsSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.date',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.target',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.destination',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.geo_info',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.geo_info.lat',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.geo_info.lng',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'SampleHdfsDataset',
        status: null,
        tags: {
          __typename: 'GlobalTags',
          tags: [],
        },
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleHdfsSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.date',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.target',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.destination',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.geo_info',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.geo_info.lat',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'shipment_info.geo_info.lng',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'SampleHiveDataset',
        status: null,
        tags: {
          __typename: 'GlobalTags',
          tags: [
            {
              __typename: 'TagAssociation',
              tag: {
                __typename: 'Tag',
                name: 'Legacy',
              },
            },
            {
              __typename: 'TagAssociation',
              tag: {
                __typename: 'Tag',
                name: 'lefa',
              },
            },
            {
              __typename: 'TagAssociation',
              tag: {
                __typename: 'Tag',
                name: 'blabla',
              },
            },
          ],
        },
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleHiveSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: 'field_foo',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'field_bar',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'SampleHiveDataset',
        status: null,
        tags: {
          __typename: 'GlobalTags',
          tags: [
            {
              __typename: 'TagAssociation',
              tag: {
                __typename: 'Tag',
                name: 'Legacy',
              },
            },
            {
              __typename: 'TagAssociation',
              tag: {
                __typename: 'Tag',
                name: 'lefa',
              },
            },
            {
              __typename: 'TagAssociation',
              tag: {
                __typename: 'Tag',
                name: 'blabla',
              },
            },
          ],
        },
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleHiveSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: 'field_foo',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'field_bar',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'fct_users_created',
        status: null,
        tags: {
          __typename: 'GlobalTags',
          tags: [],
        },
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleHiveSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: 'user_id',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'user_name',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'fct_users_created',
        status: null,
        tags: {
          __typename: 'GlobalTags',
          tags: [],
        },
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleHiveSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: 'user_id',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'user_name',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'fct_users_deleted',
        status: null,
        tags: {
          __typename: 'GlobalTags',
          tags: [
            {
              __typename: 'TagAssociation',
              tag: {
                __typename: 'Tag',
                name: 'test',
              },
            },
          ],
        },
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleHiveSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: 'user_name',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'timestamp',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'user_id',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'browser_id',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'session_id',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'deletion_reason',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'fct_users_deleted',
        status: null,
        tags: {
          __typename: 'GlobalTags',
          tags: [
            {
              __typename: 'TagAssociation',
              tag: {
                __typename: 'Tag',
                name: 'test',
              },
            },
          ],
        },
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleHiveSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: 'user_name',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'timestamp',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'user_id',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'browser_id',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'session_id',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'deletion_reason',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'logging_events',
        status: null,
        tags: null,
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleHiveSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: 'event_name',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'event_data',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'timestamp',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'browser',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'logging_events',
        status: null,
        tags: null,
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleHiveSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: 'event_name',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'event_data',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'timestamp',
            },
            {
              __typename: 'SchemaField',
              fieldPath: 'browser',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'SampleKafkaDataset',
        status: null,
        tags: {
          __typename: 'GlobalTags',
          tags: [],
        },
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleKafkaSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: '[version=2.0].[type=boolean].field_foo_2',
            },
            {
              __typename: 'SchemaField',
              fieldPath: '[version=2.0].[type=boolean].field_bar',
            },
            {
              __typename: 'SchemaField',
              fieldPath: '[version=2.0].[key=True].[type=int].id',
            },
          ],
        },
      },
      {
        __typename: 'Dataset',
        name: 'SampleKafkaDataset',
        status: null,
        tags: {
          __typename: 'GlobalTags',
          tags: [],
        },
        description: null,
        schema: {
          __typename: 'Schema',
          name: 'SampleKafkaSchema',
          fields: [
            {
              __typename: 'SchemaField',
              fieldPath: '[version=2.0].[type=boolean].field_foo_2',
            },
            {
              __typename: 'SchemaField',
              fieldPath: '[version=2.0].[type=boolean].field_bar',
            },
            {
              __typename: 'SchemaField',
              fieldPath: '[version=2.0].[key=True].[type=int].id',
            },
          ],
        },
      },
    ],
  },
};
