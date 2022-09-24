<template>
  <DashboardPage />
</template>

<script lang="ts">
import Vue from 'vue';
import DashboardPage from '../components/DashboardPage.vue';

export default Vue.extend({
  name: 'DashboardView',

  components: {
    DashboardPage,
  },
});
</script>
