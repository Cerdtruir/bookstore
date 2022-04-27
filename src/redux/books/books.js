import axios from 'axios';

const apiURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FL1reeq119MkSFuJUB6D/books';

const REMOVE_BOOK = 'bookstore/redux/books/REMOVE_BOOK';
const SAVE_BOOKS = 'bookstore/redux/books/SAVE_BOOKS';
const ADD_BOOK = 'bookstore/redux/books/ADD_BOOK';

const initialState = {};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export function saveBooks(payload) {
  return {
    type: SAVE_BOOKS,
    payload,
  };
}

export function pullBooks() {
  return async (dispatch) => {
    const response = await axios.get(apiURL);
    dispatch(saveBooks(response.data));
  };
}

export function addBookAPI(payload) {
  return async (dispatch) => {
    dispatch(addBook(payload));
    await axios.post(apiURL, {
      item_id: payload.id,
      title: payload.title,
      author: payload.author,
      category: 'Fiction',
    });
  };
}

export function removeBookAPI(payload) {
  return async (dispatch) => {
    dispatch(removeBook(payload));
    await axios.delete(`${apiURL}/${payload}`);
  };
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK: {
      const removeState = { ...state };
      delete removeState[action.payload];
      return removeState;
    }
    case ADD_BOOK: {
      const newState = { ...state };
      return Object.assign(newState, {
        [action.payload.id]: [{
          category: 'Fiction',
          title: action.payload.title,
          author: action.payload.author,
        }],
      });
    }
    case SAVE_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
