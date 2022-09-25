<template>
  <v-app :style="{background: $route.meta.background !== undefined ?
    $route.meta.background : '#fff'}">
    <v-app-bar
      app
      color="#fff"
      dark
      v-if="$route.meta.topnav === 1"
      class="app-bar-1"
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

    <v-app-bar
      app
      color="#026AA7"
      dark
      v-if="$route.meta.topnav === 2"
      class="app-bar-2"
    >
      <!-- eslint-disable max-len -->
      <DotsGridIcon />
      <a class="d-flex align-center text-decoration-none" href="http://localhost:8080" ref="Logo">
        <img src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit-loading.87e1af770a49ce8e84e3.gif" alt="Logo">
      </a>
      <!-- eslint-enable max-len -->
      <TabsList2 :tabs="tabs2" />

      <div class="user">
        <v-text-field
          placeholder="Search"
          solo hide-details flat
          prepend-inner-icon="mdi-magnify"
          background-color="rgba(255, 255, 255, 0.2)"
        ></v-text-field>

        <InformationOutlineIcon />
        <BellOutlineIcon />

        <div class="user-icon" v-if="user && user.displayName">
          {{ user.displayName.substring(0, 1).toUpperCase() }}
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <PageFooter v-if="$route.meta.footer === 1" />
    <PageFooter2 v-if="$route.meta.footer === 2" />
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

.app-bar-1 a img {
  height: 32px;
}

.app-bar-2 a img {
  width: 75px;
  height: 15px;
}

.buttons {
  height: 100%;
  display: flex;
}

.user {
  margin-left: auto;
}

.user .v-input,
.user .bell-outline-icon,
.user .user-icon {
  margin-right: 4px;
  margin-left: 4px;
}

.user,
.user span,
.user .user-icon {
  display: flex;
  align-items: center;
}

.user span,
.user .user-icon {
  justify-content: center;

  width: 32px;
  height: 32px;
}

.user .user-icon {
  border-radius: 100%;
  background: #0052cc;

  font-size: 14px;
}

.user span {
  border-radius: 3px;
}

.user span svg {
  width: 20px;
  height: 20px;
}

.user span:hover {
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.buttons button {
  height: 100%!important;
  border-radius: 0;

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
  padding-top: 0!important;
  padding-bottom: 0!important;
  padding-right: 0!important;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.app-bar-2 .dots-grid-icon {
  height: 24px;
  padding-right: 8px;
}

.app-bar-2,
.app-bar-2 .v-toolbar__content {
  height: 44px!important;
}

.app-bar-2 .user .v-input__control,
.app-bar-2 .user .v-input__slot {
  min-height: 32px;
  max-width: 100%;
  width: 200px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';

import DotsGridIcon from 'vue-material-design-icons/DotsGrid.vue';
import InformationOutlineIcon from 'vue-material-design-icons/InformationOutline.vue';
import BellOutlineIcon from 'vue-material-design-icons/BellOutline.vue';

import TabsList from './components/TabsList.vue';
import TabsList2 from './components/TabsList2.vue';

import PageFooter from './components/PageFooter.vue';
import PageFooter2 from './components/PageFooter2.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TabsList,
    TabsList2,
    PageFooter,
    PageFooter2,
    DotsGridIcon,
    InformationOutlineIcon,
    BellOutlineIcon,
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;

        const path = this.$route.name;
        if (path === 'home' || path === 'home2' || path === 'login' || path === 'signup') {
          this.$router.push('/dashboard');
        }
      }
    });
  },

  data: () => ({
    user: {},

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
    tabs2: [
      {
        label: 'Workspaces',
        isDropdown: true,
      },
      {
        label: 'Recent',
        isDropdown: true,
      },
      {
        label: 'Starred',
        isDropdown: true,
      },
      {
        label: 'Templates',
        isDropdown: true,
      },
      {
        label: 'Create',
        isDropdown: false,
        background: 'rgba(0, 0, 0, 0.3)',
      },
    ],
  }),
});
</script>
