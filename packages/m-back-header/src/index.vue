<template>
  <!-- 移动端返回头部 -->
  <div class="m-back_header"
    :style="containerStyle">
    <div class="back_btn_container"
      :style="{
        height,
        lineHeight: height
      }"
      @click="back">
      <svg t="1587375008525" class="icon svg_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2303" width="200" height="200"><path d="M272 507.8c-0.6-15.36 5.16-31.8 17.28-44.52L658.82 80.24C680 58.04 712.4 55.82 731 75.2c18.6 19.44 16.44 53.16-4.8 75.42l-344.58 357 352.8 365.7c21.36 22.26 23.4 56.04 4.8 75.42-18.6 19.44-50.94 17.22-72.18-4.98L289.34 552.08A61.74 61.74 0 0 1 272 507.8z" p-id="2304" data-spm-anchor-id="a313x.7781069.0.i2" class="selected" :fill="color"></path></svg>
    </div>
    <div class="title_container">
      <!-- 搜索头部 -->
      <div class="header_search_container"
        v-if="type === 0">
        <div class="search_inp_container">
          <input type="text"
            ref="inp"
            class="search_inp"
            :style="searchInputStyle"
            v-model="searchTxt"
            @compositionstart="startInp"
            @compositionend="endInp"
            @keyup.enter="submitSearch">
          <div class="search_inp_placeholder"
            :style="placeholderStyle"
            v-show="!searchTxt && !inputing"
            @click.stop="searchInputFocus">{{placeholder}}</div>
        </div>
        <!-- 如果支持自定义placeholder颜色，需要写虚拟placeholder，用其他元素模拟，因为伪类没办法动态设置颜色设置 -->
        <div @click.stop="submitSearch">
          <svg t="1587377830101" class="icon svg_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2454" width="200" height="200"><path d="M894.41127002 843.68935039L731.8246792 679.44154678c47.59386943-59.09278183 76.27815703-134.03008828 76.27815703-215.64284853 0-189.86523487-154.40920576-344.30773711-344.21144766-344.30773711-189.8031419 0-344.14845557 154.44250224-344.14845556 344.3077371 0 189.86613487 154.34531367 344.33923359 344.14845556 344.33923447 82.60264864 0 158.36966279-29.29081904 217.78370772-77.9393707l162.01245498 163.70426513c6.96252041 7.06060898 16.16218945 10.6053126 25.36275938 10.60531172a35.5613168 35.5613168 0 0 0 25.1053875-10.34884071c13.99073291-13.86384698 14.11851885-36.47921396 0.25557187-50.46994776zM191.10134023 463.79869824c0-150.48114609 122.34039786-272.9160334 272.78914834-272.9160334 150.44874961 0 272.85214043 122.43578731 272.85214044 272.9160334 0 150.48114609-122.40429083 272.94842989-272.85214044 272.94842988-150.44874961 0-272.78914747-122.46728379-272.78914834-272.94842988z" :fill="color" p-id="2455"></path></svg>
        </div>
      </div>
      <slot v-else-if="this.$slots.default"></slot>
      <div v-else
        class="default_title">
        <div class="title_text"
          :style="{
            justifyContent: titlePosition
          }">{{title}}</div>
        <div class="right_icon">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MIcBackHeader',
  props: {
    // 可用值： left right center
    align: {
      type: String,
      default: 'center'
    },
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#A5A5A5'
    },
    // 类型 0 搜索头部
    type: {
      type: Number,
      default: -1
    },
    placeholder: {
      type: String,
      default: '请输入搜索关键字'
    },
    // 如果支持自定义placeholder颜色，需要写虚拟placeholder，用其他元素模拟，因为伪类没办法动态设置颜色设置
    placeholderColor: {
      type: String,
      default: 'unset'
    },
    height: {
      type: String,
      default: '.9rem'
    },
    sideBlank: {
      type: String,
      default: '.4rem'
    },
    background: {
      type: String,
      default: 'unset'
    }
  },
  data () {
    return {
      // 有效的类型
      effectiveType: [0],
      // 搜索的文字
      searchTxt: '',
      // 中文正在输入中
      inputing: false
    }
  },
  computed: {
    // 容器样式
    containerStyle () {
      return {
        paddingLeft: this.sideBlank,
        paddingRight: this.sideBlank,
        height: this.height,
        lineHeight: this.height,
        color: this.color,
        background: this.background
      }
    },
    // 标题文字的位置
    titlePosition () {
      let ret = ''
      switch (this.align) {
        case 'left':
          ret = 'flex-start'
          break
        case 'reight':
          ret = 'flex-end'
          break
        default:
          ret = 'center'
      }
      return ret
    },
    // 搜索输入框的样式
    searchInputStyle () {
      return {
        color: this.color
      }
    },
    // 提示文字的颜色
    placeholderStyle () {
      return {
        color: this.placeholderColor
      }
    }
  },
  methods: {
    // 点击模拟的placeholder,搜索输入框聚焦
    searchInputFocus () {
      const dom = this.$refs.inp
      dom && dom.focus()
    },
    startInp () {
      this.inputing = true
    },
    endInp () {
      this.inputing = false
    },
    back (event) {
      this.$listeners.back ? this.$emit('back', event) : this.$router.back()
    },
    submitSearch () {
      this.$emit('search', this.searchTxt)
    }
  }
}
</script>

<style lang="scss" scoped>
.m-back_header {
  position: relative;
  display: flex;
  align-items: center;

  .svg_icon {
    font-size: .28rem;
  }
  .back_btn_container {
    margin-right: .1rem;
    flex-shrink: 0;
    width: .45rem;
    text-align: center;
  }
  .title_container {
    flex-grow: 1;
    // 搜索样式
    .header_search_container {
      display: flex;
      justify-content: space-between;
      .search_inp_container {
        position: relative;
        flex-grow: 1;
        margin-right: .2rem;
        .search_inp {
          background-color: inherit;
          position: relative;
          z-index: 1;
        }
        .search_inp_placeholder {
          user-select: none;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          display: flex;
          align-items: center;
        }
      }
    }
    // 显示默认title的样式
    .default_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .title_text {
        display: flex;
        flex-grow: 1;
      }
      .right_icon {
        user-select: none;
        flex-shrink: 0;
        margin-left: .1rem;
        width: .45rem;
        flex-shrink: 0;
        text-align: center;
      }
    }
  }
}
</style>
