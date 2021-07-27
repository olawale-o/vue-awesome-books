<template>
  <header class="header">
    <nav class="nav">
      <div class="logo">
        <a href="#">Awesome Books</a>
      </div>
      <ul class="nav-list" id="nav-list">
        <li class="nav-item" v-for="tabTitle in tabTitles" :key="tabTitle.link">
          <a class="nav-link" href="#" role="button" @click="onChangeLink(tabTitle)"
          :class="{'active': currentLink.link == tabTitle.link}">{{ tabTitle.link}}</a>
        </li>
      </ul>
    </nav>
    <p class="date" id="date">{{ date }}</p>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue';
import { DateTime } from 'luxon';
import numberSuffix from '../helpers/index.js';
export default {
  name: 'NavComponent',
  props: {
    tabTitles: {
        type: Array,
        required: true,
    },
    currentLink: {
      type: Object,
      required: true,
    }
  },
  setup(props, { emit }) {
    const date = ref(null);

    const onChangeLink = (link) => {
      emit('changeLink', link)
    }

    const updateDate = () => {
      setInterval(() => {
        const today = DateTime.local();
        const format = { ...DateTime.DATETIME_MED_WITH_SECONDS, month: 'long' };
        const modifiedDate = today.toLocaleString(format).split(' ');
        const dayNumber = parseInt(modifiedDate[1], 10);
        modifiedDate[1] = dayNumber + numberSuffix(dayNumber);
        modifiedDate[modifiedDate.length - 1] = (modifiedDate[modifiedDate.length - 1]).toLowerCase();
        date.value = modifiedDate.join(' ');
      }, 1000);
    };

    onMounted(() => updateDate());


    return {
      onChangeLink, date, updateDate
    }
  }
}
</script>

<style scoped>

</style>