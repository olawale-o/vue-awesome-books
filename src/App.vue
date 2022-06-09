<template>
  <v-app>
    <v-main>
      <Books />
    </v-main>
  </v-app>
</template>

<script>
import Books from './views/Books.vue';

export default {
  name: 'App',
  components: {
    Books,
  },
};
</script>

<style></style>
