import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import booksReducer from './books/books';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
