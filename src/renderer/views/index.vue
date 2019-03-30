<template>
  <div>
    <div class="handle-bar" v-if="os !== 'darwin'">
      <i class="el-icon-minus" @click="minimizeWindow"></i>
      <i class="el-icon-circle-plus-outline" @click="maximizeWindow"></i>
      <i class="el-icon-close" @click="closeWindow"></i>
    </div>
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

import { remote } from 'electron'
const { BrowserWindow } = remote

export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      os: '',
      isMaximize: false
    }
  },
  created () {
    this.os = process.platform
  },
  methods: {
    go () {
      this.router.push('/detail')
    },
    minimizeWindow () {
      const window = BrowserWindow.getFocusedWindow()
      window.minimize()
    },
    maximizeWindow () {
      const window = BrowserWindow.getFocusedWindow()
      if (this.isMaximize) {
        window.unmaximize()
        this.isMaximize = false
      } else {
        window.maximize()
        this.isMaximize = true
      }
    },
    closeWindow () {
      const window = BrowserWindow.getFocusedWindow()
      window.close()
    }
  }
}
</script>

