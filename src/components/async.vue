<template>
  <div id="dd">
      <!-- <child :m="money" @update:m="val=>this.money=val"></child> -->
      父亲{{money}}
      <child :m.sync="money"></child>
  </div>
</template>

<script>
// Vue.component('child', {
//   // 声明 props
//   props: ['message'],
//   // 同样也可以在 vm 实例中像 "this.message" 这样使用
//   template: `<div> 儿子：{{m}} <button @click="getMoney()"></button></div>`
// })
export default {
    data(){
        return{
            money:400
        }
    },
    // components:{
    //     child:child
    // }
}
</script>

<style>

</style>