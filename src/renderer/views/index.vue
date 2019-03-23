<template>
  <div>
    <hello-world></hello-world>
    <iframe :src="url" class="iframe"></iframe>
  </div>
</template>

<style>
body {
  margin: 0;
}
.iframe {
  height: 100vh;
  width: 100vw;
  border: none;
}
</style>

<script>
import HelloWorld from '@/components/hello-world'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      url: 'https://koa2.hellocode.name/'
    }
  }
}
</script>

