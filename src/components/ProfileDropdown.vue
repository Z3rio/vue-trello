<script setup lang="ts">
import Vue from "vue";
import firebase from "firebase";

const props = defineProps<{
  username: String;
  email: String;
}>();

const vClickOutside = {
  bind(el, binding, vnode) {
    // eslint-disable-next-line no-param-reassign
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
};

function logOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      firebase.auth().onAuthStateChanged(() => {
        this.$router.push("/home");
        this.$emit("close");
      });
    });
}
</script>

<template>
  <!-- eslint-disable -->
  <div class="fullscreen">
    <!-- eslint-enable -->
    <div
      class="profile-dropdown"
      v-click-outside="
        () => {
          $emit('close');
        }
      "
    >
      <div class="top-information">
        <h1>Account</h1>
        <v-icon size="20">mdi-close</v-icon>
      </div>

      <hr />

      <div class="profile-information">
        <v-btn
          class="user-icon"
          v-if="username"
          @click="profileDropdown = !profileDropdown"
          plain
          v-ripple="false"
        >
          {{ username.substring(0, 1).toUpperCase() }}
        </v-btn>
        <div class="text" v-if="username && email">
          <h1>{{ username }}</h1>
          <p>{{ email }}</p>
        </div>
      </div>

      <v-btn plain tile block>Add another account</v-btn>

      <hr />

      <v-btn plain tile block>Profile and visibility</v-btn>
      <v-btn plain tile block>Activity</v-btn>
      <v-btn plain tile block>Cards</v-btn>
      <v-btn plain tile block>Settings</v-btn>

      <hr />

      <v-btn plain tile block>Help</v-btn>
      <v-btn plain tile block>Shortcuts</v-btn>

      <hr />

      <v-btn plain tile block @click="logOut">Log out</v-btn>
    </div>
  </div>
</template>

<!-- eslint-disable max-len -->
<style>
.fullscreen {
  position: absolute;

  width: 100%;
  height: calc(100% - 48px);

  margin-top: 48px;

  z-index: 1000;
}

.profile-dropdown {
  position: absolute;
  right: 4px;

  height: fit-content;
  width: 304px;

  padding: 0 0 12px 0;

  box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
  border-radius: 3px;
  background: #fff;
}

.profile-dropdown hr {
  width: calc(100% - 24px);
  margin: 8px 10px;
  border-color: #5e6c84;
  border-width: 1px;
}

.top-information {
  height: 32px;

  margin-top: 4px;
  padding: 0 12px;

  display: flex;
  align-items: center;
}

.top-information h1 {
  width: 100%;

  text-align: center;
  color: #5e6c84;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
}

.top-information .close-icon {
  color: #5e6c84;

  display: flex;
}

.user-icon {
  justify-content: center;

  width: 40px !important;
  min-width: 40px !important;
  height: 40px !important;
}

.profile-information {
  display: flex;

  padding: 8px;
}

.profile-information .text {
  margin-left: 8px;
}

.profile-information .text h1 {
  color: #172b4d;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.profile-information .text p {
  color: #b3bac5;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 9pt;
  margin-bottom: 0;
}

.profile-dropdown > button {
  justify-content: flex-start;
  padding: 6px 12px !important;
  height: 32px !important;
}

.profile-dropdown > button:hover {
  background: rgba(9, 30, 66, 0.04);
}

.profile-dropdown > button > .v-btn__content {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #172b4d !important;
  text-transform: none;

  opacity: 1 !important;
}
</style>
<!-- eslint-enable max-len -->
