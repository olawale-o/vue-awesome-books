import { ADD_BOOK, REMOVE_BOOK } from './action_types.js';

export const addBook = (credentials) => ({
  type: ADD_BOOK,
  credentials,
});

export const removeBook = (credentials) => ({
  type: REMOVE_BOOK,
  credentials,
});
