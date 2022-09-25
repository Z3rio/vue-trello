<script src="../router/index.ts"></script>
<template>
  <div>
    <v-btn @click="logOut">logout</v-btn>
    <h1>dashboard</h1>
  </div>

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

  methods: {
    logOut() {
      firebase.auth().signOut().then(() => {
        firebase.auth().onAuthStateChanged(() => {
          this.$router.push('/home');
        })
      })
    },
  },
});
</script>
