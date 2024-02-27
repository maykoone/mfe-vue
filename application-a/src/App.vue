<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorldFromB msg="Hello from Application A"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    HelloWorldFromB: () => import("application_b/HelloWorldFromB"),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
