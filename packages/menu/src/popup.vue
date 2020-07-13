<script>
export default {
  name: 'IcPopup',
  render () {
    const component = (<div class="ic-popup">
      { /* 左侧图标 */ }
      <div class="left_icon">
        <svg t="1587959253637" class="svg_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2799"><path d="M998.10742895 0H1033.14285695v1024h-34.669714a73.142857 73.142857 0 0 1-61.769143-33.974857L630.85714295 507.721143 936.66742895 33.499429A73.142857 73.142857 0 0 1 998.10742895 0z" fill="#FFFFFF" p-id="2800"></path></svg>
      </div>
      <div class="right_txt">
        { this.$slots.default }
      </div>
    </div>)
    return component
  }
}
</script>

<style lang="scss" scoped>
.ic-popup {
  position: relative;
  padding-left: 13px;
  line-height: 28px;
  white-space: nowrap;
  .left_icon {
    position: absolute;
    left: -15px;
    top: 0;
    width: 10px;
    height: 28px;
    .svg_icon {
      height: 28px;
    }
  }
  .right_txt {
    padding-left: 5px;
    padding-right: 10px;
    box-shadow:0px 2px 5px 0px rgba(0,0,0,0.1);
    background-color: #fff;
    color: #454545;
    font-size: 12px;
    font-weight: normal;
  }
}
</style>
