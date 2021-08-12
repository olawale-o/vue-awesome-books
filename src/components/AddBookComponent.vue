<template>
  <div class="form" id="form">
    <h2>Add a new book</h2>
    <form class="add-book-form" id="add-book-form" @submit.prevent="onFormSubmit">
      <div>
        <input type="text" name="title" v-model="book.title" placeholder="Title" required>
        <p id="title-error"></p>
      </div>
      <div>
        <input type="text" name="author" v-model="book.author" placeholder="Author" required>
        <p id="author-error"></p>
      </div>
        <input type="submit" value="Add" id="add-book-button">
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "AddBookComponent",
  emits: ["addBook"],
  setup(props, { emit }) {
    const book = reactive({
      id: '',
      author: '',
      title: ''
    });

    const onFormSubmit = () => {
      emit('addBook', { author: book.author, title: book.title });
      book.author = '';
      book.title = '';
    } 
    return {
      book, onFormSubmit,
    }
  }
}
</script>

<style>

</style>