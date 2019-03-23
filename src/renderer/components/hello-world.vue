<template>
  <div @click="openURL">hello world</div>
</template>

<script>
export default {
  name: 'hello-world',
  methods: {
    openURL () {
      this.$electron.remote.shell.openExternal('https://github.com/nick233333')
    }
  }
}
</script>
