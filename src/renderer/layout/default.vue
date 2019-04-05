<template>
  <div class="mt-15">
    <handle-bar></handle-bar>
    <el-row>
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
              <router-link to="/all">
                <el-menu-item index="/all">所有文件</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-info"></i>
              <span>信息</span>
            </template>
            <el-menu-item-group>
              <router-link to="/detail">
                <el-menu-item index="/detail">配置</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="18" class="main-container">
        <transition name="fade" mode="out-in">
          <router-view style="padding: 10px;"></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.mt-15 {
  margin-top: -15px;
}
a {
  text-decoration: none
}
.el-menu {
  border: none;
}
.el-menu-item:hover {
  color: #409eff !important;
}
.main-menu {
  overflow: hidden;
  height: 100vh;
}
.mt-20 {
  margin-top: 20px;
}
.main-container {
  overflow: auto;
  height: 100vh;
  background: #F2F6FC;
}
.breadcrumb {
  margin-top: 1rem;
  margin-left: 5px;
}
</style>

<script>
import HandleBar from '@/components/handle-bar'

export default {
  name: 'default',
  components: {
    HandleBar
  }
}
</script>

