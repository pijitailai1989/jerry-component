<template>
  <div class="ic-submenu">
    <div class="ic-submenu_title"
      :style="titleStyle"
      @click.stop="switchOpen"
      @mouseover="isOver = true"
      @mouseleave="isOver = false">
      <!-- icon -->
      <div class="icon_container"
        v-if="$slots.icon"
        :style="{
          marginRight: collapse ? 'unset' : '10px'
        }">
        <slot name="icon"></slot>
      </div>
      <!-- 文字 -->
      <div class="ic-menu_item_txt"
        v-if="!collapse">
        <slot name="title"></slot>
      </div>
      <!-- 菜单展开时才显示小箭头 -->
      <div class="arrow_container"
        v-if="!collapse"
        :class="isOpen ? 'rotate180' : ''">
        <svg t="1587543616878" class="icon_svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2433" width="200" height="200"><path d="M737.707 396.373a42.496 42.496 0 0 0-60.16 0L512 561.92 346.453 396.373a42.496 42.496 0 1 0-60.16 60.16l195.84 195.84a42.496 42.496 0 0 0 60.16 0l195.84-195.84c16.214-16.213 16.214-43.52-0.426-60.16z" p-id="2434" :fill="showColor"></path></svg>
      </div>
      <!-- 折叠时，鼠标滑过显示的弹层 -->
      <div v-if="showPopup"
        class="collapse_menu_item"
        :style="popupStyle">
        <IcPopup><slot name="title"></slot></IcPopup>
      </div>
    </div>
    <IcCollapseTransition>
      <div class="ic-submenu_children"
        :style="chidrenStyle"
        v-show="isOpen">
        <slot></slot>
      </div>
    </IcCollapseTransition>
  </div>
</template>

<script>
import menuMixins from './menu-mixins'
import IcCollapseTransition from '../../utils/transitions/collapse-transition'
import IcPopup from './popup.vue'
export default {
  name: 'IcSubmenu',
  mixins: [menuMixins],
  components: {
    IcCollapseTransition,
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
    titleStyle () {
      const style = {}
      if (this.isOver) {
        style.backgroundColor = this.rootMenu.hoverBackgroundColor
      }
      if (this.isActive) {
        style.backgroundColor = this.rootMenu.activeBackgroundColor
      }
      return {
        minWidth: this.rootMenu.width,
        height: this.height,
        color: this.showColor,
        // 一级菜单字体13px，非一级12px
        fontSize: this.isFirstLevel ? '13px' : '12px',
        ...style,
        ...this.paddingStyle
      }
    },
    // 子菜单展开的背景色
    chidrenStyle () {
      return {
        backgroundColor: this.rootMenu.submenuOpenBackgroundColor
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
    // 激活的索引
    activeIndex () {
      return this.rootMenu.activeIndex
    },
    // 是否展开
    collapse () {
      return this.rootMenu.collapse
    },
    // 是否只展开一个
    uniqueOpened () {
      return this.rootMenu.uniqueOpened
    },
    // 展开的菜单
    openedMenus () {
      return this.rootMenu.openedMenus || []
    },
    router () {
      return this.rootMenu.router
    },
    isOpen () {
      return this.openedMenus.includes(this.index)
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
    // 折叠时，鼠标滑过显示的弹层
    showPopup () {
      return this.isFirstLevel && this.collapse && this.isOver
    }
  },
  methods: {
    switchOpen () {
      // 如果是收起状态
      if (this.collapse) {
        this.rootMenu.switchCollapse()
        return
      }
      const parent = this.$parent
      let parentSubmenuIndex = ''
      if (parent) {
        const {
          name,
          propsData
        } = parent.$options
        if (name === 'IcSubmenu') {
          parentSubmenuIndex = propsData.index
        }
      }
      this.rootMenu.switchOpen(this.index, parentSubmenuIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
// 菜单两侧间距、图标容器(.icon_container)宽度、菜单收起后弹层(.collapse_menu_item)定位left值需计算一致
// 修改菜单两侧间距时，需要同时修改./menu-mixins.js中paddingStyle的默认padding值，以及./index.vue中menuStyle的this.collapse为真时的width值(计算规则见注释)
// 修改icon_container宽度会影响收起时的布局，具体见./index.vue中menuStyle的注释
.ic-submenu {
  user-select: none;
  // 头部
  .ic-submenu_title {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    // 子菜单前置图标
    .icon_container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 24px;
      height: 24px;
    }
    // 子菜单文字
    .ic-menu_item_txt {
      flex-grow: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
    }
    // 子菜单箭头
    .arrow_container {
      flex-shrink: 0;
      margin-left: 10px;
      width: 16px;
      height: 16px;
      transition: transform .3s;
      &.rotate180 {
        transform: rotate(180deg);
      }
      .icon_svg {
        width: 100%;
        height: 100%;
      }
    }
    // 折叠时显示的弹出层
    .collapse_menu_item {
      position: absolute;
      left: 54px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  .ic-submenu_children {
  }
  .ic-zoom-in-top-enter-active,
  .ic-zoom-in-top-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
  }
  .ic-zoom-in-top-enter,
  .ic-zoom-in-top-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>
