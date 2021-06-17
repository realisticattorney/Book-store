import { ADD_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './actions';

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

export const changeFilter = (category) => ({
  type: CHANGE_FILTER,
  payload: {
    category,
  },
});
