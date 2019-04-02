<template>
  <div class="fake-title-bar">
    <div class="handle-bar" v-if="os === 'win32'">
      <i title="最小化" class="el-icon-minus" @click="minimizeWindow"></i>
      <i title="最大化" class="el-icon-circle-plus-outline" @click="maximizeWindow"></i>
      <i title="关闭" class="el-icon-close" @click="closeWindow"></i>
    </div>
  </div>
</template>

<style scoped>
.fake-title-bar {
  -webkit-app-region: drag;
  height: 22px;
  width: 100%;
  position: fixed;
  z-index: 1000;
  background: transparent;
}
.handle-bar {
  position: absolute;
  top: 5px;
  right: 8px;
  width: 85px;
  z-index: 100;
  -webkit-app-region: no-drag;
}
i {
  cursor: pointer;
  font-size: 22px;
}
.el-icon-minus {
  color: #409EFF;
}
.el-icon-close {
  color: #F15140;
}
.el-icon-circle-plus-outline {
  padding-left: 3px;
  padding-right: 3px;
  color: #69C282;
}
</style>

<script>
import { remote } from 'electron'
const { BrowserWindow } = remote

export default {
  name: 'handle-bar',
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


