<template>
  <div class="slide_contain">
    <ic-menu
      router
      :width="240"
      :needCollapse="false"
      :default-active="$route.meta.path || $route.path">
      <ic-menu-item
        v-for="(item, index) in menuList"
        :key="index"
        :index="item.path">
        {{item.name}}
      </ic-menu-item>
    </ic-menu>
  </div>
</template>

<script>
import menuList from '../config/menuList.js'
export default {
  data () {
    return {
      menuList
    }
  }
}
</script>

<style lang="scss">
  .slide_contain {
    height: 100vh;
    padding-top: 70px;
    position: fixed;
    left: 0;
    top: 0;
    border-right: 1px solid #eee;
    z-index: 0;
    background-color: #114781;
  }
</style>
