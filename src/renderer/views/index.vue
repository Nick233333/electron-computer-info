<template>
  <div>
    <router-link :to="{path: '/detail'}" tag="a">aa</router-link>
    <hello-world @click.native="go"></hello-world>
  </div>
</template>

<style>

</style>

<script>
import HelloWorld from '@/components/hello-world'

export default {
  components: {
    HelloWorld
  },
  data () {
    return {}
  },
  methods: {
    go () {
      this.router.push('/detail')
    }
  }
}
</script>

