<template>
  <div class="ic-menu_item"
    :style="containerStyle"
    @click.stop="selectMenu"
    @mouseover="isOver = true"
    @mouseleave="isOver = false">
    <div class="icon_container"
      :style="{
        marginRight: collapse ? 'unset' : '10px'
      }"
      v-if="$slots.icon">
      <slot name="icon"></slot>
    </div>
    <!-- 折叠时，鼠标滑过显示的弹层 -->
    <div v-if="showPopup"
      class="collapse_menu_item"
      :style="popupStyle">
      <IcPopup><slot></slot></IcPopup>
    </div>
    <!-- 未折叠时显示 -->
    <div v-if="!collapse"
      class="ic-menu_item_txt">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import menuMixins from './menu-mixins'
import IcPopup from './popup.vue'
export default {
  name: 'IcMenuItem',
  mixins: [menuMixins],
  components: {
    IcPopup
  },
  props: {
    // 唯一标识
    index: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: '40px'
    }
  },
  data () {
    return {
      // 是否鼠标滑过
      isOver: false
    }
  },
  computed: {
    // 菜单项容器样式
    containerStyle () {
      const style = {}
      if (this.isOver) {
        style.backgroundColor = this.rootMenu.hoverBackgroundColor
      }
      if (this.isActive) {
        style.backgroundColor = this.rootMenu.activeBackgroundColor
      }
      return {
        height: this.height,
        color: this.showColor,
        // 一级菜单字体13px，非一级12px
        fontSize: this.isFirstLevel ? '13px' : '12px',
        ...style,
        ...this.paddingStyle
      }
    },
    // 菜单收起时，鼠标滑过显示的弹出层样式
    popupStyle () {
      return {
        zIndex: this.rootMenu.zIndex
      }
    },
    isActive () {
      return this.index === this.activeIndex
    },
    // 展示的文字颜色
    showColor () {
      return this.isActive ? this.activeTextColor : this.textColor
    },
    textColor () {
      return this.rootMenu.textColor
    },
    activeTextColor () {
      return this.rootMenu.activeTextColor
    },
    activeIndex () {
      return this.rootMenu.activeIndex
    },
    // 是否是第一级
    isFirstLevel () {
      let isFirstLevel = true
      let parent = this.$parent
      while (parent && parent !== this.rootMenu) {
        if (['IcSubmenu'].indexOf(parent.$options.name) > -1) {
          isFirstLevel = false
          break
        } else {
          parent = parent.$parent
        }
      }
      return isFirstLevel
    },
    collapse () {
      return this.rootMenu.collapse
    },
    // 折叠时，鼠标滑过显示的弹层
    showPopup () {
      return this.isFirstLevel && this.collapse && this.isOver
    }
  },
  methods: {
    // 菜单选中
    selectMenu () {
      this.rootMenu.selectMenu(this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
// 菜单两侧间距、图标容器(.icon_container)宽度、菜单收起后弹层(.collapse_menu_item)定位left值需计算一致
// 修改菜单两侧间距时，需要同时修改./menu-mixins.js中paddingStyle的默认padding值，以及./index.vue中menuStyle的this.collapse为真时的width值(计算规则见注释)
// 修改icon_container宽度会影响收起时的布局，具体见./index.vue中menuStyle的注释
.ic-menu_item {
  user-select: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-weight: bold;
  overflow: visible;
  // 图标容器
  .icon_container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }
  // 未折叠时显示的文字
  .ic-menu_item_txt {
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  // 折叠时显示的弹出层
  .collapse_menu_item {
    position: absolute;
    left: 54px;
    top: 50%;
    transform: translate(0, -50%);
  }
}
</style>
