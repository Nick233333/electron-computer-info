<template>
  <div @click="openURL">hello world</div>
</template>

<script>
const os = require('os')

export default {
  name: 'hello-world',
  methods: {
    openURL () {
      this.$electron.remote.shell.beep()
      this.$electron.remote.shell.showItemInFolder(`${os.homedir()}/www/`)
    }
  }
}
</script>
