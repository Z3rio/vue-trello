<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  data: Object;
}>();

const classObj = computed(() => {
  const classes = [];
  classes.push(props.data.align);
  if (props.data.image !== undefined) {
    classes.push("has-image");
  }
  return classes;
});
</script>

<template>
  <div class="extra-feature-item text-left" :class="classObj">
    <div class="extra-feature-item-text">
      <p v-if="data.upperHeader" class="upperHeader">{{ data.upperHeader }}</p>
      <h1>{{ data.header }}</h1>
      <p class="description">{{ data.description }}</p>

      <v-expansion-panels v-if="data.hideLearnMore !== true">
        <v-expansion-panel class="learnmore-container">
          <v-expansion-panel-title @click="$emit('onLearnMoreClick')">
            <h1 class="learnmore">
              {{ data.isOpened === false ? "+" : "-" }} Learn more
            </h1>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <p color="#091e42">{{ data.learnMore.text }}</p>
            <p color="#091e42" v-if="data.learnMore.text2">
              {{ data.learnMore.text2 }}
            </p>

            <ul>
              <li v-for="(data, index) in data.learnMore.list" :key="index">
                {{ data }}
              </li>
            </ul>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <img
      :width="data.image.width"
      :height="data.image.height"
      v-if="data.image"
      :src="data.image.url"
      alt="Extra feature image"
      class="extra-feature-item-image"
    />
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
  font-size: 1rem !important;
  font-family: "Charlie Text Semi Bold", sans-serif !important;
  margin: 0 !important;
}

.extra-feature-item-text .description {
  font-size: 20px !important;
  color: rgb(94, 108, 132);
}

.extra-feature-item-text .learnmore .v-btn__content {
  color: #091e42 !important;
  font-size: 24px !important;
  font-family: "Charlie Display Semi Bold", sans-serif !important;
  margin: 0;
  opacity: 1 !important;
  text-transform: none;
}

.learnmore {
  font-family: "Charlie Display", sans-serif !important;
  font-size: 1.5rem !important;
  margin: 0px !important;
}

.v-expansion-panel-title,
.learnmore-container,
.learnmore {
  padding: 0px !important;
}

.v-expansion-panel-title {
  min-height: fit-content !important;
  height: fit-content !important;
}

.v-expansion-panel-text {
  margin-top: 1rem;
  margin-left: 1.25rem;
}

.v-expansion-panel-text__wrapper {
  padding: 0px !important;
}

.v-expansion-panel-text__wrapper ul {
  padding-left: 2rem;
}

.v-expansion-panel-title__overlay {
  background: transparent !important;
}

.v-expansion-panel-title__icon .v-icon {
  display: none !important;
}

.learnmore-container {
  padding: 1rem 1.25rem;
  overflow: hidden;
  transition-property: height, opacity;
  transition: 300ms, 500ms;
}

.v-expansion-panel__shadow {
  display: none !important;
}

.learnmore-container p {
  font-size: 18px !important;
}

.learnmore-container li {
  font-family: "Charlie Text", sans-serif;
  font-size: 18px;
}
</style>
