import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const logger = (store: any) => (next: (arg0: any) => any) => (action: any) => {
  // console.group(action);
  // console.info('dispatching', action);
  let result = next(action);
  return result;
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(logger),
});

export default store;
