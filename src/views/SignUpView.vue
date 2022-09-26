<template>
  <SignUpPage />
</template>

<script lang="ts">
import Vue from 'vue';
import SignUpPage from '../components/pages/SignUpPage.vue';

export default Vue.extend({
  name: 'SignUpView',

  components: {
    SignUpPage,
  },
});
</script>
