<script setup lang="ts">
import TabItem2 from "./TabItem2.vue";

const props = defineProps<{
  tabs: Array;
}>();
</script>

<template>
  <div class="tab-list2 ml-3">
    <TabItem2 v-for="(tabData, index) in tabs" :key="index" :data="tabData" />
  </div>
</template>

<style scoped>
.tab-list2 {
  display: flex;
  column-gap: 5px;
  width: 100%;
}
</style>
