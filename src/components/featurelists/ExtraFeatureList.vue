<script setup lang="ts">
import ExtraFeatureItem from "./ExtraFeatureItem.vue";

const props = defineProps<{
  features: Array;
}>();
</script>

<template>
  <div class="extra-feature-list">
    <ExtraFeatureItem
      v-for="(feature, index) in features"
      :key="index"
      :data="feature"
      @onLearnMoreClick="$emit('onLearnMoreClick', index)"
    />
  </div>
</template>

<style></style>
