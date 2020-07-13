<template>
  <div class="menu">
    <!-- 示例容器 -->
    <div class="example_container">
      <div class="example_item">
        <ic-menu v-bind="propObj"
          @select="selectMenu">
          <template v-for="(item, index) in menuData">
            <ic-submenu v-if="item.children"
              :key="index"
              :index="`${index}`">
              <i v-if="item.icon" :class="item.icon" slot="icon"></i>
              <span slot="title">{{item.name}}</span>
              <!-- 二级菜单 -->
              <template v-for="(child, childIndex) in item.children">
                <template v-if="child.children">
                  <ic-submenu :key="childIndex"
                    :index="`${index}-${childIndex}`">
                    <i v-if="child.icon" :class="child.icon" slot="icon"></i>
                    <span slot="title">{{child.name}}</span>
                    <ic-menu-item v-for="grandson in child.children"
                      :key="grandson.index"
                      :index="grandson.path">
                      <i v-if="grandson.icon" :class="grandson.icon" slot="icon"></i>
                      {{grandson.name}}
                    </ic-menu-item>
                  </ic-submenu>
                </template>
                <ic-menu-item v-else
                  :key="child.index"
                  :index="child.path">
                  <i v-if="child.icon" :class="child.icon" slot="icon"></i>
                  {{child.name}}
                </ic-menu-item>
              </template>
            </ic-submenu>
            <ic-menu-item v-else
              :key="item.path"
              :index="item.path">
              <i v-if="item.icon" :class="item.icon" slot="icon"></i>
              {{item.name}}
            </ic-menu-item>
          </template>
        </ic-menu>
      </div>
    </div>
    <div class="ui-tip-contain">
      <!-- 菜单容器 -->
      <el-card>
        <div slot="header">
          <span>菜单(ic-menu或IcMenu)属性</span>
        </div>
        <div class="option-items">
          <p class="option-discrp">
            <span>参数</span>
            <span>说明</span>
            <span>类型</span>
            <span>可选</span>
            <span>默认值</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>width</span>
            <span>宽度，单位px</span>
            <span>Number</span>
            <span>高度100%,由父元素限制</span>
            <span>250</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>blank</span>
            <span>上下间距</span>
            <span>String</span>
            <span></span>
            <span>30px</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>backgroundColor</span>
            <span>整个菜单的背景色</span>
            <span>String</span>
            <span></span>
            <span>#114781<span class="example_color_block" style="background-color: #114781;"></span></span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>hoverBackgroundColor</span>
            <span>鼠标划过的背景色</span>
            <span>String</span>
            <span></span>
            <span>#406B9A<span class="example_color_block" style="background-color: #406B9A;"></span></span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>textColor</span>
            <span>默认文字颜色</span>
            <span>String</span>
            <span></span>
            <span>#fff</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>activeTextColor</span>
            <span>激活菜单文字颜色</span>
            <span>String</span>
            <span></span>
            <span>#114781<span class="example_color_block" style="background-color: #114781;"></span></span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>activeBackgroundColor</span>
            <span>激活菜单背景色</span>
            <span>String</span>
            <span></span>
            <span>#fff<span class="example_color_block" style="background-color: #fff;"></span></span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>submenuOpenBackgroundColor</span>
            <span>子菜单打开的背景色</span>
            <span>String</span>
            <span></span>
            <span>#0B3C70<span class="example_color_block" style="background-color: #0B3C70;"></span></span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>defaultActive</span>
            <span>当前激活菜单的index(唯一标识)</span>
            <span>String</span>
            <span></span>
            <span></span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>defaultOpeneds</span>
            <span>当前展开的子菜单(sub-menu) 的 index 的数组</span>
            <span>Array</span>
            <span></span>
            <span>[ ]</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>uniqueOpened</span>
            <span>是否只保持一个子菜单的展开</span>
            <span>Boolean</span>
            <span></span>
            <span>false</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>router</span>
            <span>是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转</span>
            <span>Boolean</span>
            <span></span>
            <span>false</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>needCollapse</span>
            <span>是否需要显示水平折叠按钮</span>
            <span>Boolean</span>
            <span><b>需要折叠按钮时：屏幕小于等于1200时，菜单默认收起；不显示折叠按钮时，菜单一直处于展开状态</b></span>
            <span>true</span>
          </p>
          <el-divider></el-divider>
          <!-- <p class="option-discrp">
            <span>collapseTransition</span>
            <span>是否需要折叠动画</span>
            <span>Boolean</span>
            <span></span>
            <span>true</span>
          </p>
          <el-divider></el-divider> -->
          <p class="option-discrp">
            <span>zIndex</span>
            <span>菜单折叠时，鼠标滑过弹出层的层叠顺序</span>
            <span>Number</span>
            <span>整数</span>
            <span>999</span>
          </p>
          <el-divider></el-divider>
        </div>
      </el-card>
      <!-- 菜单事件 -->
      <el-card>
        <div slot="header">
          <span>菜单(ic-menu或IcMenu)事件</span>
        </div>
        <div class="option-items">
          <p class="option-discrp">
            <span>事件名称</span>
            <span>说明</span>
            <span>回调参数</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>select</span>
            <span>选中菜单时，返回选中菜单的index(唯一标识)</span>
            <span>index</span>
          </p>
          <el-divider></el-divider>
        </div>
      </el-card>
      <!-- 子菜单 -->
      <el-card>
        <div slot="header">
          <span>子菜单(ic-submenu或IcSubmenu)属性</span>
        </div>
        <div class="option-items">
          <p class="option-discrp">
            <span>参数</span>
            <span>说明</span>
            <span>类型</span>
            <span>可选</span>
            <span>默认值</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>index</span>
            <span>唯一标识</span>
            <span>String</span>
            <span>必传</span>
            <span></span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>height</span>
            <span>高度</span>
            <span>String</span>
            <span></span>
            <span>40px</span>
          </p>
          <el-divider></el-divider>
        </div>
      </el-card>
      <!-- 菜单item -->
      <el-card>
        <div slot="header">
          <span>菜单项(ic-menu-item或IcMenuItem)属性</span>
        </div>
        <div class="option-items">
          <p class="option-discrp">
            <span>参数</span>
            <span>说明</span>
            <span>类型</span>
            <span>可选</span>
            <span>默认值</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>index</span>
            <span>唯一标识</span>
            <span>String</span>
            <span>必传</span>
            <span></span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>height</span>
            <span>高度</span>
            <span>String</span>
            <span></span>
            <span>40px</span>
          </p>
          <el-divider></el-divider>
        </div>
      </el-card>
      <!-- slots -->
      <el-card>
        <div slot="header">
          <span>子菜单(ic-submenu或IcSubmenu)插槽</span>
        </div>
        <div class="option-items">
          <p class="option-discrp">
            <span>name</span>
            <span>说明</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>icon</span>
            <span>菜单图标，没有图标时请勿渲染</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>title</span>
            <span>菜单文字，请不要使用块元素作为slot，否则文字过长无法正常省略，推荐使用template</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>default</span>
            <span>子元素</span>
          </p>
          <el-divider></el-divider>
        </div>
      </el-card>
      <el-card>
        <div slot="header">
          <span>菜单项(ic-menu-item或IcMenuItem)插槽</span>
        </div>
        <div class="option-items">
          <p class="option-discrp">
            <span>name</span>
            <span>说明</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>icon</span>
            <span>菜单图标，没有图标时请不要渲染</span>
          </p>
          <el-divider></el-divider>
          <p class="option-discrp">
            <span>default</span>
            <span>菜单文字</span>
          </p>
          <el-divider></el-divider>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      propObj: {
        // router: true,
        defaultActive: '/avatar',
        defaultOpeneds: [],
        // uniqueOpened: true,
        width: 200
      },
      menuData: [
        {
          path: '',
          name: '父菜单',
          icon: 'el-icon-platform-eleme',
          children: [
            {
              path: '/avatar',
              name: '头像上传',
              icon: ''
            },
            {
              path: '/TextEllipsis',
              name: '单/多行省略',
              icon: ''
            },
            {
              path: '',
              name: '父菜单3',
              icon: 'el-icon-delete',
              children: [
                {
                  path: '/pagination',
                  name: '分页组件',
                  icon: ''
                }
              ]
            }
          ]
        },
        {
          path: '',
          name: '父菜单2',
          icon: 'el-icon-location',
          children: [
            {
              path: '/header',
              name: '公共头部',
              icon: ''
            },
            {
              path: '/model',
              name: '公共弹框',
              icon: ''
            }
          ]
        },
        {
          path: '/MBackHeader',
          name: '返回头部',
          icon: 'el-icon-goods'
        }
      ],
      propObj2: {
        needCollapse: false
      },
      menuData2: []
    }
  },
  methods: {
    selectMenu (index) {
      // console.log('选择的菜单的唯一标识:', index)
    }
  }
}
</script>

<style lang="scss">
.menu {
  .example_container {
    display: flex;
  }
  .example_item {
    margin-right: 20px;
    height: 300px;
  }
}
</style>
