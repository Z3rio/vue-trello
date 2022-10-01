<script setup lang="ts">
const props = defineProps<{
  data: Object;
}>();
</script>

<template>
  <div
    class="tab-item2"
    :style="{
      background:
        data.background !== undefined ? data.background : 'transparent',
    }"
  >
    <p class="tab-text2">{{ data.label }}</p>
    <v-icon v-if="data.isDropdown" class="tab-icon" :size="20"
      >mdi-chevron-down</v-icon
    >
  </div>
</template>

<!-- eslint-disable max-len -->
<style scoped>
.tab-text2,
.tab-icon {
  color: white;
  margin-bottom: 0 !important;
}

.tab-item2:hover {
  background: rgba(255, 255, 255, 0.3) !important;
}

.tab-item2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 5px;

  height: 32px;

  padding: 0 12px;
  border-radius: 3px;
}

.tab-item2 i {
  margin: 0px;
}

.tab-item2:hover {
  cursor: pointer;
}

.tab-text2 {
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif;
}

.tab-icon {
  margin-top: 7.5px;
}
</style>
<!-- eslint-enable max-len -->
