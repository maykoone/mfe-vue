<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Hello from Application A"/>
  </div>
</template>

<script>
import { importRemote } from '@module-federation/utilities';
import { APP_MESSAGE } from "@/constants"; // this will override the remote module

export default {
  name: 'App',
  components: {
    HelloWorld: () => importRemote({
      url: 'http://localhost:9001',
      scope: 'application_b',
      module: 'HelloWorld'
    }),
  },
  data () {
    return {
      appMessage: APP_MESSAGE
    }
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
