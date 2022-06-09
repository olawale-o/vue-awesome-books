<template>
  <footer class="footer">
    <div class="copyright">
      <p>Copyright</p>
      <p>
        All rights reserved <span class="year" id="year">{{ year }}</span>
      </p>
    </div>
  </footer>
</template>
<script>
import { ref } from 'vue';
import { DateTime } from 'luxon';
export default {
  setup() {
    const year = ref(null);
    year.value = DateTime.now().year;
    return {
      year,
    };
  },
};
</script>

<style scoped></style>
