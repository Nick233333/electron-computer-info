<template>
  <el-col :span="6">
    <el-menu
      class="main-menu"
      :default-active="$route.path"
      background-color="#545c64"
      text-color="#fff"
      unique-opened
    >
      <el-submenu index="1" class="mt-20">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>我的</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/my/all">所有文件</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-info"></i>
          <span>信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/info/detail">配置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</template>

<style scoped>
.el-menu {
  border: none;
}
.el-menu-item:hover {
  color: #409EFF !important;
}
.main-menu {
  overflow: hidden;
  height: 100vh
}
.mt-20 {
  margin-top: 20px;
}
</style>

<script>
export default {
  name: 'main-menu'
}
</script>


