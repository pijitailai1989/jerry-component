<template>
  <div class="text_ellipsis">
    <div class="example_container">
      <div class="example_item">
        <ic-text-ellipsis v-bind="propObj"></ic-text-ellipsis>
      </div>
      <div class="example_item">
        <IcTextEllipsis v-bind="propObj2"></IcTextEllipsis>
      </div>
      <div class="example_item">
        <IcTextEllipsis v-bind="propObj3"></IcTextEllipsis>
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
          <span>width</span>
          <span>组件宽度</span>
          <span>Number</span>
          <span>有效的宽度字符串</span>
          <span>100%</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>text</span>
          <span>显示的文字</span>
          <span>String</span>
          <span></span>
          <span></span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>line</span>
          <span>几行省略</span>
          <span>Number</span>
          <span>正整数</span>
          <span>1</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>color</span>
          <span>文字颜色</span>
          <span>String</span>
          <span>有效的颜色字符串</span>
          <span>#A5A5A5</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>fontSize</span>
          <span>字体大小</span>
          <span>String</span>
          <span>有效的字体大小字符串</span>
          <span>14px</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>lineHeight</span>
          <span>行高</span>
          <span>String</span>
          <span>有效的行高大小字符串</span>
          <span>20px</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>fontWeight</span>
          <span>字重</span>
          <span>Number, String</span>
          <span>有效的字体字重值或字重字符串</span>
          <span></span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>openText</span>
          <span>展开按钮文字</span>
          <span>String</span>
          <span></span>
          <span>展开</span>
        </p>
        <el-divider></el-divider>
        <p class="option-discrp">
          <span>closeText</span>
          <span>闭合按钮文字</span>
          <span>String</span>
          <span></span>
          <span>收起</span>
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
        width: '300px',
        text: '点击考试的十几块打发时间看对方水电费水电费数据库地方数阿萨德了看见爱上考虑考虑； 库的教科书',
        line: 1,
        color: '#666',
        fontSize: '18px',
        lineHeight: '30px',
        fontWeight: 'bold'
      },
      propObj2: {
        width: '300px',
        text: '点击考试的十几块打发时间看对方水电费水电费数据库地方数阿萨德了看见爱上考虑考虑； 库的教科书',
        line: 2,
        color: 'pink',
        fontSize: '16px',
        lineHeight: '32px',
        fontWeight: 500,
        openText: '展开的文字2',
        closeText: '闭合的文字2'
      },
      propObj3: {
        width: '300px',
        text: '点击考试的十几块打发时间看对方水电费水电费数据库地方数阿萨德了看见爱上考虑考虑； 库的教科书',
        line: 3,
        color: 'blue',
        fontSize: '14px',
        lineHeight: '28px',
        fontWeight: 300,
        openText: '展开的文字3',
        closeText: '闭合的文字3'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text_ellipsis {
  .example_container {
    min-height: 120px;
  }
  .example_item {
    display: inline-block;
    margin-right: 20px;
  }
}
</style>
