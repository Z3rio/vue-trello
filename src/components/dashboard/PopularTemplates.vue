<template>
  <div class="popular-templates">
    <div class="header">
      <v-icon size="24">mdi-clipboard-outline</v-icon>
      <h1>Most popular templates</h1>
      <v-icon size="20" class="close-icon" color="#172B4D">mdi-close</v-icon>
    </div>
    <div class="description">
      <p>Get going faster with a template from the Trello community or</p>
      <v-select
        hide-details
      >choose a category</v-select>
    </div>

    <div class="templates">
      <div class="template" v-for="(data, index) in templates" :key="index"
           :style="{'background-image': 'url(' + data.background + ')'}">
        <p>Template</p>
        <h1>{{data.name}}</h1>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable max-len -->
<style>
.templates {
  display: flex;
  column-gap: 2%;
}

.templates .template {
  height: 96px;
  width: 25%;

  padding: 8px;

  border-radius: 3px;

  background-size: cover;
  background-position: center center;
  background-position-x: center;
  background-position-y: center;
}

.templates .template p {
  padding: 3px 8px;
  margin: 0px;

  background: rgba(255, 255, 255, 0.69);
  border-radius: 3px;

  color: #172B4D;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 11px;
  font-weight: bold;

  width: fit-content;
}

.templates .template h1 {
  margin: 2px 0 0 0;

  color: #fff;
  font-size: 16px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
}

.templates .template:hover {
  cursor: pointer;
  filter: brightness(0.85);
}

.popular-templates .header {
  display: flex;
}

.popular-templates .header .close-icon {
  margin-left: auto;

  height: 32px;
  width: 32px;

  border-radius: 3px;
  background: rgba(9, 30, 66, 0.08);
}

.popular-templates .header .close-icon:hover {
  background: #DFE1E6;
  cursor: pointer;
}

.popular-templates .header h1 {
  color: #172b4d;
  font-weight: 600;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 20px;
}

.popular-templates .description {
  display: flex;
}

.popular-templates .description p {
  color: #5E6C84;
}

.popular-templates .description .v-select__slot,
.popular-templates .description .v-input__slot {
  width: fit-content!important;
}

.popular-templates .description .v-text-field {
  padding: 0px;
  margin: 0px;
}
</style>
<!-- eslint-enable max-len -->

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'PopularTemplates',

  props: {
    templates: Array,
  },
});
</script>
