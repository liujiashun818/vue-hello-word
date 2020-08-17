<template>
  <div class="hello">
    {{name}}
    <div @click="handParent">
      parent
      <div @click="handeChild">
        child
        <div @click="handeGrandSon">handeGrandSon</div>
      </div>
    </div>

    <br />全选：
    <input type="checkbox" v-model="checkAll" />
    <br />
    <input
      type="checkbox"
      v-for="product in products"
      :key="product.id"
      v-model="product.isSelected"
    />
    <br />
    <input type="text" v-model="aInput" name id />
    <div>{{msg}}</div>
    <!-- watch 仅仅监控一层的数据变化，深度监控为：对象内写函数 ，deep：true-->
    <input type="text" name id v-model="wathValue" />
    {{watchReaValue}}
    <!-- fullName -->
    <br />
    <input type="text" v-model="varName" />
    所有名字：{{fullName}}
    <br />
    <!-- v-if  -->
    <!-- template 空标签 仅仅能用v-if 不能用v-show -->
    <!-- dom切换的时候 相同的结构会公用，加key 就不会替换 -->
    <template v-if="isShow">
      <div>我是false额</div>
      <div>我是false额</div>
      <div>我是false额</div>
    </template>
    <template v-else>
      <div>我是false额</div>
    </template>
    <!-- v-bind 绑定属性， 比如src key  :width ='11'
        特殊的情况： class , style
        最常用的有两种： 对象和数组
    -->
    <div class="x" :class="{ z: changeStyle, y: true }">样式 对象</div>
    <div class="x" :class="[class1, class2, 'z']">样式 数组</div>
    <div class="x" :class="[class1, class2, { z:false }]">样式 数组和对象混合</div>
    <div v-for="(i, index) in 10 " :class="{x: index%2}" :key="index">隔行展示</div>
  
  <!-- 行内样式 后边的会覆盖前边的-->
    <div style="font-size: 30px" :style="'font-size: 50px'">常用样式后边覆盖前边的</div>
    <div style="font-size: 30px" :style="{background:'gray', color: 'green'}">行内样式2对象</div>
    <div :style="[sty1,sty2, {fontSize: '30px'}]">后端控制样式 数组</div>
    <!-- 自定义指令 操作dom-->
    <button v-color.13="colorValue">变色</button>
    <routerDom></routerDom>
  </div>
</template>

<script>
import routerDom from './routerDom';
export default {
  directives:{ //自定义指令 color要和v-color 一样
    color(el, bindings){ 
      el.style.background = bindings.value;
      console.log('bindings',bindings);
      console.log('arguments',arguments);
    } 
  },
  data() {
    return {
      name: "HelloWorld",
      aInput: "",
      wathValue: "监值",
      watchReaValue: "值",
      firstName: "liu",
      lastName: "jiajjj",
      varName: "",
      // fullName: '',
      isShow: true,
      products: [
        {
          isSelected: true,
          id: "1333",
        },
        {
          isSelected: true,
          id: "244",
        },
      ],
      changeStyle: true,
      class1:'x',
      class2: 'y',
      sty1:{ background: 'pink'},
      sty2:{ color: 'orange'},
      colorValue: 'red',
    };
  },
  // 不支持异步，所以就用watch
  computed: {
    checkAll: {
      get() {
        return this.products.every((item) => item.isSelected);
      },
      set(v) {
        this.products.forEach((i) => (i.isSelected = v));
      },
    },
    msg() {
      if (this.aInput.length < 3) {
        return "少了";
      } else if (this.aInput.length > 6 && this.aInput.length < 10) {
        return "多了";
      } else {
        return "";
      }
    },
    fullName() {
      return this.firstName + this.varName + this.lastName;
    },
  },
  watch: {
    wathValue(newValue, oldValue) {
      console.log(`newValue:${newValue}`);
      console.log(`oldValue:${oldValue}`);
      setTimeout(() => {
        if (newValue.length < 5) {
          return (this.watchReaValue += "小于3");
        } else if (newValue.length < 8) {
          return (this.watchReaValue += "大于3");
        }
        return (this.watchReaValue += "other");
      }, 3000);
    },
    // varName(newV){
    //   this.fullName = this.firstName + newV + this.lastName;
    // }
  },
  components: {
    routerDom
  },
  created() {
    window.addEventListener('hashchange',()=>{
      this.hash = window.location.hash.splice(2) || 'default'
      
    },false)
  },
  mounted() {},
  methods: {
    handParent() {
      alert("p");
    },
    handeChild() {
      alert("c");
    },
    handeGrandSon() {
      alert("s");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .x{
    background: blanchedalmond;

  }
  .y{
    font-size: 30px;
  }
  .z{
    color: pink;
  }

</style>
