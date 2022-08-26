<template>
  <div class="top">
    <h1 class="top-header">Welcome to Zerio's Todo App</h1>
    <p class="top-description">This is just a fun project created by me (Zerio) to get better at Vue / Javascript.<br>Although it is completely open sourced can be used by anyone as they wish! :)</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
body {
  margin: 0px;
  background: #272534;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ebf3fb;
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
</style>
