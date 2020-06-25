<template>
  <div class="toast" v-if="isShow">
    {{msg}}
  </div>
</template>
<script>
export default {
  name:"Toast",
  data(){
    return{
      isShow:true,
      msg:"haha"
    }
  },
  methods:{
    showMsg(msg){
      this.isShow = true
      this.msg = msg
    }
  }
}
</script>