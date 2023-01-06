<template>
    <div>
        <div class="parent">
          <h1>{{ text_des.split(":")[0] }}</h1>
          <div class="flex">
              <input type="button" value="SAVE" @click="saveChanges()">
              <img :src="img_url" class="img">
              <textarea id="text" rows="20" cols="200" :value="text_des"></textarea>
          </div>
        </div>
        <div>
            <div class="parent">
          <div class="flex ">
            <table>
                <tr v-for='(h,index) in history' :key="h.id" >
                    <td>{{ h.datum }}</td>
                    <td @click="setCurrentText(index)">{{ h.description }}</td>

                </tr>
            </table>
            
          </div>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  import { api_id_patch,api_id_history } from "@/api"
  export default {
    name:"contentComponent",
    props:{
        img_url:String,
        text_des:String,
        button_text:String
    },
    data(){
        return{
            history:Object,
        }
    },
    methods:{
    changeTo(){
      this.$emit("finished",true)
    },
    saveChanges(){
        
        let text_to_save = document.getElementById("text").value
        api_id_patch(this.button_text.split(" ")[1],text_to_save)
        this.changeTo()
    },
    setCurrentText(id){
        console.log(id)
        document.getElementById("text").value = this.history[id].description
    }
    
  },
  async mounted(){
    this.history = await api_id_history(this.button_text.split(" ")[1])
    console.log(history)


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
  
  table, th, td {
  border: 1px solid;
}

    .img{
    height: 20rem;
  }
  
  </style>