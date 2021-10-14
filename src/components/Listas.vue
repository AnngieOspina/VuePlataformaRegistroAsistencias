<template>
<div>
  <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Nombre del estudiante</th>
            <th>¿Asistió?</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in Students" :key="student._id">
            <td>{{ student.name }}</td>
            <td>
              <input type="checkbox" id="student._id" v-model="student.Assistence">
                 {{student.Assistence}}

             <label for="checkbox"></label>
            </td>
          </tr>
          
        </tbody>
      </table>
      
      <br>
      <button
            @click.prevent="saveList(student._id)"
            class="btn btn-danger">
            GUARDAR LISTA
        </button>
</div>
</template>

<script>
import axios from "axios";
export default {
   data(){

       return{
        Students:[],
        
       };
   },
   created(){
       let apiURL= "https://assitence-platform.herokuapp.com/api";
       axios.get(apiURL)
       .then(res =>{
           this.Students=res.data;
           this.Students.Assistence=false;
       })
       .catch(error =>{
           console.error(error);
       })
   },
   methods:{

      saveList(){
       let apiURL= ` https://assitence-platform.herokuapp.com/api/asistencia/$${id}` ;
       axios.post(apiURL)

       if("Asistence"){
          let suma=this.Students.asistence
          suma=suma+1
          return this.Students=res.data;
       }
       else{
         console.error("no salio la operacion");
       }
       
   },
    
     
   
   },

 
}

</script>

<style>

</style>