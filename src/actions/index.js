import { ADD_BOOK, REMOVE_BOOK } from './actions';

export const addBook = (title, category) => ({
  type: ADD_BOOK,
  payload: {
    title,
    category,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});
