<template>
  <div>
    <router-link :to="{path: '/detail'}" tag="a">aa</router-link>
    <hello-world @click.native="go"></hello-world>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
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

