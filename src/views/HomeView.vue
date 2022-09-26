<template>
  <HomePage />
</template>

<script lang="ts">
import Vue from 'vue';
import HomePage from '../components/pages/HomePage.vue';

export default Vue.extend({
  name: 'HomeView',

  components: {
    HomePage,
  },
});
</script>
