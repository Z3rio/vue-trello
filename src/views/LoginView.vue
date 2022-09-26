<template>
  <LoginPage />
</template>

<script lang="ts">
import Vue from 'vue';
import LoginPage from '../components/pages/LoginPage.vue';

export default Vue.extend({
  name: 'LoginView',

  components: {
    LoginPage,
  },
});
</script>
