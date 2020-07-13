<template>
  <div class="public_pagination no-copy" :class="isREM ? 'rem_pages': ''">
    <span class="pagination_total pagination_txt">
      {{lang === 'zh' ? commonTipsZh:commonTipsEn}} {{' '  + total + ' '}} {{lang === 'zh' ? totalTipsZh:totalTipsEn}}
    </span>
    <span class="pagination_page pagination_txt">
      {{currentPage}}/{{totalPage}} {{lang === 'zh' ? pagesTipsZh:pagesTipsEn}}
    </span>

    <!-- 上一页 -->
    <a href="javascript:;" class="pagination_btn prev_btn"
      :class="{
        'is_disabled': currentPage <= 1
      }"
      :disabled="currentPage <= 1"
      @click="prev">
      <img class="icon_img" :src="arrowLeft" alt="">
    </a>

    <!-- 下一页 -->
    <a href="javascript:;" class="pagination_btn next_btn"
      :class="{
        'is_disabled': !(currentPage < totalPage)
      }"
      :disabled="currentPage === totalPage"
      @click="next">
      <img class="icon_img" :src="arrowRight" alt="">
    </a>
    <span class="pagination_txt">{{lang === 'zh' ? jumpTipsZh:jumpTipsEn}}</span>

    <!-- 输入页码 -->
    <input type="text" class="page_inp" v-model="page" @blur="pageBlur" @keyup.enter="pageEnter">

    <!-- GO -->
    <div class="pagination_btn switch_page_btn"
      @click="goPage">GO</div>
  </div>
</template>

<script>
// 向左箭头
import arrowLeft from '../image/arrow-left.png'
// 向右箭头
import arrowRight from '../image/arrow-right.png'

import Cookies from 'js-cookie'

export default {
  name: 'IcPagination',
  props: {
    // 当前页
    current: {
      type: Number,
      default: 0
    },
    // 数据总数
    total: {
      type: Number,
      default: 0
    },
    // 每页条数
    size: {
      type: Number,
      default: 10
    },
    // 是否启用rem布局
    isREM: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      lang: Cookies.get('lang') || 'zh',
      page: '',
      arrowLeft,
      arrowRight,
      // isREM: false, // 是否rem布局
      commonTipsZh: '共',
      commonTipsEn: 'common',
      totalTipsZh: '条',
      totalTipsEn: 'total',
      pagesTipsZh: '页',
      pagesTipsEn: 'page',
      jumpTipsZh: '跳转到',
      jumpTipsEn: 'Jump to'
    }
  },
  components: { },
  created () {
    // let html = document.getElementsByTagName('html')
    // let htmlSize = parseInt(html[0].style.fontSize)
    // if (!isNaN(htmlSize) && htmlSize > 30) {
    //   this.isREM = true
    // }
  },
  mounted () {},
  computed: {
    currentPage () {
      return this.current
    },
    totalPage () {
      return Math.ceil(this.total / this.size)
    }
  },
  watch: {},
  methods: {
    // 页数输入框失去焦点
    pageBlur () {
      // if (this.page === '') return
      const page = Number(this.page)
      if (isNaN(page)) {
        this.page = 1
      } else if (page < 1) {
        this.page = 1
      } else if (page > this.totalPage) {
        this.page = this.totalPage
      }
    },
    // 在页数输入框按回撤
    pageEnter () {
      this.pageBlur()
      this.goPage(Number(this.page), undefined)
    },
    prev () {
      if (this.currentPage > 1) {
        this.goPage(this.currentPage - 1, true)
      }
    },
    next () {
      if (this.currentPage < this.totalPage) {
        this.goPage(this.currentPage + 1, false)
      }
    },
    goPage (page, data) {
      if (!this.page) {
        this.page = 1
      }
      this.$emit('goClick', typeof (page) === 'number' ? page : Number(this.page), data)
    }
  },
  beforeDestroy () {}
}
</script>
<style lang="scss" scoped>
// 禁止复制粘贴
.no-copy {
  -moz-user-select:none; /* Firefox私有属性 */
  -webkit-user-select:none; /* WebKit内核私有属性 */
  -ms-user-select:none; /* IE私有属性(IE10及以后) */
  -khtml-user-select:none; /* KHTML内核私有属性 */
  -o-user-select:none; /* Opera私有属性 */
  user-select:none; /* CSS3属性 */
}
.public_pagination {
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: flex-end;
  .pagination_txt {
    color: #33394E;
    font-size: 14px;
  }
  .pagination_btn {
    width: 32px;
    height: 32px;
    border: 1px solid #A5A8B7;
    border-radius: 4px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon_img {
      width: 20px;
      height: 20px;
    }
  }
  .pagination_btn:hover {
    border: 1px solid #0056FE;
    color: #0056FE;
  }
  .pagination_btn:active {
    background-color: #0056FE;
    color: #ffffff;
  }
  .switch_page_btn {
    cursor: pointer;
  }
  .pagination_total,
  .prev_btn {
    margin-right: 10px;
  }
  .pagination_page,
  .next_btn {
    margin-right: 30px;
  }
  .page_inp {
    margin-left: 10px;
    margin-right: 10px;
    width: 50px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #A5A8B7;
    border-radius: 4px;
  }
  .is_disabled {
    cursor: not-allowed;
    background-color: #E6E7F0;
  }
}

// rem 样式
.rem_pages {
  padding-top: .2rem;
  padding-bottom: .2rem;

  .pagination_txt {
    font-size: .14rem;
  }

  .pagination_btn {
    width: .32rem;;
    height: .32rem;
    font-size: .12rem;
    .icon_img {
      width: .2rem;
      height: .2rem;
    }
  }

  .pagination_total,
  .prev_btn {
    margin-right: .1rem;
  }

  .pagination_page,
  .next_btn {
    margin-right: .3rem;
  }

  .page_inp {
    margin-left: .1rem;
    margin-right: .1rem;
    width: .5rem;
    height: .32rem;
    line-height: .32rem;
  }
}
</style>
