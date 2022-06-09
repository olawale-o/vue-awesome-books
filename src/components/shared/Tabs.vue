<template>
  <NavComponent
    :tabTitles="tabTitles"
    :currentLink="currentLink"
    @changeLink="onChangeLink"
  />
  <slot />
  <FooterComponent />
</template>

<script>
import { ref, provide } from 'vue';
import NavComponent from '@/components/NavComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  name: 'Tabs',
  components: { NavComponent, FooterComponent },
  setup(props, { slots }) {
    const tabTitles = ref(
      slots.default().map((tab) => ({ link: tab.props.link }))
    );
    const currentLink = ref(tabTitles.value[0]);
    provide('currentLink', currentLink);
    const onChangeLink = (link) => {
      currentLink.value = link;
    };
    return {
      tabTitles,
      currentLink,
      onChangeLink,
    };
  },
};
</script>
<style></style>
