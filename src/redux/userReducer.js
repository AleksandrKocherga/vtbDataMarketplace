import { createReducer } from '@reduxjs/toolkit';
import { addUser, addDatasetToUser } from './actions';

const initUser = {
  name: 'Анна',
  secondName: 'Иванова',
  fullName: 'Анна Иванова',
  role: 'Контрагент',
  balance: 8920,
  userDatasets: ['DataSet-Clients-GALS-1', 'DataSet-Items-PIK-2'],
};

const userReducer = createReducer(initUser, {
  [addUser]: (state, { payload }) => payload,
  [addDatasetToUser]: (state, { payload }) => ({
    ...state,
    userDatasets: [...state.userDatasets, payload],
  }),
});

export default userReducer;
