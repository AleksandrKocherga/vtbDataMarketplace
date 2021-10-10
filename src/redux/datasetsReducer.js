import { createReducer } from '@reduxjs/toolkit';
import { addDataset } from './actions';
import { dataSets } from '../common/const';

const charactersReducer = createReducer(dataSets, {
  [addDataset]: (state, { payload }) => ({ ...state, datahub:[...state.datahub, payload.dataset] }),
});

export default charactersReducer;
