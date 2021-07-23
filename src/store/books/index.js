import { booksState } from './books_state';
import { booksGetter } from './books_getter';
import { booksAction } from './books_action';
import { booksMutation }  from './books_mutation';

const booksModule =  {
  namespaced: true,
  state: booksState,
  getters: booksGetter,
  actions: booksAction,
  mutations: booksMutation
};

export default booksModule;
