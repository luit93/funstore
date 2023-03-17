import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// const stripe = require('stripe')('sk_test_51MmHHRICSxePYVSIPEK8CfaUGWFd613GJS2e3bIml8owsXCszFKE8xV6xaIbF54COUGEI7YmPyNYSC0YpRKpK7wx00o4FL8cf7');

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig,cartReducer)

export const store = configureStore({
  reducer: {
    cart:persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
