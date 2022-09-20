<template>
  <div class="tab-list ml-8">
    <TabItem v-for="(tabData, index) in tabs" :key="index" :data="tabData"/>
  </div>
</template>

<style>
.tab-list {
  display: flex;
  column-gap: 20px;
  width: 100%;
}
</style>

<script>
import Vue from 'vue';
import TabItem from './TabItem.vue';

export default Vue.extend({
  components: {
    TabItem,
  },
  props: {
    tabs: Array,
  },
  name: 'TabsList',
});
</script>

<style scoped>

</style>
