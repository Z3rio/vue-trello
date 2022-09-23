<template>
  <v-app :style="{background: $route.fullPath == '/login' || $route.fullPath == '/signup' ?
  '#f9fafc' : '#fff'}">
    <v-app-bar
      app
      color="#fff"
      dark
      v-if="$route.fullPath !== '/login' && $route.fullPath !== '/signup'"
    >
      <!-- eslint-disable max-len -->
      <a class="d-flex align-center text-decoration-none" href="http://localhost:8080" ref="Logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png" alt="Logo">
      </a>
      <!-- eslint-enable max-len -->
      <TabsList :tabs="tabs" />

      <div class="buttons">
        <a href="http://localhost:8080/login">
          <v-btn
            class="login_button"
            elevation="0"
            color="#fff"
          >Log In</v-btn>
        </a>
        <a href="http://localhost:8080/signup">
          <v-btn
            color="#0065ff"
            elevation="0"
          >Get Trello for free</v-btn>
        </a>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <PageFooter v-if="$route.fullPath !== '/login' && $route.fullPath !== '/signup'" />
    <PageFooter2 v-if="$route.fullPath == '/login' || $route.fullPath == '/signup'" />
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

@font-face {
  font-family: 'Charlie Text';
  src: url('./fonts/CharlieText-Regular.ttf');
}

@font-face {
  font-family: 'Charlie Text Semi Bold';
  src: url('./fonts/CharlieText-Semibold.ttf');
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  scrollbar-width: none;
  color: rgb(9, 30, 66);
}

.v-app-bar div h1 {
  color: #293856;
}

.v-app-bar a img {
  height: 32px;
}

.buttons {
  height: 100%;
  display: flex;
}

.buttons button {
  height: 100%!important;
  border-radius: 0px;

  font-family: 'Charlie Text', sans-serif;
  font-size: 1.2rem!important;

  text-transform: none!important;
}

.buttons a {
  text-decoration: none!important;
}

.buttons .login_button {
  color: #172b4d;
}

.v-toolbar__content {
  padding-top: 0px!important;
  padding-bottom: 0px!important;
  padding-right: 0px!important;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>

<script lang="ts">
import Vue from 'vue';
import TabsList from './components/TabsList.vue';
import PageFooter from './components/PageFooter.vue';
import PageFooter2 from './components/PageFooter2.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TabsList,
    PageFooter,
    PageFooter2,
  },

  data: () => ({
    tabs: [
      {
        label: 'Features',
        isDropdown: true,
      },
      {
        label: 'Solutions',
        isDropdown: true,
      },
      {
        label: 'Plans',
        isDropdown: true,
      },
      {
        label: 'Pricing',
        isDropdown: false,
      },
      {
        label: 'Resources',
        isDropdown: true,
      },
    ],
  }),
});
</script>
