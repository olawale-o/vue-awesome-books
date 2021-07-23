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
    <p class="date" id="date"></p>
  </header>
</template>

<script>

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
    const onChangeLink = (link) => {
      emit('changeLink', link)
    }
    return {
      onChangeLink
    }
  }
}
</script>

<style scoped>

</style>