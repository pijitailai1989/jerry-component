<template>
  <div>
    <p class="title">表格</p>
    <el-table
      :data="tableData"
      :default-sort = "{prop: 'date', name: 'address'}"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Name"
        sortable
        >
      </el-table-column>
      <el-table-column
        prop="date"
        label="Date"
        sortable
        >
          <template slot-scope="scope">
          <p>{{ scope.row.date }}</p>
          </template>
      </el-table-column>
      <el-table-column
        prop="time"
        sortable
        label="Time">
      </el-table-column>
      <el-table-column
        prop="gender"
        sortable
        label="Gender">
      </el-table-column>
      <el-table-column
        prop="yearGroup"
        sortable
        label="Year Group">
      </el-table-column>
      <el-table-column
        prop="family"
        sortable
        label="No.family">
      </el-table-column>
      <el-table-column
        prop="status"
        sortable
        label="Status">
      </el-table-column>
      <el-table-column
        prop="operation"
        sortable
        label="Operation">
      </el-table-column>
    </el-table>
    <p class="title">分页</p>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>

    <p class="title">搜索框</p>
  </div>
</template>

<script>
// import { mapGetters } from "vuex';"
export default {
  props: {},
  data () {
    return {
      tableData: [],
      currentPage4: 4,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  components: {},
  created () {
    let obj = {
      name: '王小虎',
      date: '2016-05-02',
      time: '14:30',
      gender: '男',
      yearGroup: '六年级',
      family: '3',
      status: '待定',
      operation: '创建时间'
    }
    for (let i = 0; i < 10; i++) {
      let sjs = Math.floor(Math.random() * 10)
      let params = JSON.parse(JSON.stringify(obj))
      params.name = params.name + '' + sjs
      this.tableData.push(params)
    }
  },
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
    }
  },
  beforeDestroy () {}
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 30px;
  font-weight: bold;
  margin: 15px 0;
}
</style>

<style lang="scss">
// 表格
.el-table {
  /****************** 变量定义*****************/
  // 边线颜色
  $borderColor:#E6E7F0;
  $fontSize: 12px;

  /****************** 具体更改********************/
  /**
    @border 更改边线
  */
  &--border, &--group {
    td, th, {
      border: 1px solid $borderColor;
      border-right: none !important;
      border-bottom: none !important;
    }
  }
  &--border::after, &--group::after, &::before {
    border: 0.5px solid $borderColor;
  }

  td,  th.is-leaf {
    border-bottom: 1px solid $borderColor !important;
  }

  &--fit {
    border-left: 1px solid $borderColor;
    border-right: 1px solid $borderColor !important;
  }

  /**
    @font-size 更改字号大小
  */
  td, th, caption {
    font-size: $fontSize;
  }

  /**
    @height 更改列表高度和背景颜色
  */
  thead {
    th, tr {
      background-color:#E6E7F0;
    }
    th {
      height: 33px;
      padding:0;
    }
    th>.cell {
      font-weight: bold;
      font-size: 13px;
      color: #2d2d2d;
      .caret-wrapper {
        height: 33px;
      }
    }
  }

  tbody {
    td {
      height: 30px;
      padding: 0;
    }
    .cell {
      line-height: 30px;
      color: #454545;
      i {
        color: #114781;
      }
    }
  }

  // 更新 hover 背景颜色
  &--enable-row-hover .el-table__body tr:hover>td {
    background-color: #F4F9FE !important;
  }

  // 排序 选中的背景颜色
  .descending .sort-caret.descending {
    border-top-color: #0094DA !important;
  }

  // 暂无数据
  &__empty-block {
    min-height: 150px !important;
  }
}

// 分页
.el-pagination {
  $fontSize: 12px !important;
  $height: 20px !important;
  $borderColor: 1px solid #E6E7F0 !important;
  $color: #6a6a6a !important;
  span {
    font-size: $fontSize ;
    line-height: $height ;
    height: $height;
    color: $color;
  }
  &__sizes {
    margin: 0 6px 0 0 !important;
    .el-input {
      width: 80px !important;
      margin: 0px !important;
      .el-input__inner {
        font-size: $fontSize;
        padding-left: 6px !important;
        padding-right: 18px !important;
        height: $height;
        line-height:  $height;
        color: $color;
      }
      .el-input__icon {
        line-height:  $height;
      }
    }
  }
  button {
    min-width: $height;
    height: $height;
    line-height: $height;
    padding:0 !important;
    margin: 0 3px !important;
    border: $borderColor;
    i {
      color:#6A6A6A;
    }
  }
  button:disabled {
    i {
      color: #D2D3DB;
    }
  }
  .el-pager {
    li {
      min-width: $height;
      height: $height;
      line-height: 18px !important;
      border: $borderColor;
      margin: 0 3px;
      font-size: $fontSize;
      font-weight: normal;
      padding: 0;
      border-radius:2px;
    }
    .active{
      background:rgba(0,148,218,1);
      color:#fff;
    }
  }
  &__jump {
    margin-left: 20px !important;
    .el-pagination__editor {
      width: 40px !important;
      height: 20px;

      font-size: $fontSize;
      .el-input__inner {
        height: $height;
        line-height: $height;
      }
    }
  }
}

// select选择器
// .el-select {
//   width: 200px;
//   background:rgba(242,242,242,1);
//   .el-input {
//     font-size: 12px;
//     &__inner {
//       height: 25px;
//       line-height: 25px;
//       background: #f2f2f2;
//     }
//     &__suffix{
//       &-inner{
//         .el-input__icon {
//           line-height: 25px;
//         }
//       }
//     }
//   }
// }

// 下拉框层样式
// .el-select-dropdown {
//   .el-scrollbar {
//     .el-select-dropdown__item {
//       font-size: 12px !important;
//       height: 25px !important;
//       line-height: 25px !important;
//       color: #2D2D2D !important;
//     }
//     .el-select-dropdown__item:hover {
//       background-color: #F2F2F2 !important;
//     }
//     .hover {
//       background-color: #F2F2F2 !important;
//     }
//   }
// }
</style>
