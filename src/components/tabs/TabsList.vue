<script setup lang="ts">
import TabItem from "./TabItem.vue";

const props = defineProps<{
  tabs: Array;
}>();
</script>

<template>
  <div class="tab-list ml-8">
    <TabItem v-for="(tabData, index) in tabs" :key="index" :data="tabData" />
  </div>
</template>

<style scoped>
.tab-list {
  display: flex;
  column-gap: 20px;
  width: 100%;
}
</style>
