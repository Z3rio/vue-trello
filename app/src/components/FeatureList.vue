<template>
  <div class="feature-list">
    <FeatureItem v-for="(feature, index) in features" :key="index" :data="feature"/>
  </div>
</template>

<style>
.feature-list {
  display: flex;
  margin-top: 1vh;
  margin-bottom: 1vh;
}
</style>

<script>
import Vue from 'vue';
import FeatureItem from './FeatureItem.vue';

export default Vue.extend({
  components: {
    FeatureItem,
  },
  props: {
    features: Array,
  },
  name: 'FeatureList',
});
</script>

<style scoped>

</style>
