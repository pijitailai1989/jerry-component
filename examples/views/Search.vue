<template>
   <div class="container">
    <div class="box">
      <ic-search @search="onSearch" cacheKey="ic-search-storage" :history="true" :isEnter="true" placeholder="这是一个寂寞的江湖"></ic-search>
    </div>
    <div class="box">
      <ic-search @search="onSearch"></ic-search>
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
            <span>history</span>
            <span>是否启用历史记录</span>
            <span>Booleam</span>
            <span>true/false</span>
            <span>false</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>cacheKey</span>
            <span>历史数本地据缓存地址 key</span>
            <span>String</span>
            <span>启用 history 则必传</span>
            <span>—</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>isEnter</span>
            <span>是否启用回车搜索</span>
            <span>Boolean</span>
            <span>true / false</span>
            <span>false</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>placeholder</span>
            <span>占位提示文案</span>
            <span>String</span>
            <span>不必传</span>
            <span>Search</span>
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
            <span>search</span>
            <span>搜索</span>
            <span>data</span>
          </p>
        </div>
      </el-card>
    </div>
   </div>
</template>

<script>
// import { mapGetters } from "vuex';"
export default {
  props: {},
  data () {
    return {}
  },
  components: {},
  created () {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    onSearch (data) {
      // console.log(data, '搜索')
    }
  },
  beforeDestroy () {}
}
</script>
<style lang="scss" scoped>
.container {
  .box {
    width: 200px;
    margin-top: 20px;
  }
}
</style>
