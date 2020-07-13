<template>
   <el-popover
      placement="bottom"
      width="200"
      trigger="focus"
      :disabled="!history">
      <div class="ic-search" slot="reference">
        <input type="text" class="ic-search__input" :placeholder="placeholder" v-model="value" @input="inputVal"  v-on:keyup="onKeyup" v-on:keydown="onKeydown">
        <div class="ic-search__img" @click="onSearch('click')">
          <svg t="1587987221074" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4499" width="200" height="200"><path d="M894.41127002 843.68935039L731.8246792 679.44154678c47.59386943-59.09278183 76.27815703-134.03008828 76.27815703-215.64284853 0-189.86523487-154.40920576-344.30773711-344.21144766-344.30773711-189.8031419 0-344.14845557 154.44250224-344.14845556 344.3077371 0 189.86613487 154.34531367 344.33923359 344.14845556 344.33923447 82.60264864 0 158.36966279-29.29081904 217.78370772-77.9393707l162.01245498 163.70426513c6.96252041 7.06060898 16.16218945 10.6053126 25.36275938 10.60531172a35.5613168 35.5613168 0 0 0 25.1053875-10.34884071c13.99073291-13.86384698 14.11851885-36.47921396 0.25557187-50.46994776zM191.10134023 463.79869824c0-150.48114609 122.34039786-272.9160334 272.78914834-272.9160334 150.44874961 0 272.85214043 122.43578731 272.85214044 272.9160334 0 150.48114609-122.40429083 272.94842989-272.85214044 272.94842988-150.44874961 0-272.78914747-122.46728379-272.78914834-272.94842988z" p-id="4500"></path></svg>
        </div>
      </div>

      <div class="ic-search__container" v-if="history">
        <div class="ic-search__container--trash">
          <span> {{lang=='zh'?'搜索历史':'Search history'}}</span>
          <svg t="1587989809123" @click="delectAll" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4633" width="200" height="200"><path d="M256 810.666667c0 46.933333 38.4 85.333333 85.333333 85.333333h341.333334c46.933333 0 85.333333-38.4 85.333333-85.333333V298.666667H256v512zM810.666667 170.666667h-149.333334l-42.666666-42.666667h-213.333334l-42.666666 42.666667H213.333333v85.333333h597.333334V170.666667z" p-id="4634"></path></svg>
        </div>
        <div class="ic-search__container--listbox">
          <ul v-if="this.cacheList.length">
            <li v-for="(item, index) in cacheList" :key="item" @mouseleave="moveOut(index)" @mouseenter="moveIn(index)" :class="listIndex === index ? 'hover':''">
              <div class="box">
                <svg t="1587990338642" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4770" width="200" height="200"><path d="M828.98791668 193.7646875c-85.0096875-84.9590625-197.990625-131.7646875-318.23062501-131.7646875-120.19875001 0-233.19375001 46.8065625-318.1696875 131.7740625-85.0059375 84.995625-131.8171875 198.013125-131.81718751 318.2278125-0.020625 120.2278125 46.753125 233.2209375 131.74875001 318.2690625 84.96375001 84.915 197.97 131.7290625 318.15374999 131.7290625 120.2409375 0 233.2846875-46.8440625 318.31500002-131.8171875 175.419375-175.4371875 175.4465625-460.9134375 0-636.418125v0 0zM787.51666667 788.703125c-73.9434375 73.933125-172.2609375 114.69-276.8428125 114.69-104.5078125 0-202.801875-40.7371875-276.6975-114.6028125-73.895625-73.9078125-114.58125001-172.2075-114.5653125-276.7884375 0-104.5659375 40.7053125-202.8740625 114.6271875-276.7659375 73.910625-73.8946875 172.1728125-114.5859375 276.718125-114.5859375 104.55 0 202.8328125 40.6903125 276.759375 114.590625 152.5696875 152.6053125 152.5696875 400.906875 0 553.4615625v0 0zM705.21354167 622.281875l-155.5490625-89.956875v-245.325c0-20.7046875-16.7971875-37.5-37.50656249-37.5-20.6934375 0-37.490625 16.7953125-37.49062501 37.5v262.5028125c0 13.9096875 17.2903125 25.573125 28.5365625 32.025 3.110625 4.68374999 11.6615625 8.923125 16.875 11.9221875l154.6884375 93.7565625c17.919375 10.3434375 37.35 4.1971875 47.6990625-13.72875 10.35-17.930625 0.7125-40.843125-17.2528125-51.1921875v0-0.0046875zM705.21354167 622.281875z" p-id="4771"></path></svg>
                <p @click="selectItme(item)">{{item}}</p>
              </div>
              <svg v-show="listIndex === index" @click="singleDelete(item)" t="1587991559261" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4904" width="200" height="200"><path d="M569.59582543 511.81460571l301.5129087-301.82189941a39.55078102 39.55078102 0 0 0 0-55.61828614l-1.66854858-1.66854858a39.4271853 39.4271853 0 0 0-55.4946897 0l-301.57470728 302.25448585L210.91967773 152.76766944a39.4271853 39.4271853 0 0 0-55.4946897 0L153.69464087 154.31262231a38.80920386 38.80920386 0 0 0 0 55.61828613l301.57470728 301.82189942-301.57470728 301.88369727a39.55078102 39.55078102 0 0 0 0 55.61828613l1.66854859 1.60675072a39.4271853 39.4271853 0 0 0 55.49469041 0l301.57470656-301.88369798 301.51290942 301.88369798a39.4271853 39.4271853 0 0 0 55.4946897 0l1.66854858-1.66854858a39.55078102 39.55078102 0 0 0 0-55.61828613l-301.57470727-301.82189941z" p-id="4905"></path></svg>
            </li>
          </ul>

          <div class="ic-search__container--listbox__nodeta" v-else>{{lang=='zh'?'暂无记录':'No record yet'}}</div>
        </div>
      </div>
    </el-popover>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'IcSearch',
  props: {
    // 启用历史记录
    history: {
      type: Boolean,
      default: false
    },
    // 是否启用回车搜索
    isEnter: {
      type: Boolean,
      default: false
    },
    // 历史数据缓存地址
    cacheKey: {
      type: String,
      default: ''
    },
    // 占位文案
    placeholder: {
      type: String,
      default: 'Search'
    }
  },
  data () {
    return {
      lang: Cookies.get('lang') || 'zh',
      value: '',
      listIndex: -1,
      cacheList: [],
      isFocus: false
    }
  },
  created () {
    // localStorage.removeItem(this.cacheKey)
    if (this.history && this.cacheKey) {
      if (localStorage.getItem(this.cacheKey) && localStorage.getItem(this.cacheKey) !== null) {
        this.cacheList = JSON.parse(localStorage.getItem(this.cacheKey))
      }
    } else if (this.history && !this.cacheKey) {
      // console.log('搜索组件缺少参数 "cacheKey" ')
    }
  },
  methods: {
    // 手动输入
    inputVal (e) {
      this.listIndex = -1
      this.value = this.value.trim()
      if (localStorage.getItem(this.cacheKey) && localStorage.getItem(this.cacheKey) !== null) {
        this.cacheList = JSON.parse(localStorage.getItem(this.cacheKey))
      }
      if (this.value && this.history) {
        let reg = new RegExp(this.value)
        let temporaryLs = []
        this.cacheList.forEach((item) => {
          if (reg.test(item)) {
            temporaryLs.push(item)
          }
        })
        if (temporaryLs.length) {
          temporaryLs.forEach((item, index) => {
            if (this.value === item) {
              this.listIndex = index
            }
          })
          this.cacheList = temporaryLs
        }
      }
    },
    // 移出
    moveOut (e) {
      this.listIndex = e
    },
    // 移入
    moveIn (e) {
      this.listIndex = e
    },
    // 回车执行\搜索
    onSearch () {
      this.$emit('search', this.value)
      this.writeToHua()
    },

    // 写入缓存
    writeToHua () {
      setTimeout(() => {
        if (this.value && this.history) {
          let isWrite = true
          // 判断是否重复写入
          this.cacheList.forEach((item) => {
            if (this.value === item) {
              isWrite = false
            }
          })
          if (isWrite) {
            // 写入缓存
            this.cacheList.unshift(this.value)
            this.listIndex = 0
            if (this.cacheList.length > 5) {
              this.cacheList.splice(5, 1)
            }
            localStorage.setItem(this.cacheKey, JSON.stringify(this.cacheList))
          }
        }
      }, 500)
    },

    // 选中历史
    selectItme (e) {
      this.value = e
      this.$emit('search', this.value)
    },

    // 单个删除记录
    singleDelete (value) {
      if (localStorage.getItem(this.cacheKey) && localStorage.getItem(this.cacheKey) !== null) {
        let arr = JSON.parse(localStorage.getItem(this.cacheKey))
        arr.forEach((item, index) => {
          if (value === item) {
            arr.splice(index, 1)
          }
        })
        this.cacheList.forEach((item, index) => {
          if (value === item) {
            this.cacheList.splice(index, 1)
          }
        })
        localStorage.setItem(this.cacheKey, JSON.stringify(arr))

        if (!this.cacheList.length) {
          this.cacheList = arr
        }
      }
    },

    // 删除全部
    delectAll () {
      localStorage.setItem(this.cacheKey, [])
      this.cacheList = []
    },
    // 回车
    onKeyup (e) {
      let key = e.keyCode
      let len = this.cacheList.length - 1
      if (key === 38) {
        // 上
        this.listIndex--
        if (this.listIndex < 0) {
          this.listIndex = len
        }
      } else if (key === 40) {
        // 下
        this.listIndex++
        if (this.listIndex > len) {
          this.listIndex = 0
        }
      } else if (key === 13) {
        // 回车
        if (!this.isEnter) {
          return
        }
        if (this.listIndex >= 0) {
          this.value = this.cacheList[this.listIndex]
        }

        this.$emit('search', this.value)
        this.writeToHua()
      }
    },

    // 按上下键的时候阻止input光标移动
    onKeydown (event) {
      let key = event.keyCode
      if (key === 38 || key === 40) {
        event.preventDefault()
      }
    }
  }
}
</script>

