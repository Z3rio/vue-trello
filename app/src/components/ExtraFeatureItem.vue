<template>
  <div class="extra-feature-item text-left" :class="classObj">
    <div class="extra-feature-item-text">
      <p v-if="data.upperHeader" class="upperHeader">{{data.upperHeader}}</p>
      <h1>{{ data.header }}</h1>
      <p class="description">{{data.description}}</p>
      <!-- eslint-disable max-len -->
      <h1 class="learnmore" v-if="data.hideLearnMore !== true" onClick="this.$parent.onLearnMoreClick()">{{data.isOpened == false ? '+' : '-'}} Learn more</h1>
      <!-- eslint-enable max-len -->
    </div>
    <img :width="data.image.width" :height="data.image.height" v-if="data.image"
         :src="data.image.url" alt="Extra feature image" class="extra-feature-item-image">
  </div>
</template>

<style>
.extra-feature-item {
  padding: 1rem;
  display: flex;
}
.extra-feature-item.left:not(.has-image) {
  width: 50%;
}

.extra-feature-item.right {
  flex-direction: row-reverse;
}

.extra-feature-item.right:not(.has-image) {
  width: 50%;
  margin-left: 50%;
}

.extra-feature-item.has-image .extra-feature-item-text {
  width: 58.3333%;
}

.extra-feature-item img,
.extra-feature-item-text {
  padding: 1rem;
}

.extra-feature-item-text .upperHeader {
  font-size: 1rem!important;
  font-family: 'Charlie Text Semi Bold', sans-serif!important;
  margin: 0px!important;
}

.extra-feature-item-text .description {
  font-size: 20px!important;
  color: rgb(94, 108, 132);
}

.extra-feature-item-text .learnmore {
  color: #091E42;
  font-size: 24px;
  margin: 0px;
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ExtraFeatureItem',

  props: {
    data: Object,
  },

  computed: {
    classObj() {
      const classes = [];
      classes.push(this.data.align);
      if (this.data.image !== undefined) {
        classes.push('has-image');
      }
      return classes;
    },
  },
});
</script>

<style scoped>

</style>
