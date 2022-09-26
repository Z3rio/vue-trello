<template>
  <v-btn class="workspace-item" v-if="data && data.name" @click="opened = !opened"
    elevation="0" v-ripple="false" plain block
  >
    <div class="workspace-icon">
      {{data.name.substring(0, 1).toUpperCase()}}</div>
    <h1 class="workspace-text">{{data.name}}</h1>
    <v-icon size="20" color="#091e42">
      {{ opened == false ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
  </v-btn>
</template>

<!-- eslint-disable max-len -->
<style>
.workspace-item {
  display: flex;
  align-items: center;

  border-radius: 4px;

  padding: 6px 0 6px 0!important;
}

.workspace-item:hover {
  background: rgba(9, 30, 66, 0.08);
  cursor: pointer;
}

.workspace-item .workspace-text {
  color: #091e42;
  font-weight: bold;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 14px;

  margin-left: 3px;
}

.workspace-item .v-icon {
  margin-left: auto;
}

.workspace-item .workspace-icon {
  font-size: 14px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: bold;
  color: #fff;

  width: 21px;
  height: 21px;

  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 6px;

  background: linear-gradient(#006644, #00875a);
}
</style>
<!-- eslint-enable max-len -->

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'WorkspaceInfo',

  data: () => ({
    opened: false,
  }),

  props: {
    data: Object,
  },
});
</script>
