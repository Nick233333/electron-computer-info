<template>
  <div>
    <el-card>
      <div slot="header">
        <span>系统</span>
      </div>
      <p>操作系统：{{ os.type() }}</p>
      <p>CPU型号：{{ os.cpus()[0].model }}</p>
      <p>平台：{{ os.platform() }}</p>
      <p>用户名：{{ os.hostname() }}</p>
    </el-card>
    <el-card style="margin-top: 10px;">
      <div slot="header">
        <span>内存RAM</span>
      </div>
      <p>已用内存：{{ usedmem }}</p>
      <p>空闲内存：{{ freemem }}</p>
      <p>总内存：{{ totalmem }}</p>
      <p>内存使用：</p>
      <el-progress :percentage="percentMem"></el-progress>
    </el-card>
  </div>
</template>

<script>
import { toMem } from '../utils/index'
const os = require('os')

export default {
  name: 'detail',
  data () {
    return {
      os: os,
      percentMem: parseInt((os.totalmem() - os.freemem()) / os.totalmem() * 100)
    }
  },
  computed: {
    usedmem () {
      return toMem(os.totalmem() - os.freemem())
    },
    freemem () {
      return toMem(os.freemem())
    },
    totalmem () {
      return toMem(os.totalmem())
    }
  }
}
</script>
