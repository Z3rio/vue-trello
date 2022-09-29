<template>
  <div class="workspace-item">
    <v-btn v-if="data && data.name" @click="opened = !opened"
           elevation="0" v-ripple="false" plain block
    >
      <div class="workspace-icon">
        {{data.name.substring(0, 1).toUpperCase()}}</div>
      <h1 class="workspace-text">{{data.name}}</h1>
      <v-icon size="20" color="#091e42">
        {{ opened == false ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
    </v-btn>
    <div class="workspace-list" v-if="opened">
      <v-btn v-if="data && data.name" @click="opened = !opened"
       elevation="0" v-ripple="false" plain block
      >
        <v-icon size="16" color="#091e42">mdi-clipboard-outline</v-icon>
        <h1 class="workspace-text">Boards</h1>
      </v-btn>
      <v-btn v-if="data && data.name" @click="opened = !opened"
       elevation="0" v-ripple="false" plain block
      >
        <v-icon size="16" color="#091e42">mdi-heart-outline</v-icon>
        <h1 class="workspace-text">Highlights</h1>
      </v-btn>
      <v-btn v-if="data && data.name" @click="opened = !opened"
       elevation="0" v-ripple="false" plain block
      >
        <v-icon size="16" color="#091e42">mdi-view-grid-outline</v-icon>
        <h1 class="workspace-text">Views</h1>
      </v-btn>
      <v-btn v-if="data && data.name" @click="opened = !opened"
       elevation="0" v-ripple="false" plain block
      >
        <v-icon size="16" color="#091e42">mdi-account-multiple-outline</v-icon>
        <h1 class="workspace-text">Members</h1>
        <v-icon size="16" color="#091e42" style="margin-left: auto;">mdi-plus</v-icon>
      </v-btn>
      <v-btn v-if="data && data.name" @click="opened = !opened"
       elevation="0" v-ripple="false" plain block
      >
        <v-icon size="16" color="#091e42">mdi-cog-outline</v-icon>
        <h1 class="workspace-text">Settings</h1>
      </v-btn>
    </div>
  </div>
</template>

<!-- eslint-disable max-len -->
<style>
.workspace-item .workspace-list .v-btn__content .v-icon {
  margin: 0px;
}

.workspace-item .workspace-list button {
  padding: 6px 8px 6px 28px!important;
  height: 32px!important;
  margin-bottom: 4px;
}

.workspace-item .workspace-list {
  margin-top: 8px;
}

.workspace-item .workspace-list .v-btn__content {
  justify-content: flex-start;
}

.workspace-item .workspace-list .v-btn__content h1 {
  font-weight: 400;
  font-size: 12px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  color: rgba(9, 30, 66, 0.77);
}

.workspace-item button {
  display: flex;
  align-items: center;

  border-radius: 4px;

  padding: 6px 0 6px 0!important;
}

.workspace-item button:hover {
  background: rgba(9, 30, 66, 0.08);
  cursor: pointer;
}

.workspace-item button .workspace-text {
  color: #091e42;
  font-weight: bold;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 14px;

  margin-left: 3px;
}

.workspace-item button .v-icon {
  margin-left: auto;
}

.workspace-item button .workspace-icon {
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
