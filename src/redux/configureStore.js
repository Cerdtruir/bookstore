import { configureStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),

});

export default store;
