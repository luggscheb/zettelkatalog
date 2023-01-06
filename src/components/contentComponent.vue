<template>
  <div class="parent">
    <h1>{{ text_des.split(":")[0] }}</h1>
    <div class="flex">
        <input type="button" :value="button_text" @click="changeTo()">
        <img :src="img_url" class="img">

        <p id="text">{{ text_des }}</p>
        
    </div>
  </div>
</template>

<script>
export default {
  name:"contentComponent",
  props:{
    button_text:String,
    img_url:String,
    text_des:String,
  },
  data(){
    return{
      edit:false
    }
  },
  methods:{
    changeTo(){
      this.$emit("changeTo",[this.button_text,this.img_url,this.text_des])
    }
  }

}
</script>

<style>
.parent{
  border: 1px solid black ;
  padding: 1rem;
  width: 80%;
  margin: auto;
  margin-top: 2rem; 
}
.flex{
  display: inline-grid;
  grid-template-columns: auto auto auto;
  justify-content: start;
  width: 100%;
  
}
.flex input{
  width: 8rem;
}
/* .area{
  
} */

.img{
  height: 20rem;
}

</style>