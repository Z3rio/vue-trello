<script setup lang="ts">
import { ref, onMounted } from "vue";
import firebase from "firebase";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const continued = ref(false);

const loginError = ref("");

function validate(email: any) {
  return /^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()\\.,;\s@\\"]+\.{0,1})+([^<>()\\.,;:\s@\\"]{2,}|[\d\\.]+))$/.test(
    email
  );
}

var isLoggedIn = false;

onMounted(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }
  });
});

function login() {
  if (isLoggedIn == false) {
    if (validate(email.value) && password.value !== "") {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          router.push({ name: "dashboard" });
        })
        .catch((err) => {
          loginError.value = err.message;
        });
    }
  } else {
    loginError.value = "You are already loggged in.";
  }
}
</script>

<template>
  <div class="login-container">
    <img
      src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg"
      alt="Trello Logo"
    />

    <div class="login-form">
      <div class="error-message" v-if="loginError !== ''">
        {{ loginError }}
      </div>

      <h1>Log in to Trello</h1>

      <v-text-field
        placeholder="Enter email"
        type="email"
        outlined
        hide-details
        v-model="email"
      ></v-text-field>
      <v-text-field
        placeholder="Enter password"
        type="password"
        outlined
        hide-details
        v-model="password"
        v-if="continued"
      ></v-text-field>
      <v-btn
        elevation="0"
        v-ripple="false"
        plain
        :disabled="email == '' || validate(email) == false"
        @click="
          () => {
            if (continued) {
              login();
            } else if (validate(email)) {
              continued = true;
            }
          }
        "
      >
        Continue
      </v-btn>

      <div v-if="email == ''">
        <p class="or">OR</p>

        <div class="social-logins">
          <v-btn elevation="2" v-ripple="false" plain>
            <div class="btn-icon google-icon"></div>
            Continue with Google
          </v-btn>
          <v-btn elevation="2" v-ripple="false" plain>
            <div class="btn-icon microsoft-icon"></div>
            Continue with Microsoft
          </v-btn>
          <v-btn elevation="2" v-ripple="false" plain>
            <div class="btn-icon apple-icon"></div>
            Continue with Apple
          </v-btn>
          <v-btn elevation="2" v-ripple="false" plain>
            <div class="btn-icon slack-icon"></div>
            Continue with Slack
          </v-btn>
        </div>
      </div>

      <div class="bottom-help">
        <a>Can't log in?</a>
        <a href="http://localhost:5173/signup">Sign up for an account</a>
      </div>
    </div>
    <div class="bottom-help">
      <a>Privacy Policy</a>
      <a>Terms of Service</a>
    </div>
  </div>
</template>

<!-- eslint-disable max-len -->
<style>
.login-container {
  height: 100%;
  width: 100%;
}

.login-container img {
  display: block;

  height: 43px;
  margin: 40px auto;
}

.login-form {
  max-width: 400px;

  margin: 0 auto;
  padding: 25px 40px;

  background: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
}

.login-form h1 {
  color: #5e6c84;
  font-family: "-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  margin-top: 10px;
  margin-bottom: 25px;
}

.login-form > button:not(.v-btn--disabled) {
  background: #5aac44;
}

.login-form > button.v-btn--disabled {
  background: #e2e4e6;
}

.login-form > button:not(.v-btn--disabled) .v-btn__content {
  color: white;
}

.login-form > button.v-btn--disabled .v-btn__content {
  color: #8c8c8c;
  font-weight: bold !important;
}

.login-form button {
  width: 100%;
}

.login-form > button {
  background: #5aac44;
}

.login-form > button .v-btn__content {
  color: white;
  opacity: 1 !important;
  text-transform: none;
}

.login-form > button:hover {
  background: #61bd4f;
}

.login-form p.or {
  text-align: center;
  font-size: 12px;
  font-family: "-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #4d4d4d;

  margin-top: 16px;
  margin-bottom: 16px;
}

.login-form .social-logins .v-btn__content {
  font-size: 14px;
  color: #505f79;
  font-family: "-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-transform: none;
  font-weight: bold;

  opacity: 1 !important;

  gap: 7px;
}

.login-form .social-logins {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.signup-form .social-logins button:hover {
  background-color: #f9fafc;
  transition: 200ms;
}

.btn-icon.google-icon {
  background: url("https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/8215f6659adc202403198fef903a447e/sign-in-with-google.svg")
    0 50% no-repeat;
}
.btn-icon.microsoft-icon {
  background: url("https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/72ece804e5285ab6507e2406157cda3c/microsoft-logo.svg")
    no-repeat;
  background-size: 100% 100%;
}

.btn-icon.apple-icon {
  background: url("https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/6fc4ecf05a97cfb43cfcbb14738a5aa0/apple-logo-black.svg")
    no-repeat;
  background-size: 100% 100%;
}

.btn-icon.slack-icon {
  background: url("https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/267584bf90783090ede8f337d9baf909/slack-logo.svg")
    no-repeat;
  background-size: 100% 100%;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.login-form .bottom-help,
.login-container .bottom-help {
  width: fit-content;

  margin: 1em auto;
}

.login-form .bottom-help a,
.login-container .bottom-help a {
  color: #0052cc;

  font-family: "-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-decoration: none;
}

.login-form .bottom-help a:last-child::before,
.login-container .bottom-help a:last-child::before {
  content: "\2022";
  margin: 0 8px 0px 4px;
  color: black;
}

.error-message {
  background: #eb5a46;
  border-radius: 4px;

  padding: 0.5em 1em;

  color: #fbedeb;
  font-size: 14px;
  font-family: "-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.login-form .v-input {
  margin: 0 0 1.2em;
  border: 2px solid #dfe1e6;
  border-radius: 3px;
}

.login-form input {
  padding: 0.5em;
  font-family: "-apple-system", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.login-form .v-input,
.login-form .v-input__control,
.login-form .v-field,
.login-form .v-field__field,
.login-form input {
  height: 40px !important;
  min-height: 40px !important;
}

.login-form .v-field__overlay {
  background: #fff !important;
}

.login-form .v-field__outline {
  display: none !important;
}
</style>
<!-- eslint-enable max-len -->
