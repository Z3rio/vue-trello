<template>
  <div class="extra-feature-list">
    <ExtraFeatureItem
      v-for="(feature, index) in features" :key="index" :data="feature"
      @onLearnMoreClick="this.$parent.onLearnMoreClick(index)"/>
  </div>
</template>

<style>

</style>

<script>
import Vue from 'vue';
import ExtraFeatureItem from './ExtraFeatureItem.vue';

export default Vue.extend({
  name: 'ExtraFeatureList',

  components: {
    ExtraFeatureItem,
  },

  props: {
    features: Array,
  },
});
</script>

<style scoped>

</style>
