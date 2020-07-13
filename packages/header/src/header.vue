<template>
  <div
    :class="{'fixed': isFixed}"
    class="ic-header-container">
    <div class="ic-header-left">
      <img :src="logoSrc" alt="">
      <div class="menu_list">
        <div v-for="(item, index) in menuList" :key="index" @click="toLink(item)" :class="{'active': $route.path === item.path}" class="menu_items">{{item.name}}</div>
      </div>
    </div>
    <div class="ic-header-right">
      <!-- 个人头像 -->
      <div
        @click="userHandler"
        class="ic-user-header">
        <img :src="headerSrc" alt="">
        <p>{{userNane}}</p>
      </div>
      <!-- 消息提醒 -->
      <div
        v-if="showNotice"
        @click="noticeHandle"
        class="ic-notice-contain">
        <svg t="1592968592666" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9514" width="200" height="200"><path d="M857.21020522 739.83873539c-75.94624554 0-75.94624554-113.91936831-75.94624432-113.91936708V360.10750893a231.98125868 231.98125868 0 0 0-216.79200908-224.38663267 57.30489443 57.30489443 0 1 0-104.25348309 0 231.98125868 231.98125868 0 0 0-214.0303269 224.38663267v265.81185938C246.18814183 739.83873539 166.78979478 739.83873539 166.78979478 739.83873539a37.97312276 37.97312276 0 0 0 0 75.94624555h690.42041044a37.97312276 37.97312276 0 0 0 0-75.94624555zM512 967.67747201a113.91936831 113.91936831 0 0 0 113.91936831-110.46726679h-227.83873662A113.91936831 113.91936831 0 0 0 512 967.67747201z" fill="#7B8091" p-id="9515"></path></svg>
        <!-- 新消息提醒 -->
        <div
          v-if="hasNewNotice"
          class="ic-red-dot">
        </div>
      </div>
      <!-- 语言选择 -->
      <div
        v-if="needLanguage"
        class="ic-lang-contain"
        @click.stop="isActive = true"
        :class="[isActive ? 'active' : '']"
        >
        <div
          :class="[isActive ? 'active' : '']"
          class="ic-lang-detail">
          <svg t="1592968513818" class="icon_qiu" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9020" width="200" height="200"><path d="M511.573333 85.333333C276.053333 85.333333 85.333333 276.48 85.333333 512s190.72 426.666667 426.24 426.666667C747.52 938.666667 938.666667 747.52 938.666667 512S747.52 85.333333 511.573333 85.333333z m295.68 256h-125.866666a667.733333 667.733333 0 0 0-58.88-151.893333A342.613333 342.613333 0 0 1 807.253333 341.333333zM512 172.373333c35.413333 51.2 63.146667 107.946667 81.493333 168.96h-162.986666c18.346667-61.013333 46.08-117.76 81.493333-168.96zM181.76 597.333333C174.933333 570.026667 170.666667 541.44 170.666667 512s4.266667-58.026667 11.093333-85.333333h144.213333c-3.413333 28.16-5.973333 56.32-5.973333 85.333333s2.56 57.173333 5.973333 85.333333H181.76z m34.986667 85.333334h125.866666c13.653333 53.333333 33.28 104.533333 58.88 151.893333A340.778667 340.778667 0 0 1 216.746667 682.666667z m125.866666-341.333334H216.746667a340.778667 340.778667 0 0 1 184.746666-151.893333A667.733333 667.733333 0 0 0 342.613333 341.333333zM512 851.626667c-35.413333-51.2-63.146667-107.946667-81.493333-168.96h162.986666c-18.346667 61.013333-46.08 117.76-81.493333 168.96zM611.84 597.333333H412.16c-3.84-28.16-6.826667-56.32-6.826667-85.333333s2.986667-57.6 6.826667-85.333333h199.68c3.84 27.733333 6.826667 56.32 6.826667 85.333333s-2.986667 57.173333-6.826667 85.333333z m10.666667 237.226667c25.6-47.36 45.226667-98.56 58.88-151.893333h125.866666a342.613333 342.613333 0 0 1-184.746666 151.893333zM698.026667 597.333333c3.413333-28.16 5.973333-56.32 5.973333-85.333333s-2.56-57.173333-5.973333-85.333333h144.213333c6.826667 27.306667 11.093333 55.893333 11.093333 85.333333s-4.266667 58.026667-11.093333 85.333333h-144.213333z" p-id="9021" fill="#7B8091"></path></svg>
          <div class="linek"></div>
          <span>CN</span>
          <svg t="1592968545785" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9334" width="200" height="200"><path d="M61.99916502 240.73533329l450.63464092 563.25325678 450.63602176-563.33196471h-901.27066268z" fill="#7B8091" p-id="9335"></path></svg>
        </div>
        <div
          :class="[isActive ? 'active' : '']"
          class="ic-lang-list">
          <p
            @click.stop="changeLangHandle(item)"
            class="ic-lang-item" v-for="(item, index) in langList" :key="index">
            {{item.name}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IcHeader',
  data () {
    return {
      // 语言菜单
      langList: [
        {
          name: '简体中文',
          value: 'zh'
        },
        {
          name: 'English',
          value: 'en'
        }
      ],
      // 显示/隐藏 语言选择框
      isActive: false,
      // 展示的语言
      showLanguage: ''
    }
  },
  props: {
    isFixed: {
      type: Boolean,
      default: false,
      required: false
    },
    // logo路径
    logoSrc: {
      type: String,
      default: '',
      required: true
    },
    // 头像路径
    headerSrc: {
      type: String,
      default: '',
      required: true
    },
    // 用户名
    userNane: {
      type: String,
      default: '',
      required: false
    },
    // 菜单路径
    menuList: {
      type: Array,
      default: () => [],
      required: false
    },
    // 是否展示语言切换
    needLanguage: {
      type: Boolean,
      default: true,
      required: false
    },
    // 展示消息提醒
    showNotice: {
      type: Boolean,
      default: true,
      required: false
    },
    // 新消息提醒
    hasNewNotice: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  created () {
    this.showLanguage = sessionStorage.getItem('lang') === 'en' ? 'English' : '简体中文'
  },
  mounted () {
    document.body.addEventListener('click', function () {
      this.isActive = false
    }.bind(this))
  },
  methods: {
    /**
     * 切换中英文
     * @param {Object} data
     *  @property {string} name
     *  @property {string} value
     * @return zh/en
     */
    changeLangHandle (data) {
      this.showLanguage = data.name
      this.isActive = false
      this.$emit('changeLangHandle', data.value)
    },
    /**
     * 跳转菜单
     * @return methods
     */
    toLink (data) {
      this.$emit('toLink', data)
    },
    /**
     * 处理消息
     * @return methods
     */
    noticeHandle () {
      this.$emit('noticeHandle')
    },
    /**
     * 打开个人中心
     * @return methods
     */
    userHandler () {
      this.$emit('userHandler')
    }
  }
}
</script>

<style lang="scss">
  .ic-header-container {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    box-shadow: 0px 3px 2px 0px rgba(65, 40, 0, 0.13);
    &.fixed {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
    }
    .ic-header-left {
      display: flex;
      .menu_list {
        margin-left: 40px;
        display: flex;
        align-items: center;
        .menu_items {
          position: relative;

          margin-left: 35px;

          font-size: 14px;
          color: #2D2D2D;
          cursor: pointer;
          &:first-child {
            margin-left: 0;
          }
          &.active {
            color: #27A9D7;
            &::after {
              display: block;
              position: absolute;
              bottom: -20px;
              left: 0;

              content: '';
              width: 100%;
              height: 3px;
              border-radius: 2px;
              background-color: #27A9D7;
            }
          }
        }
      }
      img {
        height: 50px;
      }
    }
    .ic-header-right {
      display: flex;
      align-items: center;
      .ic-lang-contain {
        cursor: pointer;
        position: relative;
        margin-left: 10px;
        padding: 0 6px;
        height: 25px;
        line-height:25px;
        border: 1px solid #F2F2F2;
        box-shadow:0px 1px 1px 0px rgba(0,0,0,0.1);
        border-radius:2px;
        &.active {
          background: #F3F4F9;
          border-radius: 4px;
        }
        &::before {
          content: '';
          display: none;
          clear: both;
          border: 10px solid red;
          border-top-color: transparent;
          border-left-color: transparent;
          border-right-color: transparent;
          position: absolute;
          top: 50px;
          left: 60px;
          box-shadow: 0 4px 10px 0 rgba(0,0,0,0.20);
          transform: rotate(45deg)
        }
        &.active::before {
          display: block;
        }
        .ic-lang-detail {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #595F73;
          .linek {
            width: 1px;
            height: 25px;
            background-color: #F2F2F2;
            margin: 0 4px;
          }
          span {
            color: #7B8091;
            font-size: 12px;
            padding-right: 3px;
          }
          .icon {
            // margin-left: 5px;
            color: #7B8091;
            width: .6em;
          }
          .icon_qiu {
            width: 14.32px;
            height: 14.32px;
          }
          &.active {
            color: #1C68BA;
          }
        }
        .ic-lang-list {
          position: absolute;
          bottom: -95px;
          left: -27px;
          width: 130px;
          padding: 10px 0;
          border-radius: 4px;
          background-color: #fff;
          border: 1px solid #F3F4F9;
          border-top: none;
          box-shadow: 0 15px 20px 0 rgba(0,0,0,0.20);
          display: none;
          &.active {
            display: unset;
          }
          p {
            text-align: left;
            font-size: 14px;
            padding-left: 20px;
            padding-right: 50px;
            color: #595F73;
            height: 30px;
            line-height: 30px;
            &:hover {
              background: #F3F4F9;
            }
          }
        }
      }
      .ic-notice-contain {
        width: 25px;
        height: 25px;
        overflow: hideen;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow:0px 1px 1px 0px rgba(0,0,0,0.1);
        border-radius:2px;
        border:1px solid rgba(242,242,242,1);
        cursor: pointer;
        .icon {
          width: 1.2rem;
        }
        .ic-red-dot {
          width: 6px;
          height: 6px;
          border-radius: 4px;
          border: 1px solid #fff;
          overflow: hidden;
          background-color: #e02020;
          position: absolute;
          top: 4px;
          right: 4px;
        }
        .hover-icon {
          display: none;
        }
        &:hover {
          background: #E6E7F0;
        }
        &:hover .default-icon {
          display: none;
        }
        &:hover .hover-icon {
          display: unset;
        }
      }
      .ic-user-header {
        display: flex;
        align-items: center;
        margin-right: 10px;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 30px;
          height: 30px;
          margin-right: 5px;
          border-radius: 50%;
        }
        p {
          color: #454545;
          font-size: 14px;
          max-width: 113px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>
