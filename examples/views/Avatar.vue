<template>
  <div class="avatar">
    <div class="avatar_container">
      <ic-avatar @upload="uploadFile" :isUpload="false"></ic-avatar>
      <ic-avatar @upload="uploadFile" :headerImg="''"></ic-avatar>
      <ic-avatar @upload="uploadFile" width="40px" :headerImg="logo"></ic-avatar>
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
            <span>headerImg</span>
            <span>headerImg路径</span>
            <span>String</span>
            <span>不必传</span>
            <span>默认头像</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>width</span>
            <span>头像宽度，单位: px/rem</span>
            <span>String</span>
            <span>不必传</span>
            <span>40px</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>isUpload</span>
            <span>是否需要上传功能</span>
            <span>Boolean</span>
            <span>true / false</span>
            <span>true</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>size</span>
            <span>文件最大值， 单位: M</span>
            <span>String, Number</span>
            <span>不必传</span>
            <span>5</span>
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
            <span>upload</span>
            <span>上传文件</span>
            <span>data 文件流</span>
          </p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import logo from '../assets/image/NCIC.png'

export default {
  props: {},
  data () {
    return {
      logo
    }
  },
  components: {},
  created () {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    uploadFile (data) {
      // console.log(data, '文件流')
    }
  },
  beforeDestroy () {}
}
</script>
<style lang="scss" scoped>
.avatar {
  .avatar_container {
    margin: 0 auto;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
