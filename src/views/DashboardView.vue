<template>
  <DashboardPage :user="user"/>
</template>

<script lang="ts">
import Vue from 'vue';
import DashboardPage from '../components/pages/DashboardPage.vue';

export default Vue.extend({
  name: 'DashboardView',

  props: {
    user: Object,
  },

  components: {
    DashboardPage,
  },
});
</script>
