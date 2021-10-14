<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Edit Student</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="students.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            class="form-control"
            v-model="students.email"
             required 
          />
        </div>

        <div class="form-group">
          <label>Teléfono</label>
          <input
            type="text"
            class="form-control"
            v-model="students.phone"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
   data(){
    return{
      students:[]
    }
    
   },
   created(){
       let apiURL= `http://localhost:4000/api/edit-student/${this.$route.params.id}`;
       axios.get(apiURL)
       .then(res =>{
           this.students=res.data;
       })
       .catch(error =>{
           console.error(error);
       })
   },
     methods:{
      handleSubmitForm(){
       let apiURL= `http://localhost:4000/api/update-student/${this.$route.params.id}`;
       axios.put(apiURL, this.student)
       .then(res =>{
           console.log(res);
           this.$route.push("/view")
       })
       .catch(error =>{
           console.error(error);
       })
     }
     }
}
</script>

<style>

</style>