<template>
<div>
  <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Nombre del estudiante</th>
            <th>Correo electrónico</th>
            <th>Celular</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in Students" :key="student._id">
            <td>{{ student.name }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.phone }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: student._id } }"
                class="btn btn-success"
                >Editar
              </router-link>
              <button
                @click.prevent="deleteStudent(student._id)"
                class="btn btn-danger">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <router-link to="/createstudent">Agregar nuevo estudiante</router-link>
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
   created(){
       let apiURL= "https://assitence-platform.herokuapp.com/api";
       axios.get(apiURL)
       .then(res =>{
           this.Students=res.data;
       })
       .catch(error =>{
           console.error(error);
       })
   },
   methods:{
     deleteStudent(id){
       let apiURL=  `https://assitence-platform.herokuapp.com/api/delete-student/${id}` ;
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