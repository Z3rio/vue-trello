<template>
  <div class='tab-list2 ml-3'>
    <TabItem2 v-for="(tabData, index) in tabs" :key="index" :data="tabData" />
  </div>
</template>

<style>
.tab-list2 {
  display: flex;
  column-gap: 5px;
  width: 100%;
}
</style>

<script>
import Vue from 'vue';
import TabItem2 from './TabItem2.vue';

export default Vue.extend({
  components: {
    TabItem2,
  },
  props: {
    tabs: Array,
  },
  name: 'TabsList2',
});
</script>
