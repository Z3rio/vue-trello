<template>
  <div class="dashboard-container">
    <div class="left-container">
      <v-btn
        :class="{'active': tab == 'boards'}"
        prepend-icon="mdi-clipboard-outline"
        elevation="0" v-ripple="false" text plain block
      ><v-icon size="16">
        mdi-clipboard-outline
      </v-icon>Boards</v-btn>
      <v-btn
        :class="{'active': tab == 'templates'}"
        prepend-icon="mdi-clipboard-outline"
        elevation="0" v-ripple="false" text plain block
      ><v-icon size="16">
        mdi-clipboard-edit-outline
      </v-icon>Templates</v-btn>
      <v-btn
        :class="{'active': tab == 'home'}"
        prepend-icon="mdi-clipboard-outline"
        elevation="0" v-ripple="false" text plain block
      ><v-icon size="16">
        mdi-chart-timeline-variant
      </v-icon>Home</v-btn>
      <hr>
      <div class="workspace-container">
        <h1>Workspace</h1>
        <v-icon size="16" color="#42526e">mdi-plus</v-icon>
      </div>

      <WorkspaceInfo v-for="(data, index) in workspaces" :key="index" :data="data"/>
    </div>
    <div class="right-container">
      <PopularTemplates :templates="templates"/>
      <YourWorkspaces />
    </div>
  </div>
</template>

<!-- eslint-disable max-len -->
<style>
.dashboard-container {
  display: flex;
  justify-content: center;

  margin: 40px auto 0px auto;
}

.dashboard-container .left-container {
  margin: 0px 0 0;
  padding-bottom: 40px;

  max-height: 90vh;
  height: fit-content;
  width: 240px;

  display: flex;
  flex-direction: column;
}

.dashboard-container .right-container {
  margin: 40px 16px 0;

  max-width: 825px;
  min-width: 288px;
  width: 100%;
}

.dashboard-container button .v-btn__content {
  opacity: 1!important;

  text-transform: none;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.dashboard-container>.left-container>button:not(.workspace-item),
.dashboard-container>.right-container>button {
  border-radius: 4px;
  margin-bottom: 4px;

  height: 32px!important;

  padding: 6px 8px 6px 12px!important;
  justify-content: flex-start!important;
}

.dashboard-container button:hover {
  cursor: pointer;
}

.dashboard-container button:not(.active):hover {
  background: rgba(9, 30, 66, 0.08);
}

.dashboard-container button:not(.active) {
  color: #172b4d;
}

.dashboard-container button.active {
  background: #e4f0f6;
  color: #0079bf;
}

.dashboard-container button .v-btn__content .v-icon {
  margin-right: 4px;
}

.workspace-container {
  display: flex;

  margin-top: 12px;
  padding: 0 0 0 8px
}

.workspace-container .v-icon {
  margin-left: auto;
}

.workspace-container h1 {
  padding: 8px 0;

  font-size: 12px;
  font-weight: 600;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
}
</style>
<!-- eslint-enable max-len -->

<script>
import Vue from 'vue';
import firebase from 'firebase';

import WorkspaceInfo from '../dashboard/WorkspaceInfo.vue';
import PopularTemplates from '../dashboard/PopularTemplates.vue';
import YourWorkspaces from '../dashboard/YourWorkspaces.vue';

export default Vue.extend({
  name: 'DashboardPage',

  components: {
    WorkspaceInfo,
    PopularTemplates,
    YourWorkspaces,
  },

  data: () => ({
    user: {},

    tab: 'boards',

    /* eslint-disable max-len */
    templates: [
      {
        name: 'Project Management',
        background: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg',
      },
      {
        name: 'Kanban Template',
        background: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x322/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg',
      },
      {
        name: 'Simple Project Board',
        background: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x270/efea59b89ada0934c5256715fb180bd9/photo-1463107971871-fbac9ddb920f.jpg',
      },
      {
        name: 'Remote Team Hub',
        background: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/b10c8bd87b80f7abeb56820f50c4db66/photo-1474487548417-781cb71495f3.jpg',
      },
    ],
    /* eslint-enable max-len */

    workspaces: [
      {
        name: 'Test Workspace',
      },
    ],
  }),

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.$router.push('/home');
      }
    });
  },

  methods: {},
});
</script>
