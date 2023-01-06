<template>
  <h1>Suche:</h1>
  <input type="search" v-model="search_string" > <input type="button" value="GO" @click="search(search_string)">

  <div v-if="!edit">
    <div  v-for="r in response" :key="r.id" todo_prop.sync="text_des" id="grid_parent">
      <contentComponentVue @changeTo="(i) => changeTo(i)" :button_text='"EDIT: " + r.id.toString()' :img_url='"https://webapp.uibk.ac.at/ubi/cat/"+r.thumb' :text_des='r.description'/>
    </div>
  </div>
  <div v-else>
    <editComponentVue @finished="(i) => finished(i)"  :img_url='edit_img' :text_des='edit_des' :button_text="edit_id"/>

  </div>
  
</template>

<script>
import { api_search } from '@/api.js';
import contentComponentVue from './components/contentComponent.vue';
import editComponentVue from './components/editComponent.vue';
export default {
  name: 'App',
  components: {
    contentComponentVue,
    editComponentVue
  },
  data(){
    return{
      response: Object,
      search_string: "",
      edit: false,
      //for edit
      edit_id:String,
      edit_des:String,
      edit_img:String
    }
  },
  methods:{
    async search(q){
      this.edit=false
      console.log(this.search_string)
      this.response = await api_search(q)
      console.log(this.response)
    },
    changeTo(i){
      this.edit_id=i[0]
      this.edit_img=i[1]
      this.edit_des=i[2]
      this.edit=true
    },
    finished(){
      this.edit=false
    }
    
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.grid_parent{
  display: inline-grid;
  grid-template-columns: auto auto auto;
}
</style>
