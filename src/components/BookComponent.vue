<template>
  <li id="book-id" class="book-item">
    <div class="book">
      <div class="book__title-author">
        <h1 class="title">{{ book.title }}</h1>
        <span class="by">By</span>
        <p class="authour">{{ book.author }}</p>
      </div>
      <button class="btn" @click="onBookRemove(book.id)">Remove</button>
    </div>
  </li>
</template>
<script>
export default {
  name: 'BookComponent',
  emits: ['removeBook'],
  props: {
    book: Object,
  },
  setup(props, { emit }) {
    const onBookRemove = (id) => {
        emit('removeBook', id);
    }
    return  {
      onBookRemove
    }
  }
}
</script>

<style>

</style>