<style lang="scss">
.ic-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 25px;
  background-color: #EDEDED;
  border-radius:2px;
  box-sizing: border-box;
  border:1px solid #EDEDED;

  &__input {
    width: 175px;
    height: 100%;
    padding: 4px 10px;
    background-color: #EDEDED;
    font-size: 12px;
    color: #2D2D2D;
    cursor: pointer;
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 100%;
    cursor: pointer;
    .icon {
      font-size: 13px;
      color: #A5A5A5;
    }
  }
  &__img:hover {
    .icon {
      color: #0094DA;
    }
  }
  &__container {
    width: 200px;
    margin: -12px;
    font-size: 12px;
    &--trash {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 6px 10px;
      height: 30px;
      width: 100%;
      border-bottom: 1px solid #F2F2F2;
      color: #A5A5A5;
      .icon {
        font-size: 12px;
        color: #A5A5A5;
      }
      .icon:hover {
        color: #0094DA;
      }
    }
    &--listbox {
      padding: 6px 4px;
      .hover {
        background: #F2F2F2;
      }
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 25px;
        border-radius:2px;
        padding: 0 6px;
        cursor: pointer;
        .icon {
          color: #0094DA;
          font-size: 12px;
        }
        .icon:hover {
          color: rgb(142, 211, 243);
        }
        .box {
          display: flex;
          align-items: center;
          .icon {
            color: #A5A5A5;
            margin-right: 3px;
          }
          p {
            width: 150px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
          }
        }
      }
      li:hover {
        background: #F2F2F2;
      }
      &__nodeta {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 0;
      }
    }
  }
}

.ic-search:hover {
  border:1px solid rgba(0,148,218,1);
}
</style>
