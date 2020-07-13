<template>
  <div class="ic-model-container" @click.stop="empty">
    <div
      :style="{
        'width': width
      }"
      class="ic-model-contain">
      <div class="ic-model-header">
        <div class="title">
          <slot name="icon"></slot>
          <p>{{title}}</p>
        </div>
        <svg @click.stop="closeModel" t="1587370400312" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2412" width="200" height="200"><path d="M569.59582543 511.81460571l301.5129087-301.82189941a39.55078102 39.55078102 0 0 0 0-55.61828614l-1.66854858-1.66854858a39.4271853 39.4271853 0 0 0-55.4946897 0l-301.57470728 302.25448585L210.91967773 152.76766944a39.4271853 39.4271853 0 0 0-55.4946897 0L153.69464087 154.31262231a38.80920386 38.80920386 0 0 0 0 55.61828613l301.57470728 301.82189942-301.57470728 301.88369727a39.55078102 39.55078102 0 0 0 0 55.61828613l1.66854859 1.60675072a39.4271853 39.4271853 0 0 0 55.49469041 0l301.57470656-301.88369798 301.51290942 301.88369798a39.4271853 39.4271853 0 0 0 55.4946897 0l1.66854858-1.66854858a39.55078102 39.55078102 0 0 0 0-55.61828613l-301.57470727-301.82189941z" p-id="2413"></path></svg>
      </div>
      <div class="ic-model-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IcModel',
  props: {
    width: {
      type: String,
      required: false,
      default: '400px'
    },
    title: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      msg: '弹框'
    }
  },
  methods: {
    empty () {
    },
    closeModel () {
      this.$emit('closeModel')
    }
  }
}
</script>

<style lang="scss" scoped>
  .ic-model-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background:rgba(0,0,0,0.6);
    .ic-model-contain {
      border-radius: 8px;
      overflow: hidden;
      background-color: #fff;
      .ic-model-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 50px;
        padding: 0 20px;

        border-bottom: 1px solid rgba(239,239,239,1);
        .title {
          display: flex;
          align-items: center;
          justify-content: center;
          p {
            color: #2D2D2D;
            font-size: 16px;
            font-weight: bold;
            margin-left: 5px;
          }
        }
        svg {
          cursor: pointer;
        }
      }
    }
  }
</style>
