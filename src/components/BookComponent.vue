<template>
  <ul class="list-of-books" id="book-list">
    <li id="book-id" class="book-item" v-for="book in books" :key="book.id">
      <div class="book">
        <div class="book__title-author">
          <h1 class="title">{{ book.title }}</h1>
          <span class="by">By</span>
          <p class="authour">{{ book.author }}</p>
        </div>
        <button class="btn" @click="onBookRemove(book.id)">Remove</button>
      </div>
    </li>
  </ul>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'BookComponent',
  emits: ['removeBook'],
  props: {
    book: Object,
  },
  setup(props, { emit }) {
    const { getters } = useStore();
    const books = computed(() => getters['books/books']);
    // enable th lines below if you switch to provide/inject API
    // const bookStore = inject('bookStore');
    // const books = computed(() => bookStore.value);
    const onBookRemove = (id) => {
      emit('removeBook', id);
    };
    return {
      onBookRemove,
      books,
    };
  },
};
</script>

<style></style>
