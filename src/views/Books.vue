<template>
  <Tabs>
    <Tab link="List">
      <div class="books" id="books">
        <div class="book-heading">
        <h2>All awesome books</h2>
       </div>
       <ul class="list-of-books" id="book-list">
            <BookComponent 
              v-for="book in bookStore" 
              :key="book.id" 
              :book="book"
              @removeBook="onRemoveBook" />
        </ul>
      </div>
    </Tab>
    <Tab link="Add new">
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
    </Tab>
    <Tab link="Contact">
      <div class="contacts" id="contacts">
        <h2>Contact information</h2>
        <p class="contact_p">Do you have any questions or you just want to say "Hello"?</p>
        <p class="contact_p">You can reach out to us!</p>
        <ul>
          <li>Our email: <a href="mailto:support@vueawesomebooks.com">support@vueawesomebooks.com</a></li>
          <li>Our phone number: <a href="tel:0013586534422">0013586534422</a></li>
          <li>Our address: Wall Street 77, 84503 New York, USA</li>
        </ul>
      </div>
    </Tab>
  </Tabs>
   
</template>

<script>
import Tabs from '@/components/shared/Tabs.vue';
import Tab from '@/components/shared/Tab.vue';
import BookComponent from '@/components/BookComponent.vue';
import { reactive, computed } from 'vue';
import { addBook, removeBook } from '@/store/books/actions/action_creators.js';
import { useStore } from 'vuex';
export default {
  name: 'Books',
  components: { BookComponent, Tabs, Tab },
  setup() {
    const book = reactive({
      id: '',
      author: '',
      title: ''
    });
    const { dispatch, getters }  = useStore();
    const bookStore = computed(() => getters['books/books']);
    const onFormSubmit = () => {
      book.id = bookStore.value.length + 1;
      console.log(book)
      dispatch(addBook(book))
      book.author = '';
      book.title = '';
    };
    
    const onRemoveBook = (bookId) => {
      dispatch(removeBook({id: bookId}));
    }
    
    return {
        onFormSubmit, book, bookStore, onRemoveBook,
    }
  }
}
</script>

<style>

</style>