<template>
<div>
  <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Nombre del estudiante</th>
            <th>Asistió</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in Students" :key="student._id">
            <td>{{ student.name }}</td>
            <td>
                <input type="checkbox" id="student._id" v-model="checked">
                <label for="checkbox">{{ checked }}</label>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <button
            @click.prevent="saveList(students._id)"
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
        Students:[]
       };
   },
   saveList(){
       let apiURL= "http://localhost:4000/api";
       axios.post(apiURL)
       .then(res =>{
           this.Students.a=res.data;
       })
       .catch(error =>{
           console.error(error);
       })
   },
   methods:{
     deleteStudent(id){
       let apiURL=  `http://localhost:4000/api/delete-student/${id}` ;
       let indexOfArrayItem=this.Students.findIndex((i)=>i._id===id);
      
      if (window.confirm("Esta seguro de eliminar el reistro")){
         
         axios.delete(apiURL).then(()=>{
          this.Students.splice(indexOfArrayItem, 1)
         })
         .catch(error=>{
           console.log(error)
         });
       }
   
   },

 
}
}
</script>

<style>

</style>