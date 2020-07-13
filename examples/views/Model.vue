<template>
  <div>
    <el-button @click="openModel" size="mini">打开弹框</el-button>
    <ic-model
      v-if="modelVisibel"
      @closeModel="closeModel"
      title="标题"
      >
      <i class="iconfont iconjiazaizhong" slot="icon"></i>
      </ic-model>
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
            <span>width</span>
            <span>弹框宽度</span>
            <span>String</span>
            <span>不必传</span>
            <span>400px</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>title</span>
            <span>头部标题</span>
            <span>String</span>
            <span>必传</span>
            <span>空</span>
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
            <span>closeModel</span>
            <span>点击关闭时</span>
            <span>无</span>
          </p>
        </div>
      </el-card>
      <el-card>
        <div slot="header">
          <span>作用插槽</span>
        </div>
        <div class="option-items">
          <p class="option-discrp">
            <span>名称</span>
            <span>说明</span>
            <span></span>

          </p>
          <el-divider></el-divider>
          <p>
            <span>icon</span>
            <span>加在标题前面的图标</span>
            <span></span>
          </p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modelVisibel: false
    }
  },
  methods: {
    openModel () {
      this.modelVisibel = true
    },
    closeModel () {
      this.modelVisibel = false
    }
  }
}
</script>
