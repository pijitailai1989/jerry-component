<template>
  <div class="avatar">
    <div class="avatar_container">
      <ic-pagination :current="current" :total="40" :size="5" @goClick="goJump" ></ic-pagination>
      <ic-pagination @goClick="goJump" ></ic-pagination>

    </div>

    <div class="ui-tip-contain">
      <el-card>
        <div slot="header">
          <span>组件入参</span>
        </div>
        <div class="option-items">
          <p class="option-discrp">
            <span>参数</span>
            <span>说明</span>
            <span>类型</span>
            <span>可选</span>
            <span>默认值</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>current</span>
            <span>当前页</span>
            <span>Number</span>
            <span>必传</span>
            <span>0</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>size</span>
            <span>每页展示多少条数据</span>
            <span>Number</span>
            <span>必传</span>
            <span>10</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>total</span>
            <span>总条数</span>
            <span>Number</span>
            <span>必传</span>
            <span>0</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>isREM</span>
            <span>是否启用rem布局</span>
            <span>Boolean</span>
            <span>true/false</span>
            <span>false</span>
          </p>
        </div>
      </el-card>
      <el-card>
        <div slot="header">
          <span>事件</span>
        </div>
        <div class="option-items">
          <p class="option-discrp">
            <span>事件名称</span>
            <span>说明</span>
            <span>回调参数</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>goClick</span>
            <span>获取当前页数，和的上下方向</span>
            <span>(pageNumber, direction) 页数和方向</span>
          </p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
      current: 1
    }
  },
  components: {},
  created () {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    goJump (data, isGo) {
      this.current = data
    }
  },
  beforeDestroy () {}
}
</script>
<style lang="scss" scoped>
.avatar {
  .avatar_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
