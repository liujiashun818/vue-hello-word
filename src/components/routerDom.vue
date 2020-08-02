<template>
  <div>
    <!-- 浏览器自带的路由 -->
    <!-- history.pushState('','','/d') url添加参数，前两个没有用，第三个有用
        缺点：需要后端支持 刷新导致404错误
        开发使用hash,上线使用history方式
    -->
    路由
    <p ref="myp">{{msg}}</p>
    <br>
    <div v-for="i in arr" :key="i" ref="mydiv">{{i}}</div>
    <br>
    <div ref="wrap">
      <div v-for="i in arr" :key="i" ref="mydiv">{{i}}</div>
    </div>
  
  </div>
</template>

<script>
export default {
  // 实例化的时候会调用好多钩子函数
  // beforeCreate dom挂载之前，没有data值,用的少  created 有data值 $data 获取axios
  // beforeMount  数据编译之前doom之前    mounted
  // beforeUpdate    updated
  // beforeDestory  destroyed

  beforeCreate() {}, // 1 用的少
  data() {
    return { 
      a: 1, b: 3, msg: "ppppp",
      arr: [1,2,3]
    };
  },
  created() {}, // ajax
  template: "<div>{{a}}/div>", // 是否有此属性 或者写到上面，只要有此属性app中的内容就没有任何意义了
  // 只能有一个根元素，不能是文本节点
  // 是否有template ？ vm.template:'<div>{{a}}/div>' outhtml
  beforeMount() {}, // 是否有 el vm.$mount("#app") ，没有什么意义
  mounted() {
    // dom 渲染好了，可以操作dom了，
    // this.$data vm 上的数据
    // this.$watch 监控
    // this.$el 当前el元素
    // this.$options 其它属性
    // this.$nextTick // 异步方法 ，dom 完成后 当前代码都执行完后
    console.log(this.$refs.myp);
    console.log('mydiv',this.$refs.mydiv); // 如果 是for循环的 可以取多，否则只能取一个
    this.$nextTick(() => {
      console.log(this);
    });
    this.arr = [2,3,4,5] // dom映射，
    console.log(this.$refs.wrap); // dom 渲染是异步 显示不对
    // 如果数据更新后 要取到最新真实的的dom内容，要等页面渲染后去获取所有的dom
    // 操作 要用 nextTick
    this.$nextTick(() => {
      console.log(this.$refs.wrap);
    });
  },
  beforeUpdate() {}, // // 更新前 一般用watch替换 如果页面依赖的数据 data 改变了，对比虚拟dom之前 更新前
  updateed() {
    // 更新后
  },
  beforeDestroy() {
    // 销毁前 通过 vm.$destory() 测试。路由也可以用到
    alert("销毁前"); // 移除了监听 定时器 事件绑定
  },
  destroyed() {
    // 销毁后
    alert("销毁后");
  },
};
</script>

<style>
</style>