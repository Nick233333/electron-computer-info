<template>
  <div class="mt-15">
    <handle-bar></handle-bar>
    <el-row>
      <main-menu></main-menu>
      <el-col :span="18" class="main-container">
        <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/detail' }">详情</el-breadcrumb-item>
        </el-breadcrumb>
        index
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.main-container {
  height: 100vh;
  background: #F2F6FC;
}
.breadcrumb {
  margin-top: 1rem;
  margin-left: 5px;
}
</style>

<script>
import HelloWorld from '@/components/hello-world'
import MainMenu from '@/components/main-menu'
import HandleBar from '@/components/handle-bar'

export default {
  components: {
    HelloWorld,
    MainMenu,
    HandleBar
  }
}
</script>
