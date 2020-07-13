<template>
  <div>
    <ic-header
      :headerSrc="header"
      :menuList="menu"
      :logoSrc="logo"></ic-header>
    <ic-header
      :hasNewNotice="true"
      :headerSrc="header"
      userNane="我的名字很长很优秀"
      :logoSrc="logo"></ic-header>
    <ic-header
      :showNotice="false"
      :hasNewNotice="true"
      :headerSrc="header"
      :logoSrc="logo"></ic-header>
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
            <span>LogoSrc</span>
            <span>Logo路径</span>
            <span>String</span>
            <span>必传</span>
            <span>空</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>userNane</span>
            <span>用户名</span>
            <span>String</span>
            <span>不必传</span>
            <span>空</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>headerSrc</span>
            <span>用户头像路径</span>
            <span>String</span>
            <span>必传</span>
            <span>空</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>needLanguage</span>
            <span>是否展示语言国际化</span>
            <span>Boolean</span>
            <span>true / false</span>
            <span>true</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>showNotice</span>
            <span>是否展示消息提醒</span>
            <span>Boolean</span>
            <span>true / false</span>
            <span>true</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>hasNewNotice</span>
            <span>新消息提醒</span>
            <span>Boolean</span>
            <span>true / false</span>
            <span>false</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>menuList</span>
            <span>菜单路径</span>
            <span>Array</span>
            <span>true / false</span>
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
            <span>changeLangHandle</span>
            <span>语言切换时触发</span>
            <span>语言数据</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>noticeHandle</span>
            <span>点击消息通知时触发</span>
            <span>---</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>userHandler</span>
            <span>点击用户头像时触发</span>
            <span>---</span>
          </p>
          <el-divider></el-divider>
          <p>
            <span>toLink</span>
            <span>点击头部菜单时触发</span>
            <span>路由参数</span>
          </p>
        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
import logo from '../assets/image/NCIC.png'
import header from '../assets/image/default-header.png'
export default {
  data () {
    return {
      msg: '头部',
      logo,
      header,
      menu: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '常见问题',
          path: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .ic-header-container {
    margin-top: 10px;
  }
</style>
