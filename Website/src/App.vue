<template>
  <v-app>
    <div class="top">
      <h1 class="top-header">Welcome to Zerio's Todo App</h1>
      <p class="top-description">This is just a fun project created by me (Zerio) to get better at Vue / Javascript.<br>Although it is completely open sourced can be used by anyone as they wish! :)</p>
    </div>

    <div
      class="textField-row"
    >
        <v-text-field
            label="Add new todo item"
            v-model="todoText"
            solo
            hide-details="auto"
        ></v-text-field>
        <v-icon
            @click="addTodo"
            v-ripple

        >mdi-plus</v-icon>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      todoText: ""
    }
  },
  methods: {
    addTodo: function() {
      console.log("yes")
    }
  }
}
</script>

<style>
*::-webkit-scrollbar {
  display: none;
}

* {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

body {
  margin: 0px;
}

body, .v-application {
  background: #272534;
  color: #ebf3fb!important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.top {
  padding: 6vh 5vh 8.25vh 5vh;

  background: linear-gradient(13deg, #12c2e9, #c471ed, #f64f59);

  mask-image: linear-gradient(
      to bottom,
      black 32px,
      black 32px,
      black calc(100% - 32px),
      transparent
  );
}

.top-header {
  font-family: "Ubuntu", sans-serif;
  font-size: 40px;

  margin-bottom: 0px;
}

.top-description {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;

  margin-top: 10px;
}

.textField-row {
  display: flex;
  width: 50vh;
  margin: 12.5vh auto;
  align-items: center;
}

.textField-row i {
  margin-left: 15px;
  border-radius: 50%;
  padding: 5px;
  width: fit-content;
  height: fit-content;
}
</style>
