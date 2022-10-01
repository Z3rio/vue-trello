<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";

import firebase from "firebase";

import TabsList from "./components/tabs/TabsList.vue";
import TabsList2 from "./components/tabs/TabsList2.vue";

import ProfileDropdown from "./components/ProfileDropdown.vue";

import PageFooter from "./components/footers/PageFooter.vue";
import PageFooter2 from "./components/footers/PageFooter2.vue";

const router = useRouter();

const displayName = ref("");
const email = ref("");

const profileDropdown = ref(false);

const tabs = ref([
  {
    label: "Features",
    isDropdown: true,
  },
  {
    label: "Solutions",
    isDropdown: true,
  },
  {
    label: "Plans",
    isDropdown: true,
  },
  {
    label: "Pricing",
    isDropdown: false,
  },
  {
    label: "Resources",
    isDropdown: true,
  },
]);

const tabs2 = ref([
  {
    label: "Workspaces",
    isDropdown: true,
  },
  {
    label: "Recent",
    isDropdown: true,
  },
  {
    label: "Starred",
    isDropdown: true,
  },
  {
    label: "Templates",
    isDropdown: true,
  },
  {
    label: "Create",
    isDropdown: false,
    background: "rgba(0, 0, 0, 0.3)",
  },
]);

onMounted(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      displayName.value = user.displayName;
      email.value = user.email;

      const path = router.currentRoute.value.name;
      if (path === "home" || path === "home2") {
        router.push({ name: "dashboard" });
      }
    }
  });
});
</script>

<template>
  <v-app
    :style="{
      background:
        $route.meta.background !== undefined ? $route.meta.background : '#fff',
    }"
  >
    <v-app-bar
      app
      color="#fff"
      dark
      v-if="$route.meta.topnav === 1"
      class="app-bar-1"
    >
      <a
        class="d-flex align-center text-decoration-none"
        href="http://localhost:5173"
        ref="Logo"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
          alt="Logo"
        />
      </a>
      <TabsList :tabs="tabs" />

      <div class="buttons">
        <a
          :href="
            displayName !== ''
              ? 'http://localhost:5173/dashboard'
              : 'http://localhost:5173/login'
          "
        >
          <v-btn class="login_button" elevation="0" color="#fff">Log In</v-btn>
        </a>
        <a
          :href="
            displayName !== ''
              ? 'http://localhost:5173/dashboard'
              : 'http://localhost:5173/signup'
          "
        >
          <v-btn color="#fff" elevation="0" class="signup_button"
            >Get Trello for free</v-btn
          >
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
      <v-icon :size="20">mdi-dots-grid</v-icon>
      <a
        class="d-flex align-center text-decoration-none top-logo"
        href="http://localhost:5173"
        ref="Logo"
      >
        <img
          src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit-loading.87e1af770a49ce8e84e3.gif"
          alt="Logo"
        />
      </a>
      <TabsList2 :tabs="tabs2" />

      <div class="user">
        <v-text-field
          placeholder="Search"
          solo
          hide-details
          flat
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>

        <v-icon>mdi-information-outline</v-icon>
        <v-icon>mdi-bell-outline</v-icon>

        <v-btn
          class="user-icon"
          v-if="displayName !== ''"
          @click="profileDropdown = !profileDropdown"
          plain
          v-ripple="false"
        >
          {{ displayName.substring(0, 1).toUpperCase() }}
        </v-btn>
      </div>
    </v-app-bar>

    <ProfileDropdown
      v-if="profileDropdown"
      @close="
        profileDropdown = false;
        email = '';
        displayName = '';
      "
      :username="displayName"
      :email="email"
    />
    <v-main>
      <RouterView />
    </v-main>

    <PageFooter v-if="$route.meta.footer === 1" />
    <PageFooter2 v-if="$route.meta.footer === 2" />
  </v-app>
</template>

<style>
@font-face {
  font-family: "Charlie Display";
  src: url("./fonts/CharlieDisplay-Regular.ttf");
}

@font-face {
  font-family: "Charlie Display Bold";
  src: url("./fonts/CharlieDisplay-Bold.ttf");
}

@font-face {
  font-family: "Charlie Display Semi Bold";
  src: url("./fonts/CharlieDisplay-Semibold.ttf");
}

@font-face {
  font-family: "Charlie Text";
  src: url("./fonts/CharlieText-Regular.ttf");
}

@font-face {
  font-family: "Charlie Text Semi Bold";
  src: url("./fonts/CharlieText-Semibold.ttf");
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

.user .v-field__overlay {
  border-radius: 4px !important;
  background: rgba(255, 255, 255, 0.2) !important;
}

.app-bar-1 .v-toolbar__content {
  padding: 0 0 0 1rem !important;
}

.app-bar-2 .v-toolbar__content {
  padding: 6px 0px 6px 8px !important;
}

.app-bar-2 > .v-toolbar__content > .v-icon {
  color: #fff;
  border-radius: 3px;

  height: 32px !important;
  width: 32px !important;
  min-width: 32px;
}

.app-bar-2 > .v-toolbar__content > .v-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.buttons {
  height: 100%;
  display: flex;
}

.user {
  margin-left: auto;
}

.user .v-icon,
.user input {
  color: #fff !important;
  opacity: 1 !important;
}

.user .v-input,
.user .mdi-bell-outline,
.user .mdi-information-outline {
  margin-right: 4px;
  margin-left: 4px;
}

.user .v-input,
.user .v-input__control,
.user .v-field,
.user .v-field__field,
.user input {
  height: 30px !important;
  min-height: 30px !important;
  width: 200px;
}

.user input,
.user .v-field__field {
  width: auto !important;
}

.user .v-field__outline {
  display: none;
}

.user .v-field__prepend-inner {
  padding: 0px;
  height: 100%;
  align-items: center;
}

.user .v-field__overlay {
  background: rgba(255, 255, 255, 0.2);
  opacity: 1 !important;
}

.user,
.user span,
.user-icon {
  display: flex;
  align-items: center;
}

.user span,
.user .user-icon {
  justify-content: center;

  width: 32px !important;
  min-width: 32px !important;
  height: 32px !important;
}

.user-icon {
  border-radius: 100%;
  background: #0052cc;

  font-size: 14px;
}

.user-icon .v-btn__content {
  opacity: 1 !important;
  color: #fff !important;
}

.user span {
  border-radius: 3px;
}

.user span svg {
  width: 20px;
  height: 20px;
}

.user span:hover {
  cursor: pointer;
}

.buttons button {
  height: 100% !important;
  border-radius: 0;

  font-family: "Charlie Text", sans-serif;
  font-size: 1.2rem !important;

  text-transform: none !important;
}

.buttons a {
  text-decoration: none !important;
}

.buttons .login_button .v-btn__content {
  color: #172b4d;
}

.buttons .signup_button {
  background: #0065ff;
}

.buttons .signup_button:hover {
  background: #0747a6;
}

.v-toolbar__content {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  padding-right: 0 !important;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.app-bar-2,
.app-bar-2 .v-toolbar__content {
  height: 44px !important;
}

.app-bar-2 .user .v-input__control,
.app-bar-2 .user .v-input__slot {
  min-height: 32px;
  max-width: 100%;
  width: 200px;
}

.app-bar-2 .top-logo {
  border-radius: 3px;
  height: 32px;
  padding: 0 6px;
}

.app-bar-2 .top-logo:hover {
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
</style>
