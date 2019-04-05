<template>
  <div>
     <el-table
      :data="dir"
      highlight-current-row
      style="width: 100%">
      <el-table-column
        min-width="33"
        align="center"
        prop="name"
        label="文件名"
        >
      </el-table-column>
      <el-table-column
        min-width="33"
        align="center"
        prop="type"
        label="类型"
        >
      </el-table-column>
      <el-table-column
        min-width="33"
        align="center"
        prop="size"
        label="大小"
        >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const fs = require('fs')
const os = require('os')

export default {
  name: 'index',
  data () {
    return {
      dir: []
    }
  },
  methods: {
    bytesToSize (bytes) {
      let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
      if (bytes === 0) return '0 Byte'
      let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
    }
  },
  created () {
    fs.readdir(`${os.homedir()}`, (err, data) => {
      if (err) {
        return console.log(err)
      } else {
        let arr = []
        for (let file of data) {
          let obj = {}
          fs.stat(`${os.homedir()}/${file}`, (err, stats) => {
            if (err) {
              console.log(err)
            } else {
              obj = {name: file}
              if (stats.isFile()) {
                obj.type = '文件'
              } else {
                obj.type = '目录'
              }
              obj.size = this.bytesToSize(stats.size)
              arr.push(obj)
            }
          })
        }
        this.dir = arr
      }
    })
  }
}
</script>
