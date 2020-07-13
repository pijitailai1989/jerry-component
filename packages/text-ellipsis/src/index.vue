<template>
  <!-- 移动端返回头部 -->
  <div class="text-ellipsis"
    :style="{
      width
    }">
    <div class="show_text"
      ref="show_text"
      :style="txtStyle">{{text}}</div>
    <!-- 展示全部按钮容器 -->
    <div class="show_all_btn_container"
      v-if="showAllBtn">
      <span @click="switchShowAll"
        class="switch_btn"
        :class="showAll ? 'active' : ''">
        <span>{{showAll ? closeText : openText}}</span>
        <span :style="{
          display: 'inline-block',
          transform: showAll ? 'rotate(180deg)' : 'rotate(0)',
          transition: 'transform .5s'
        }">
          <svg t="1573711623377" class="icon default-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11456" width="200" height="200"><path d="M737.707 396.373a42.496 42.496 0 0 0-60.16 0L512 561.92 346.453 396.373a42.496 42.496 0 1 0-60.16 60.16l195.84 195.84a42.496 42.496 0 0 0 60.16 0l195.84-195.84c16.214-16.213 16.214-43.52-0.426-60.16z" fill="#333333" p-id="11457"></path></svg>
        </span>
      </span>
    </div>
    <!-- 辅助控制是否显示更多按钮的容器 -->
    <div class="help_txt" ref="help_txt"
      :style="{
        fontSize,
        lineHeight
      }">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'IcTextEllipsis',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    // 显示的文字
    text: {
      type: String,
      default: ''
    },
    // 几行省略
    line: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: '#A5A5A5'
    },
    fontSize: {
      type: String,
      default: '14px'
    },
    lineHeight: {
      type: String,
      default: '20px'
    },
    fontWeight: {
      type: [Number, String],
      default: 400
    },
    openText: {
      type: String,
      default: '展开'
    },
    closeText: {
      type: String,
      default: '收起'
    }
  },
  data () {
    return {
      // 是否展示全部文字
      showAll: false,
      // 是否显示展示更多按钮
      showAllBtn: false
    }
  },
  computed: {
    // 文字样式
    txtStyle () {
      const multipleRowStype = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        '-webkit-line-clamp': this.line,
        '-webkit-box-orient': 'vertical'
      }
      const singleRowStyle = {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
      let style = this.line > 1 ? multipleRowStype : singleRowStyle
      this.showAll && (style = {})
      return {
        color: this.color,
        fontSize: this.fontSize,
        lineHeight: this.lineHeight,
        fontWeight: this.fontWeight,
        ...style
      }
    }
  },
  watch: {
    text () {
      this.showAll = false
      this.showAllBtn = false
      this.$nextTick(() => {
        this.initBtnStatus()
      })
    }
  },
  mounted () {
    this.initBtnStatus()
  },
  methods: {
    // 初始化是否展示“show all”按钮
    initBtnStatus () {
      try {
        // 辅助文字容器
        const dom = this.$refs.help_txt
        // 显示文字容器——初始状态为当行省略，当初始状态辅助文字高度比默认高度高时，说明是多行
        const dom2 = this.$refs.show_text
        this.showAllBtn = dom.offsetHeight > dom2.offsetHeight
      } catch (e) {}
    },
    // 切换展示状态
    switchShowAll () {
      this.showAll = !this.showAll
    }
  }
}
</script>

<style lang="scss" scoped>
.text-ellipsis {
  position: relative;
  overflow: hidden;
  .show_all_btn_container {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    .switch_btn {
      cursor: pointer;
    }
  }
  .show_text {
    width: 100%;
    word-break: break-all;
  }
  .help_txt {
    position: absolute;
    word-break: break-all;
    width: 100%;
    z-index: -1;
  }
}
</style>
