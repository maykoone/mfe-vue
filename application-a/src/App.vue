<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello from Application A"/>
  </div>
</template>

<script>
import { importRemote } from '@module-federation/utilities';

export default {
  name: 'App',
  components: {
    HelloWorld: () => importRemote({
      url: 'http://localhost:9001',
      scope: 'application_b',
      module: 'HelloWorld'
    }),
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
