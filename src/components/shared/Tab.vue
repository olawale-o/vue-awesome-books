<template>
  <main class="main" id="main">
    <section class="book-section">
      <div class="book-container">
        <div class="book-container" v-show="link === currentLink.link">
          <slot />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { inject } from 'vue';
export default {
  name: 'TabComponent',
  inject: ['currentLink'],
  props: ['link'],
  setup() {
    const currentLink = inject('currentLink');
    return {
      currentLink,
    };
  },
};
</script>

<style></style>
