import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import logger from 'redux-logger';

export default configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
