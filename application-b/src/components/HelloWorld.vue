<template>
  <div class="hello">
    <h1>{{ appMessage }}</h1>
    <p>Application B microfrontend</p>
  </div>
</template>

<script>
import { APP_MESSAGE } from "@/constants";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    appMessage() {
      return `${APP_MESSAGE} ${this.msg}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
