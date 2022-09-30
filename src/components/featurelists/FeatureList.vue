<script setup lang="ts">
import FeatureItem from "./FeatureItem.vue";

const props = defineProps<{
  features: Array;
}>();
</script>

<template>
  <div class="feature-list">
    <FeatureItem
      v-for="(feature, index) in features"
      :key="index"
      :data="feature"
    />
  </div>
</template>

<style>
.feature-list {
  display: flex;
  margin-top: 1vh;
  margin-bottom: 1vh;
}
</style>
