<template>
  <div id="app">
    <el-container>
      <header>
        云擎UI组件
      </header>
      <Slide/>
      <el-container class="warper_content">
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Slide from './components/public_slide.vue'
export default {
  components: {
    Slide
  }
}
</script>

<style lang="scss">
  header {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index:1;
    box-shadow:0px 3px 2px 0px rgba(65,40,0,0.13);
  }
  .warper_content {
    background-color: #fff;
    margin-left: 240px;
    transition-duration: 0.1s;
    position: relative;
    padding: 30px;
    padding-top: 100px;
    background-color: #fff;
    .el-main {
      background:rgba(243,244,249,1);
      &::-webkit-scrollbar{
        width: 8px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-color: #E6E7F0;
      }
    }
  }
  .el-menu-item, .el-submenu__title {
    height: 44px;
    line-height: 44px;
  }
  .el-submenu, .el-menu-item {
    margin-bottom: 2px;
  }
  .el-submenu .el-menu-item {
    height: 44px;
    line-height: 44px;
    margin-bottom: 0;
    padding-left: 50px !important;
  }

  .el-menu-item-group__title {
    padding: 0;
    padding-left: 20px;
  }
  .el-menu {
    background-color: #114781 !important;
  }

  .el-menu .el-menu-item:hover {
    background-color: #0B3C70 !important;
  }

  .el-menu-item.is-active {
    color: #114781!important;
    background-color: #fff!important;
  }

  .el-menu .el-menu-item i {
    color: #ffffff !important;
  }

  .el-menu .el-submenu .el-submenu__title i {
    color: #ffffff !important;
  }

  .el-menu-item.is-active i{
    color: #114781!important;
  }

  .el-menu-item:hover {
    color: #fff!important;
  }

  .el-menu-item:hover i{
    color: #fff!important;
  }
</style>
