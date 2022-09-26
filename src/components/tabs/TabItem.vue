<template>
  <div class="tab-item">
    <p class="tab-text">{{data.label}}</p>
    <ChevronDownIcon v-if="data.isDropdown" class="tab-icon" :size="20"/>
  </div>
</template>

<style>
.app-bar-1 .tab-text,
.app-bar-1 .tab-icon {
  color: rgb(23, 43, 77);
  margin-bottom: 0!important;
}

.app-bar-1 .tab-item:hover .tab-text,
.app-bar-1 .tab-item:hover .tab-icon {
  color: rgb(0, 101, 255);
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

<script>
import Vue from 'vue';
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue';

export default Vue.extend({
  name: 'TabItem',
  components: {
    ChevronDownIcon,
  },
  props: {
    data: Object,
  },
});
</script>
