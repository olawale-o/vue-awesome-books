import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import booksModule from './books/index.js';

const store = createStore({
  modules: {
    books: booksModule,
  },
  plugins: [createPersistedState()],
});

export default store;
