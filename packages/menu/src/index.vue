<script type="text/jsx">
import { addClass, removeClass, hasClass } from '../../utils/dom'
export default {
  name: 'IcMenu',
  render (h) {
    const component = (
      <div class={{
        'ic-menu--collapse': this.collapse,
        'ic-menu': true
      }}
      style={this.menuStyle}>
        { /* 展开收起图标 */ }
        { this.needCollapse &&
          (<div class={{
            collapse_container: true,
            rotate180: this.collapse
          }}
          onClick={ this.switchCollapse }
          onMouseover={ () => { this.isOver = true } }
          onMouseleave={ () => { this.isOver = false } }>
            <svg t="1587959050265" class="svg_icon" viewBox="0 0 1408 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2673" width="200" height="200"><path d="M1153.25 84.1625L734.075 455.1875a74.475 74.475 0 0 0 0 113.625L1153.25 939.8375a92.1375 92.1375 0 0 0 119.8125 0 74.475 74.475 0 0 0 0-113.625L918.125 512l355.1625-314.2125a74.475 74.475 0 0 0 0-113.625 92.1375 92.1375 0 0 0-119.8125 0z m-645.525 0L88.325 455.1875a74.475 74.475 0 0 0 0 113.625l419.4 371.025a92.1375 92.1375 0 0 0 119.8125 0 74.475 74.475 0 0 0 0-113.625L272.375 512l355.1625-314.2125a74.475 74.475 0 0 0 0-113.625 92.1375 92.1375 0 0 0-119.8125 0z" fill={ this.isOver ? '#fff' : '#C7C7C7' } p-id="2674"></path></svg>
          </div>)
        }
        { /* 菜单内容——设置overflow是因为:收起后，如果不设置overflow:visible，子菜单的鼠标滑过弹窗无法显示 */ }
        <div class="ic-menu_inner ic-scroll_bar"
          style={{ overflow: this.collapse ? 'visible' : 'visible auto' }}>
          { this.$slots.default }
        </div>
      </div>
    )
    if (this.collapseTransition) {
      return <ic-menu-collapse-transition>{ component }</ic-menu-collapse-transition>
    }
    return component
  },
  components: {
    'ic-menu-collapse-transition': {
      functional: true,
      render (createElement, context) {
        const data = {
          props: {
            mode: 'out-in'
          },
          on: {
            beforeEnter (el) {
              el.style.opacity = 0.2
            },

            enter (el) {
              addClass(el, 'ic-opacity-transition')
              el.style.opacity = 1
            },

            afterEnter (el) {
              removeClass(el, 'ic-opacity-transition')
              el.style.opacity = ''
            },

            beforeLeave (el) {
              if (!el.dataset) el.dataset = {}

              if (hasClass(el, 'ic-menu--collapse')) {
                removeClass(el, 'ic-menu--collapse')
                el.dataset.oldOverflow = el.style.overflow
                el.dataset.scrollWidth = el.clientWidth
                addClass(el, 'ic-menu--collapse')
              } else {
                addClass(el, 'ic-menu--collapse')
                el.dataset.oldOverflow = el.style.overflow
                el.dataset.scrollWidth = el.clientWidth
                removeClass(el, 'ic-menu--collapse')
              }

              el.style.width = el.scrollWidth + 'px'
              el.style.overflow = 'hidden'
            },

            leave (el) {
              addClass(el, 'horizontal-collapse-transition')
              el.style.width = el.dataset.scrollWidth + 'px'
            }
          }
        }
        return createElement('transition', data, context.children)
      }
    }
  },
  props: {
    // 宽度，单位px
    width: {
      type: Number,
      default: 250
    },
    // 上下间距
    blank: {
      type: String,
      default: '30px'
    },
    // 整个菜单的背景色
    backgroundColor: {
      type: String,
      default: '#114781'
    },
    // 鼠标划过的背景色
    hoverBackgroundColor: {
      type: String,
      default: '#406B9A'
    },
    // 默认文字颜色
    textColor: {
      type: String,
      default: '#fff'
    },
    // 激活菜单文字颜色
    activeTextColor: {
      type: String,
      default: '#114781'
    },
    // 激活菜单背景色
    activeBackgroundColor: {
      type: String,
      default: '#fff'
    },
    // 子菜单打开的背景色
    submenuOpenBackgroundColor: {
      type: String,
      default: '#0B3C70'
    },
    // 当前激活菜单的 index
    defaultActive: {
      type: String,
      default: ''
    },
    // 当前展开的子菜单(sub-menu) 的 index 的数组
    defaultOpeneds: {
      type: Array,
      default () {
        return []
      }
    },
    // 是否只保持一个子菜单的展开
    uniqueOpened: {
      type: Boolean,
      default: false
    },
    // 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
    router: {
      type: Boolean,
      default: false
    },
    // 是否需要显示水平折叠按钮
    needCollapse: {
      type: Boolean,
      default: true
    },
    // 是否需要折叠动画
    collapseTransition: {
      type: Boolean,
      default: true
    },
    // 菜单折叠时，鼠标滑过弹出层的层叠顺序
    zIndex: {
      type: Number,
      default: 999
    }
  },
  data () {
    return {
      // 是否水平折叠收起菜单——需要折叠按钮时才计算，否则一直不折叠
      collapse: false,
      // 鼠标是否移上展开切换图标
      isOver: false,
      activeIndex: '',
      // 收起前展开的二级菜单
      beforeCollapseOpenedMenus: [],
      // 当前展开的菜单
      openedMenus: []
    }
  },
  computed: {
    // 菜单容器样式
    menuStyle () {
      // 收起的宽度54px = 两侧padding(15px+15px) + icon宽度(24px)
      return {
        width: this.collapse ? '54px' : `${this.width}px`,
        backgroundColor: this.backgroundColor,
        color: this.textColor,
        padding: `${this.blank} 0`
      }
    }
  },
  // 插件
  provide () {
    return {
      rootMenu: this
    }
  },
  created () {
    this.activeIndex = this.defaultActive
  },
  mounted () {
    let collapse = false
    // 需要折叠按钮时才计算，否则一直不折叠
    if (this.needCollapse) {
      collapse = window.innerWidth < 1200
    }
    // 是否收起
    this.collapse = collapse
    this.openedMenus = collapse ? [] : this.defaultOpeneds.slice(0)
    this.beforeCollapseOpenedMenus = this.defaultOpeneds.slice(0)
  },
  methods: {
    /**
     * @description: 切换是否水平收起
     * @param  null
     * @return {null}
     */
    switchCollapse () {
      this.collapse = !this.collapse
      this.openedMenus = this.collapse ? [] : this.beforeCollapseOpenedMenus
    },
    /**
     * @description: 点击子菜单切换打开关闭
     * @param {string} index 点击submenu的index（唯一标识）
     * @param {string} parentSubmenuIndex 点击submenu的父submenu的index（唯一标识）
     * @return {null}
     */
    switchOpen (index, parentSubmenuIndex) {
      const openedMenus = this.openedMenus
      if (this.uniqueOpened) {
        // 只展开一个
        // 有父submenu,父submenu肯定是展开状态
        const ind = openedMenus.indexOf(index)
        if (parentSubmenuIndex) {
          ind > -1 ? openedMenus.splice(ind, 1) : openedMenus.push(index)
          this.openedMenus = openedMenus
        } else {
          // 无父submenu
          this.openedMenus = ind > -1 ? [] : [index]
        }
      } else {
        // 展开多个
        const ind = this.openedMenus.indexOf(index)
        ind > -1 ? this.openedMenus.splice(ind, 1) : this.openedMenus.push(index)
      }
      this.beforeCollapseOpenedMenus = this.openedMenus
    },
    /**
     * @description: 选择某一个菜单
     * @param {string} index 这个菜单的index（唯一标识）
     * @return {null}
     */
    selectMenu (index) {
      this.activeIndex = index
      this.router && this.$router.push(index)
      this.$listeners.select && this.$emit('select', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.ic-menu {
  position: relative;
  height: 100%;
  transition: width .4s;
  i {
    color: inherit;
    font-size: inherit;
  }
  &:hover {
    .collapse_container {
      display: flex;
    }
  }
  // 展开收起图标样式
  .collapse_container {
    cursor: pointer;
    display: none;
    position: absolute;
    top: 6px;
    right: -9px;
    justify-content: center;
    align-items: center;

    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow:0px 1px 2px 0px rgba(0,0,0,0.2);
    transition: transform .3s;
    &:hover {
      background-color: #0094DA;
    }
    &.rotate180 {
      transform: rotate(180deg);
    }
    .svg_icon {
      width: 8px;
      height: 6px;
    }
  }
  .ic-menu_inner {
    height: 100%;
  }
  .ic-opacity-transition  {
    transition: opacity .3s cubic-bezier(.55,0,.1,1);
  }
  .collapse-transition {
    transition: 0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
  }
  .horizontal-collapse-transition {
    transition: 0.3s width ease-in-out, 0.3s padding-left ease-in-out, 0.3s padding-right ease-in-out;
  }
}
</style>
