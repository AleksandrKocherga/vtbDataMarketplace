import { createReducer } from '@reduxjs/toolkit';
import { addUser } from './actions';

const initUser = {
  name: 'Анна',
  secondName: 'Иванова',
  fullName: 'Анна Иванова',
  role: 'Контрагент',
  balance: 8920,
  userDatasets: ['DataSet-Clients-GALS-1', 'DataSet-Items-PIK-2'],
};

const charactersReducer = createReducer(initUser, {
  [addUser]: (state, { payload }) => payload,
});

export default charactersReducer;
