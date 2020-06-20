<template>
  <div>
    首页{{$store.state.counter}}
    平方{{$store.getters.powCounter}}
    小于{{number}}{{$store.getters.gt(number)}}
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="updateInfo">update</button>
    {{$store.state.info}}
  </div>
</template>
<script>
export default {
  name:'Home',
  data(){
    return {
      number:20
    }
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(num){
      // this.$store.commit('incrementCount',num)
      this.$store.commit({
        type:'incrementCount',
        num
      })
    },
    updateInfo(){
      this.$store.dispatch('asnycUpdateInfo','td').then(res=>{
        console.log(res)
      })
    }
  }
}
</script>