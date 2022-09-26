<template>
  <div class="extra-feature-item text-left" :class="classObj">
    <div class="extra-feature-item-text">
      <p v-if="data.upperHeader" class="upperHeader">{{data.upperHeader}}</p>
      <h1>{{ data.header }}</h1>
      <p class="description">{{data.description}}</p>

      <v-expansion-panels v-if="data.hideLearnMore !== true">
        <v-expansion-panel class="learnmore-container">
          <v-expansion-panel-header expand-icon="" @click="$emit('onLearnMoreClick')">
            <!-- eslint-disable max-len -->
            <h1 class="learnmore">{{ data.isOpened === false ? '+' : '-' }}
              Learn more</h1>
            <!-- eslint-enable max-len -->
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <p color="#091e42">{{data.learnMore.text}}</p>
            <p color="#091e42" v-if="data.learnMore.text2">{{data.learnMore.text2}}</p>

            <ul>
              <li v-for="(data, index) in data.learnMore.list" :key="index">{{data}}</li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

<!--      <div class="learnmore-container" :style="{-->
<!--        'height': data.isOpened ? '100%' : '0px',-->
<!--        'opacity': data.isOpened ? '1' : '0',-->
<!--      }">-->
<!--        <p color="#091e42">{{data.learnMore.text}}</p>-->
<!--        <p color="#091e42" v-if="data.learnMore.text2">{{data.learnMore.text2}}</p>-->

<!--        <ul>-->
<!--          <li v-for="(data, index) in data.learnMore.list" :key="index">{{data}}</li>-->
<!--        </ul>-->
<!--      </div>-->
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
  margin: 0!important;
}

.extra-feature-item-text .description {
  font-size: 20px!important;
  color: rgb(94, 108, 132);
}

.extra-feature-item-text .learnmore .v-btn__content {
  color: #091E42!important;
  font-size: 24px!important;
  font-family: 'Charlie Display Semi Bold', sans-serif!important;
  margin: 0;
  opacity: 1!important;
  text-transform: none;
}

.learnmore {
  font-family: 'Charlie Display', sans-serif!important;
  font-size: 1.5rem!important;
  margin: 0px!important;
}

.v-expansion-panel-header,
.learnmore-container,
.learnmore {
  padding: 0px!important;
}

.v-expansion-panel-header {
  min-height: fit-content!important;
  height: fit-content!important;
}

.v-expansion-panel-content__wrap {
  padding: 1rem 1.25rem;
}

.learnmore-container {
  padding: 1rem 1.25rem;
  overflow: hidden;
  transition-property: height, opacity;
  transition: 300ms, 500ms;
}

.learnmore-container p {
  font-size: 18px!important;
}

.learnmore-container li {
  font-family: 'Charlie Text', sans-serif;
  font-size: 18px;
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
