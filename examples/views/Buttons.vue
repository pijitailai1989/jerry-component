<template>
   <div class="ic-buttonss">
      <h1>【组件展示】</h1>
      <h5>基本按钮</h5>

      <div class="container">
        <p>默认按钮：高度25，左右间距15，圆角半径4，字号13</p>
        <div class="btn-group">
          <div class="link">
            <p class="tips">1、正常</p>
            <ic-button @onClick="test" color="blue">蓝色</ic-button>

            <ic-button color="orange">橙色</ic-button>

            <ic-button color="green">绿色</ic-button>

            <ic-button color="yellow">黄色</ic-button>

            <ic-button color="red">红色</ic-button>
          </div>
          <div class="link">
            <p class="tips">2、禁用</p>

            <ic-button disabled color="blue">蓝色</ic-button>

            <ic-button disabled color="orange">橙色</ic-button>

            <ic-button disabled color="yellow">黄色</ic-button>

            <ic-button disabled color="green">绿色</ic-button>

            <ic-button disabled color="red">红色</ic-button>
          </div>

          <div class="link">
            <p class="tips">3、正常</p>

            <ic-button plain color="blue" >蓝色</ic-button>

            <ic-button plain color="orange" >橙色</ic-button>

            <ic-button plain color="green" >绿色</ic-button>

            <ic-button plain color="yellow" >黄色</ic-button>

            <ic-button plain color="red" >红色</ic-button>
          </div>

          <div class="link">
            <p class="tips">4、禁用</p>

            <ic-button plain disabled color="blue" >蓝色</ic-button>

            <ic-button plain disabled color="orange" >橙色</ic-button>

            <ic-button plain disabled color="yellow">黄色</ic-button>

            <ic-button plain disabled color="green" >绿色</ic-button>

            <ic-button plain disabled color="red" >红色</ic-button>
          </div>

          <div class="link">
            <p class="tips">5、正常</p>
            <ic-button> 灰空 </ic-button>
            <ic-button plain> 灰满 </ic-button>
            <ic-button plain icon="iconjiazaizhong" color="blue">图标</ic-button>
            <ic-button icon="iconjiazaizhong" animation>转动的图标</ic-button>
            <ic-button plain icon="iconjiazaizhong" color="red" animation>转动的图标</ic-button>
          </div>

          <div class="link">
            <p class="tips">6、禁用</p>
            <ic-button disabled >灰空</ic-button>
            <ic-button disabled plain>灰满</ic-button>
            <ic-button disabled icon="iconjiazaizhong" color="blue">图标</ic-button>
            <ic-button disabled animation icon="iconjiazaizhong">转动的图标</ic-button>
            <ic-button disabled animation icon="iconjiazaizhong"  color="red">转动的图标</ic-button>
          </div>

          <div class="link">
            <p class="tips">7、正常</p>
            <ic-button type="text"> 文本 </ic-button>
            <ic-button color="orange" type="text"> 文本 </ic-button>
            <ic-button color="yellow" type="text"> 文本 </ic-button>
            <ic-button color="green" type="text"> 文本 </ic-button>
            <ic-button color="red" type="text"> 文本 </ic-button>
            <ic-button color="blue" type="text"> 文本 </ic-button>
          </div>

          <div class="link">
            <p class="tips">8、禁用</p>
            <ic-button disabled type="text"> 文本 </ic-button>
            <ic-button disabled color="orange" type="text"> 文本 </ic-button>
            <ic-button disabled color="yellow" type="text"> 文本 </ic-button>
            <ic-button disabled color="green" type="text"> 文本 </ic-button>
            <ic-button disabled color="red" type="text"> 文本 </ic-button>
            <ic-button disabled color="blue" type="text"> 文本 </ic-button>
          </div>

          <div class="link">
            <p class="tips">9、正常</p>
            <ic-button type="icon" icon="iconbi"></ic-button>
            <ic-button type="icon" icon="iconbi" color='blue'></ic-button>
            <ic-button type="icon" icon="iconbi" color='red'></ic-button>
            <ic-button type="icon" icon="iconbi" color='green'></ic-button>
            <ic-button type="icon" icon="iconbi" color='yellow'></ic-button>
            <ic-button type="icon" icon="iconbi" color='orange'></ic-button>
          </div>

          <div class="link">
            <p class="tips">10、禁用</p>
            <ic-button disabled type="icon" icon="iconbi"></ic-button>
            <ic-button disabled type="icon" icon="iconbi" color='blue'></ic-button>
            <ic-button disabled type="icon" icon="iconbi" color='red'></ic-button>
            <ic-button disabled type="icon" icon="iconbi" color='green'></ic-button>
            <ic-button disabled type="icon" icon="iconbi" color='yellow'></ic-button>
            <ic-button disabled type="icon" icon="iconbi" color='orange'></ic-button>
          </div>

        </div>
      </div>

      <div class="container">
        <p>小按钮：高度20，左右间距10，圆角半径4，字号12</p>
        <div class="btn-group">
          <ic-button size="mini" color="blue"> 小按钮 </ic-button>

          <ic-button size="mini" color="blue" plain> 小按钮 </ic-button>

          <ic-button size="mini" plain> 小按钮 </ic-button>

          <ic-button size="mini"> 小按钮 </ic-button>

        </div>
      </div>

      <div class="container">
        <p>中按钮：高度25，左右间距15，圆角半径4，字号13</p>
        <div class="btn-group">
          <ic-button size="medium" color="red"> 中按钮 </ic-button>

          <ic-button size="medium" color="red" plain> 中按钮 </ic-button>

          <ic-button size="medium" plain> 中按钮 </ic-button>

          <ic-button  size="medium"> 中按钮 </ic-button>

        </div>
      </div>

      <div class="container">
        <p>大按钮：高度30，左右间距15，圆角半径4，字号14</p>
        <div class="btn-group">
          <ic-button size="big" color="green"> 大按钮 </ic-button>

          <ic-button  size="big" color="green" plain> 大按钮 </ic-button>

          <ic-button  size="big" plain> 大按钮 </ic-button>

          <ic-button  size="big"> 大按钮 </ic-button>

        </div>
      </div>

      <div class="container">
        <p>有图标的按钮，间距5</p>
        <div class="btn-group">
          <ic-button color="yellow" icon="iconjiazaizhong" size="mini"> 图标按钮 </ic-button>

          <ic-button color="blue" icon="iconshanchu" size="mini"> 图标按钮 </ic-button>

          <ic-button color="red" icon="iconnotes-px" size="medium"> 图标按钮 </ic-button>

          <ic-button color="green" icon="iconnotifications-px"  size="big"> 图标按钮 </ic-button>

        </div>
      </div>

      <div class="container">
        <p>禁用状态</p>
        <div class="btn-group">
          <ic-button disabled color="yellow" icon="iconjiazaizhong" size="mini"> 禁用按钮 </ic-button>

          <ic-button disabled plain color="blue" size="mini"> 禁用按钮 </ic-button>

          <ic-button disabled color="red" icon="iconnotes-px" size="medium"> 禁用按钮 </ic-button>

          <ic-button disabled color="green"  size="big"> 禁用按钮 </ic-button>

        </div>
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
            <span>type</span>
            <span>按钮类型</span>
            <span>String</span>
            <span>default/text/icon</span>
            <span>default</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>size</span>
            <span>尺寸</span>
            <span>String</span>
            <span>big/medium/mini</span>
            <span>medium</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>color</span>
            <span>按钮颜色</span>
            <span>String</span>
            <span>orange/yellow/green/red/blue</span>
            <span>——</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>icon</span>
            <span>图标类名</span>
            <span>String</span>
            <span></span>
            <span>——</span>
          </p>
           <el-divider></el-divider>
          <p>
            <span>plain</span>
            <span>是否空心按钮</span>
            <span>Boolean</span>
            <span>true/false</span>
            <span>false</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>disabled</span>
            <span>是否禁用</span>
            <span>Boolean</span>
            <span>true/false</span>
            <span>false</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>animation</span>
            <span>图标动画</span>
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
            <span>onClick</span>
            <span>点击事件</span>
            <span>event</span>
          </p>
        </div>
      </el-card>
    </div>
   </div>
</template>

<script>
// import { mapGetters } from "vuex';"
export default {
  name: 'aa',
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
    test (event) {
      // console.log('我被点了')
    }
  },
  beforeDestroy () {}
}
</script>
<style lang="scss" scoped>
.ic-buttonss {
  h1 {
    font-size:20px;
    color:rgba(51,57,78,1);
  }
  h5 {
    margin-top: 14px;
    font-size:16px;
    color:rgba(141,141,141,1);
    padding-left: 8px;
  }
  .container {
    margin-top: 14px;
    padding-left: 8px;
    p {
      font-size:13px;
      color:rgba(51,57,78,1);
    }
    .btn-group {
      display:flex;
      align-items: center;
      background-color: #ffffff;
      flex-wrap: wrap;
      margin-top: 10px;
      padding:  10px 20px;
      padding-bottom: 20px;
      .ic-buttons {
        margin-right: 6px;
      }
      .link {
        width: 100%;
        display:flex;
        align-items: center;
        margin-top: 10px;
        .tips {
          padding-right: 20px;
          color: #06f52d;
        }
      }
      .link:nth-child(even) {
        .tips {
          color: red;
        }
      }
    }
  }
}
</style>
