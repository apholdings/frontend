import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== 'production',
  });

  const persistor = persistStore(store);
  store.__persistor = persistor;

  // Return both the store and persistor
  return { store };
};

const wrapper = createWrapper(
  () => makeStore().store, // Update this line to use the store from the returned object
  { debug: false },
);

// Export store and persistor individually
export const { store } = makeStore();

export { wrapper };
