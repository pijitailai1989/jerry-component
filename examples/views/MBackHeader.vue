<template>
  <div class="m-back_header">
    <div class="example_tip">注意：移动端组件需项目引入rem，移动端尺寸是以750px为基准，在PC上展示尺寸会偏大，请以真机为准</div>
    <div class="example_container">
      <div class="example_item">
        <MIcBackHeader v-bind="propObj">
          <span slot="right"
            @click="rightClick">icon</span>
        </MIcBackHeader>
      </div>
      <div class="example_item">
        <m-ic-back-header v-bind="propObj2"
          @search="submitSearch"
          @back="selfBack">
        </m-ic-back-header>
      </div>
    </div>
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
        <p class="option-discrp">
          <span>title</span>
          <span>标题</span>
          <span>String</span>
          <span></span>
          <span></span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>align</span>
          <span>标题位置</span>
          <span>String</span>
          <span>left, right, center</span>
          <span>center</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>color</span>
          <span>标题文字、图标颜色</span>
          <span>String</span>
          <span>有效的颜色字符串</span>
          <span>#A5A5A5</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>type</span>
          <span>头部类型(使用类型会导致slot失效)</span>
          <span>Number</span>
          <span>0 搜索</span>
          <span>-1（默认不使用）</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>placeholder</span>
          <span>type值为0时有效，搜索的提示文字</span>
          <span>String</span>
          <span></span>
          <span></span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>placeholderColor</span>
          <span>type值为0时有效，搜索的提示文字的颜色</span>
          <span>String</span>
          <span>有效的颜色字符串</span>
          <span>unset</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>height</span>
          <span>头部高度</span>
          <span>String</span>
          <span>有效的高度字符串</span>
          <span>.9rem</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>sideBlank</span>
          <span>两侧间距</span>
          <span>String</span>
          <span>有效的距离字符串</span>
          <span>.4rem</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>background</span>
          <span>头部背景</span>
          <span>String</span>
          <span>有效的背景设置</span>
          <span>unset</span>
        </p>
        <el-divider></el-divider>
      </div>
    </el-card>
    <el-card>
      <div slot="header">
        <span>插槽</span>
      </div>
      <div class="option-items">
        <p class="option-discrp">
          <span>name</span>
          <span>说明</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>right</span>
          <span>标题右侧显示的小图标等</span>
        </p>
        <el-divider></el-divider>
      </div>
    </el-card>
    <el-card>
      <div slot="header">
        <span>组件事件</span>
      </div>
      <div class="option-items">
        <p class="option-discrp">
          <span>事件名称</span>
          <span>说明</span>
          <span>回调参数</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>back</span>
          <span>自定义的返回事件</span>
          <span>(event: Event)</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>search</span>
          <span>type值为0时，点击右侧搜索按钮或者输入框内按回车触发</span>
          <span>用户输入的值</span>
        </p>
        <el-divider></el-divider>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      propObj: {
        color: '#fff',
        title: '啦啦啦啦',
        type: 1,
        height: '1rem',
        sideBlank: '.5rem',
        background: 'pink'
      },
      propObj2: {
        color: '#fff',
        title: '哈哈哈',
        type: 0,
        placeholder: '关键字',
        placeholderColor: 'pink',
        height: '.9rem',
        sideBlank: '.4rem',
        background: 'gray'
      }
    }
  },
  methods: {
    submitSearch (txt) {
      this.$message(`用户输入内容为:${txt}`)
    },
    selfBack () {
      this.$message('触发自定义返回')
    },
    rightClick () {
      this.$message('点击自定义图标')
    }
  }
}
</script>

<style lang="scss" scoped>
.m-back_header {
  .example_tip {
    color: red;
    margin-bottom: 10px;
  }
  .example_item {
    display: inline-block;
    width: 300px;
    margin-right: 20px;
  }
}
</style>
