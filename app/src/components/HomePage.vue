<template>
  <v-container fluid class="home-container">
    <v-row class="inner">
      <v-col cols="10" sm="6" md="7">
        <h1 class="home-header">Trello helps teams move work forward.</h1>
        <!-- eslint-disable max-len -->
        <p class="home-description mt-2">Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
        <!-- eslint-enable max-len -->

        <v-row class="mt-7">
          <v-col cols="10" sm="6" md="8" >
            <v-text-field
              class="home_email-text-field"
              placeholder="Email"
              solo hide-details flat
              background-color="#fff"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="4">
            <v-btn
              elevation="2"
              color="#0065ff"
              class="home_signup-button"
              href="http://localhost:8080/signup"
            >Sign up - it’s free </v-btn>
          </v-col>
        </v-row>
        <div class="home_watch-video mt-7 ml-4">
          <h1>Watch Video</h1>
          <PlayCircleOutlineIcon :size="28"/>
        </div>
      </v-col>

      <v-col cols="6" md="5">
        <img class="home-main-image" src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp" alt="Image">
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.home-container {
  background: linear-gradient(rgb(234, 230, 255), rgb(255, 255, 255)) no-repeat;
}

.inner {
  margin: 7.5vh auto;
}

.home-header {
  font-size: 3rem;
  font-family: "Charlie Display Semi Bold", sans-serif;
  line-height: 1.2;
}

.home-description {
  font-size: 20px;
  font-family: "Charlie Display", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
}

.home-main-image {
  width: 80%;
  margin-left: 20%;
}

.home_email-text-field {
  border: 1px solid rgb(223, 225, 230);
}

.inner .col-sm-6 .row {
  width: 87.5%;
}

.home_signup-button {
  color: white!important;

  font-size: 1rem;
  font-family: "Charlie Text", sans-serif;
  font-weight: 500;
  text-transform: none!important;

  height: 100%!important;

  transition: 250ms;
}

.home_signup-button:hover {
  background: rgb(7, 71, 166)!important;
  transition: 400ms;
}

.home_watch-video {
  display: flex;
  align-items: center;
  gap: 10px;
}

.home_watch-video span {
  margin-top: 8px;
}

.home_watch-video h1 {
  font-size: 1rem;
  font-family: 'Charlie Text', sans-serif;
  text-decoration: underline;
}

.home_watch-video span,
.home_watch-video h1 {
  color: rgb(0, 82, 204);
}

@media (min-width: 576px) {
  .inner {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .inner {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .inner {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .inner {
    max-width: 1140px;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import PlayCircleOutlineIcon from 'vue-material-design-icons/PlayCircleOutline.vue';

export default Vue.extend({
  name: 'HomePage',

  components: {
    PlayCircleOutlineIcon,
  },

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer',
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
});
</script>
