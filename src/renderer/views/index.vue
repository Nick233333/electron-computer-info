<template>
  <div style="margin-top: -15px;">
    <div class="handle-bar" v-if="os === 'win32'">
      <i class="el-icon-minus" @click="minimizeWindow"></i>
      <i class="el-icon-circle-plus-outline" @click="maximizeWindow"></i>
      <i class="el-icon-close" @click="closeWindow"></i>
    </div>
    <el-row>
      <el-col :span="6">
        <el-menu
          class="main-left"
          default-active="1-1"
          background-color="#545c64"
          text-color="#fff"
          unique-opened
        >
          <el-submenu index="1" style="margin-top: 20px;">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>我的</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">所有文件</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-info"></i>
              <span>信息</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">配置</el-menu-item>
              <el-menu-item index="2-2">其他</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="18" class="main-right">
        <el-breadcrumb separator="/" style="margin-top: 1rem;margin-left: 5px;">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/detail' }">详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.main-left {
  overflow: hidden;
  height: 100vh
}
.main-right {
  height: 100vh;
  background: #F2F6FC;
}
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
