<template>
  <Tabs>
    <Tab link="List">
      <div class="books" id="books">
        <div class="book-heading">
        <h2>All awesome books</h2>
       </div>
        <BookComponent @removeBook="onRemoveBook" />
      </div>
    </Tab>
    <Tab link="Add new">
      <AddBookComponent @addBook="onFormSubmit" />
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
import AddBookComponent from '@/components/AddBookComponent.vue';
import { computed } from 'vue';
import { removeBook, addBook } from '@/store/books/actions/action_creators.js';
import { useStore } from 'vuex';
export default {
  name: 'Books',
  components: { BookComponent, Tabs, Tab, AddBookComponent, },
  setup() {
    const {dispatch, getters }  = useStore();
    const books = computed(() => getters['books/books']);
    // enable the line below if you want to switch to provide/inject API
    // make sure you change the books array value to an array e.g ref([])
    // provide('bookStore' , books);
    const onFormSubmit = (book) => {
      book.id = books.value.length + 1;
      dispatch(addBook(book))
    };
    
    const onRemoveBook = (bookId) => {
      dispatch(removeBook({id: bookId}));
    }
    
    return {
        onFormSubmit, onRemoveBook,
    }
  }
}
</script>

<style>

</style>