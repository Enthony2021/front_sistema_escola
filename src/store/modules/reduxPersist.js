import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'NOME_DA_APLICACAO',
      storage,
      // nomes das chaves no root reducer
      whitelist: ['example'],
    },
    reducers
  );

  return persistedReducers;
};
