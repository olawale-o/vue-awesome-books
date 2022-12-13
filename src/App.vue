<template>
  <BooksView />
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import BooksView from './views/Books.vue';
export default {
  name: 'App',
  components: {
    BooksView,
  },
};
</script>

<style></style>
