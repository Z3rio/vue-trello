<script setup lang="ts">
const props = defineProps<{
  data: Object;
}>();
</script>

<template>
  <div class="tab-item">
    <p class="tab-text">{{ data.label }}</p>
    <v-icon v-if="data.isDropdown" class="tab-icon" :size="20"
      >mdi-chevron-down</v-icon
    >
  </div>
</template>

<style scoped>
.app-bar-1 .tab-text,
.app-bar-1 .tab-icon {
  color: rgb(23, 43, 77);
  margin-bottom: 0 !important;
}

.app-bar-1 .tab-item:hover .tab-text,
.app-bar-1 .tab-item:hover .tab-icon {
  color: rgb(0, 101, 255);
}

.tab-item .v-icon {
  margin: 0px;
}

.tab-item {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;

  column-gap: 5px;
}

.tab-item:hover {
  cursor: pointer;
}

.tab-text {
  font-size: 1rem;
  font-family: "Charlie Text", sans-serif;
}

.tab-icon {
  margin-top: 7.5px;
}
</style>
