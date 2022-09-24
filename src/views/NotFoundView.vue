<template>
  <div>
    <h1>Page not found.</h1>
    <p>This page may be private. You may be able to view it by logging in.</p>
  </div>
</template>

<!-- eslint-disable max-len -->
<style scoped>
div h1,
div p {
  width: 100%;

  text-align: center;
}

div {
  margin: 75px auto;

  display: flex;
  flex-direction: column;
  width: fit-content;
}

div h1 {
  color: #6B778C;
  font-size: 26px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 600;

  margin-bottom: 24px;
}

div p {
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 18px;
  font-weight: 400;
}
</style>
<!-- eslint-enable max-len -->

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NotFoundView',
});
</script>
