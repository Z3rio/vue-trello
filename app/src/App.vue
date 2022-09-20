<template>
  <v-app>
    <v-app-bar
      app
      color="#fff"
      dark
    >
      <!-- eslint-disable max-len -->
      <a class="d-flex align-center text-decoration-none" href="http://localhost:8080" ref="Logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png" alt="Logo">
      </a>
      <!-- eslint-enable max-len -->
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style>
@font-face {
  font-family: 'Charlie Display';
  src: url('./fonts/CharlieDisplay-Regular.ttf');
}

@font-face {
  font-family: 'Charlie Display Bold';
  src: url('./fonts/CharlieDisplay-Bold.ttf');
}

@font-face {
  font-family: 'Charlie Display Semi Bold';
  src: url('./fonts/CharlieDisplay-Semibold.ttf');
}

.v-app-bar div h1 {
  color: #293856;
}

.v-app-bar a img {
  height: 32px;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
