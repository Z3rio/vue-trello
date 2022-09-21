<template>
  <div class="feature-item">
    <div class="feature-image">
      <img :src="data.imageUrl" alt="Feature Image">
    </div>
    <div class="feature-text">
      <h1>{{data.header}}</h1>
      <p>{{data.description}}</p>
      <v-btn
        elevation="2"
        color="#0065ff"
        class="blue-button feature-btn"
      >{{data.buttonText}}</v-btn>
    </div>
  </div>
</template>

<style>
.feature-item {
  width: calc(100% / 3);
  display: flex;
}

.feature-image {
  width: 25%;
  padding: 1rem;
}

.feature-image img {
  width: 100%;
}

.feature-text {
  width: 75%;
  padding: 1rem;
  margin-top: -5px;
}

.feature-text h1 {
  font-family: 'Charlie Display', sans-serif;
  font-size: 1.5rem;
}

.feature-text p {
  font-family: 'Charlie Text', sans-serif;
  font-size: 1rem;
  margin-top: 5px;
}

.blue-button.feature-btn {
  height: 48px!important;
  margin-top: 10px;
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    data: Object,
  },
  name: 'FeatureItem',
});
</script>

<style scoped>

</style>
