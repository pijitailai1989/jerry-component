<template>
  <button
    :disabled="disabled"
    @click.prevent="clickHandle"
    class="ic-buttons"
    :class="['ic-buttons--'+type, 'ic-buttons--'+color, 'ic-buttons--'+size, {'is-plain':plain}]"
  >
    <i class="iconfont" :class="[icon, {'ic-icon-animation': animation&&!disabled&&icon}]" v-show="icon" style="display: inline-block;"></i>
    <span :class="color"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'IcButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator (type) {
        return ['default', 'text', 'icon'].includes(type)
      }
    },
    plain: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator (size) {
        return ['big', 'medium', 'mini'].includes(size)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '',
      validator (color) {
        return ['', 'orange', 'yellow', 'green', 'red', 'blue'].includes(color)
      }
    },
    animation: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isClick: true
    }
  },
  methods: {
    clickHandle (event) {
      if (this.isClick) {
        this.isClick = false
        this.$emit('onClick', event)
        setTimeout(() => {
          this.isClick = true
        }, 1000)
      }
    }
  }
}
</script>

<style  lang="scss">
  .ic-buttons {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    color: #454545;
    border: 1px solid #E4E4E4;
    background-color: #E4E4E4;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    border-radius: 4px;
    /******样式*******/
    // 默认样式
    &.is-plain {
      border: 1px solid #E4E4E4;
      color: #454545;
      background-color: #ffffff;
    }
    &:hover {
      color: #454545;
      border-color: #F2F2F2;
      background-color: #F2F2F2;
      &.is-plain:hover {
        color: #454545;
        background-color: #E4E4E4;
        border: 1px solid #E4E4E4;
      }
    }
    &:active {
      color: #454545;
      border-color: #DBDBDB;
      background-color: #DBDBDB;
      &.is-plain:active {
        color: #454545;
        background-color: #DBDBDB;
        border: 1px solid #DBDBDB;
      }
    }
    &:disabled {
      cursor: no-drop;
      color: #E4E4E4;
      background-color: #F2F2F2;
      border: 1px solid #F2F2F2;
      &.is-plain:disabled {
        color: #E4E4E4 !important;
        border-color: #F2F2F2 !important;
        background-color: #ffffff !important;
      }
    }

    // 文本样式
    &--text {
      padding: 0 !important;
      background-color: #ffffff !important;
      border: 1px solid #ffffff !important;
      .blue {
        color: #0094DA;
      }
      .orange {
        color: #FF784D;
      }
      .yellow {
        color: #FAC810;
      }
      .green {
        color: #35D0BA;
      }
      .red {
        color: #EA2B2B;
      }
    }
    &--text:hover {
      span {
        text-decoration: underline;
      }
    }
    &--text:disabled {
      span {
        text-decoration: none !important;
        color: #E4E4E4;
      }
    }

    // 图标按钮样式
    &--icon {
      width: 25px;
      height: 25px;
      padding: 0 !important;
      font-size: 15px;
      border-radius:2px;
      background:rgba(255,255,255,1);
      box-shadow:0px 1px 1px 0px rgba(0,0,0,0.1);
      border:1px solid rgba(242,242,242,1);
      i {
        font-size: 10px !important;
      }
    }

    /*********颜色**********/

    // 蓝颜色
    &--blue {
      color: #FFFFFF;
      background-color: #0094DA;
      border: 1px solid #0094DA;
      &.is-plain {
        color: #0094DA;
        border-color: #0094DA;
        background-color: #fff;
      }
    }
    &--blue:hover {
      color: #ffffff;
      border-color: #21ADEF;
      background-color: #21ADEF;
      &.is-plain:hover {
        color: #FFFFFF;
        border-color: #0094DA;
        background-color: #0094DA;
      }
    }
    &--blue:active {
      color: #ffffff;
      border-color: #0089C9;
      background-color: #0089C9;
      &.is-plain:active {
        color: #FFFFFF;
        border-color: #0089C9;
        background-color: #0089C9;
      }
    }
    &--blue:disabled {
      border: 1px solid rgba(0,148,218,0.2);
      color: #ffffff;
      background:rgba(0,148,218,0.2);
      &.is-plain:disabled {
        color: #E4E4E4;
        border-color: #E4E4E4;
        background-color: #ffffff;
      }
    }

    // 橙颜色
    &--orange {
      color: #ffffff;
      border-color: #FF9573;
      background-color: #FF9573;
      &.is-plain {
        color: #FF784D;
        background-color: #FFFFFF;
        border-color: #FF784D;
      }
    }
    &--orange:hover {
      color: #ffffff;
      border-color: #FF9573;
      background-color: #FF9573;
      &.is-plain:hover {
        color: #ffffff;
        background-color: #FF784D;
        border-color: #FF784D;
      }
    }
    &--orange:active {
      color: #ffffff;
      border-color: #FD6534;
      background-color: #FD6534;
      &.is-plain:active {
        color: #FFFFFF;
        border-color: #FD6534;
        background-color: #FD6534;
      }
    }
    &--orange:disabled {
      color: #FFFFFF;
      border-color: rgba(255,120,77,0.3);
      background-color: rgba(255,120,77,0.3);
      &.is-plain:disabled {
        color: #FFFFFF;
        border-color: #FD6534;
        background-color: #FD6534;
      }
    }

    // 绿色
    &--green {
      color: #ffffff;
      background-color: #35D0BA;
      border: 1px solid #35D0BA;
      &.is-plain {
        color: #35D0BA;
        background-color: #ffffff;
        border: 1px solid #35D0BA;
      }
    }
    &--green:hover {
      color: #ffffff;
      background-color: #4FE6D1;
      border: 1px solid #4FE6D1;
      &.is-plain:hover {
        color: #ffffff;
        background-color: #35D0BA;
        border: 1px solid #35D0BA;
      }
    }
    &--green:active {
      color: #ffffff;
      background-color: #23C7B0;
      border: 1px solid #23C7B0;
      &.is-plain:active {
        color: #ffffff;
        background-color: #23C7B0;
        border: 1px solid #23C7B0;
      }
    }
    &--green:disabled {
      color: #ffffff;
      border-color:  rgba(53,208,186,0.3);
      background-color:  rgba(53,208,186,0.3);
      &.is-plain:disabled {
        color: #FF784D;
        background-color:  rgba(53,208,186,0.3);
        border-color: #FF784D;
      }
    }

    // 黄色样式
    &--yellow {
      color: #ffffff;
      border-color: #FAC810;
      background-color: #FAC810;
      &.is-plain {
        color: #FAC810;
        background-color: #ffffff;
        border: 1px solid #FAC810;
      }
    }
    &--yellow:hover {
      color: #ffffff;
      border-color: #FED334;
      background-color: #FED334;
      &.is-plain:hover {
        color: #ffffff;
        background-color: #FAC810;
        border: 1px solid #FAC810;
      }
    }
    &--yellow:active {
      color: #ffffff;
      border-color: #EDBA00;
      background-color: #EDBA00;
      &.is-plain:active {
        color: #ffffff;
        background-color: #EDBA00;
        border: 1px solid #EDBA00;
      }
    }
    &--yellow:disabled {
      color: #ffffff;
      border-color: rgba(250,200,16,0.3);
      background-color: rgba(250,200,16,0.3);
      &.is-plain:disabled {
        color: #FF784D;
        background-color: rgba(250,200,16,0.3);
        border-color: rgba(250,200,16,0.3);
      }
    }

    // 红颜色样式
    &--red {
      color: #ffffff;
      border-color: #EA2B2B;
      background-color: #EA2B2B;
      &.is-plain {
        color: #EA2B2B;
        background-color: #ffffff;
        border: 1px solid #EA2B2B;
      }
    }
    &--red:hover {
      color: #ffffff;
      border-color: #FC5757;
      background-color: #FC5757;
      &.is-plain:hover {
        color: #ffffff;
        background-color: #EA2B2B;
        border: 1px solid #EA2B2B;
      }
    }
    &--red:active {
      color: #ffffff;
      border-color: #DE1818;
      background-color: #DE1818;
      &.is-plain:active {
        color: #ffffff;
        background-color: #DE1818;
        border: 1px solid #DE1818;
      }
    }
    &--red:disabled {
      color: #ffffff;
      border-color: rgba(234,43,43,0.3);
      background-color: rgba(234,43,43,0.3);
      &.is-plain:disabled {
        color: #FF784D;
        background-color: #FFFFFF;
        border-color: #FF784D;
      }
    }

    // 大小
    &--big {
      padding: 7px 15px;
      font-size: 14px;
      i {
        font-size: 14px;
      }
    }
    &--medium {
      padding: 5px 15px;
      font-size: 12px;
      i {
        font-size: 12px;
      }
    }
    &--mini {
      padding: 3px 10px;
      font-size: 12px;
      i {
        font-size: 12px;
      }
    }

    // 动画
    .ic-icon-animation {
      animation: ic-icon-animation 1s linear infinite;
    }

    @keyframes ic-icon-animation
    {
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
    }
  }
</style>
