import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { counterReducer } from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';
// import logger from "./middleware/logger";
import { pokemonApi } from './pokemon';
import { todosApi } from './todoSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';

// const persistConfig = {
//   key: "todos",
//   storage,
//   blacklist: ["filter"],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  pokemonApi.middleware,
  todosApi.middleware,

  // logger,
];

const store = configureStore({
  reducer: {
    todos: todosReducer,
    // todos: persistReducer(persistConfig, todosReducer),
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// const persistedStore = { store, persistor };

export default store;

setupListeners(store.dispatch);
