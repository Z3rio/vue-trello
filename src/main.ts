import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import vuetify from "./plugins/vuetify";

const config = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APP_APPID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENTID,
};

firebase.initializeApp(config);

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.use(vuetify);

app.mount("#app");
