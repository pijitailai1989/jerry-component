<template>
  <div class="public_avatar">
    <div v-if="isError">
      <!-- 展示的头像 -->
      <img
        :src="defaultAvata"
        :style="{width, height: width}"
        class="avatar_img">
      <!-- 上传头像 -->
      <template v-if="isUpload">
        <div class="shadow"
          :style="{width, height: width}"
          @click="uploadFile">
          <img
            :src="avatarCamera"
            :style="{width: `${parseFloat(width) / 2}${company}`}"
            class="camera_img">
        </div>
        <!-- 上传文件的input -->
        <input
          ref="ic-file-input"
          style="display: none;"
          type="file"
          @change="fileChange">
      </template>
    </div>
    <div v-else class="public_error">
      错误
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
// 默认头像
import defaultAvata from '../image/default_user_avatar.png'
// 相机图像
import avatarCamera from '../image/avatar_camera.png'

export default {
  name: 'IcAvatar',
  props: {
    // 头像路径
    headerImg: {
      type: String,
      default: ''
    },
    // 宽度
    width: {
      type: String,
      default: '40px'
    },
    // 是否需要上传功能
    isUpload: {
      type: Boolean,
      default: true
    },
    // 图片限制大小
    size: {
      type: [String, Number],
      default: 5
    }
  },
  data () {
    return {
      avatarCamera,
      defaultAvata,
      company: 'px', // 像素单位
      isError: true, // 错误提示
      imgType: ['png', 'jpg', 'jpeg'], // 图片类型
      lang: Cookies.get('lang') || 'zh',
      sizeTipsZh: '文件不能大于',
      sizeTipsEn: 'File cannot be greater than',
      formatTipsZh: '文件格式错误，支持 "png", "jpg", "jpeg"',
      formatTipsEn: 'File format error, support "PNG", "JPG", "JPEG"'
    }
  },
  watch: {
    headerImg (newName) {
      this.defaultAvata = newName ? this.headerImg : defaultAvata
    },
    width (newName) {
      // 获取像素单位 处理
      this.company = this.width.indexOf('rem') !== -1 ? 'rem' : 'px'

      // 抛错
      this.isError = !(this.width.indexOf('rem') === -1 && this.width.indexOf('px') === -1)
      if (!this.isError) {
        // console.log('ic-avatar 组件 width参数单位错误,只支持 ---- px/rem')
      }
    }
  },
  created () {
    this.defaultAvata = this.headerImg ? this.headerImg : defaultAvata
  },
  methods: {
    // 选择文件
    uploadFile () {
      const dom = this.$refs['ic-file-input']
      dom.value = null // 清空input 的值
      dom.click()
    },

    // 文件改变后把返回的路径抛出
    async fileChange (e) {
      try {
        const file = e.target.files[0]
        const name = file.name
        const arr = name.split('.')
        const type = arr[arr.length - 1]
        const size = ((file.size / 1024) / 1024)
        if (type && this.imgType.indexOf(type) > -1) {
          if (size > parseInt(this.size)) {
            this.$message.error(this.lang === 'zh' ? `${this.sizeTipsZh} ${this.size}兆` : `${this.sizeTipsEn} ${this.size}M`)
            return
          }
          const formData = new FormData()
          formData.append('file', file)
          // 暴露文件流
          this.$emit('upload', formData)
        } else {
          this.$message.error(this.lang === 'zh' ? this.formatTipsZh : this.formatTipsEn)
        }
      } catch (e) {}
    }
  }
}
</script>

<style lang="scss">
  .public_avatar {
    position: relative;
    display: inline-block;
    &:hover {
      .shadow {
        visibility: unset;
      }
    }
    .avatar_img,
    .shadow {
      border-radius: 50%;
    }
    .shadow {
      visibility: hidden;
      cursor: pointer;
      user-select: none;
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, .5);
    }
    .public_error {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid red;
      font-size: 14px;
      text-align: center;
      line-height: 40px;
      color: #000;
    }
  }
</style>
