export default {
  inject: ['rootMenu'],
  computed: {
    indexPath () {
      const path = [this.index]
      let parent = this.$parent
      while (parent.$options.name !== 'IcMenu') {
        if (parent.index) {
          path.unshift(parent.index)
        }
        parent = parent.$parent
      }
      return path
    },
    parentMenu () {
      let parent = this.$parent
      while (
        parent &&
        ['IcMenu', 'IcSubmenu'].indexOf(parent.$options.name) === -1
      ) {
        parent = parent.$parent
      }
      return parent
    },
    paddingStyle () {
      let padding = 15
      let parent = this.$parent
      while (parent && parent.$options.name !== 'IcMenu') {
        if (parent.$options.name === 'IcSubmenu') {
          padding += 15
        }
        parent = parent.$parent
      }
      return { paddingLeft: padding + 'px' }
    }
  }
}
