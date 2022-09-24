<template>
  <h1>dashboard</h1>
</template>

<style>

</style>

<script>
import Vue from 'vue';
import firebase from 'firebase';

export default Vue.extend({
  name: 'DashboardPage',

  data: () => ({
    user: {},
  }),

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.$router.push('/home');
      }
    });
  },
});
</script>
