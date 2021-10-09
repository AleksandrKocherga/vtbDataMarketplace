import { createReducer } from '@reduxjs/toolkit';
import { addDataset } from './actions';

const charactersReducer = createReducer([], {
  [addDataset]: (state, { payload }) => [...state, payload.dataset],
});

export default charactersReducer;
