<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Nuevo estudiante</h3>
      <br>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Nombre del estudiante</label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            class="form-control"
            v-model="student.email"
             required 
          />
        </div>

        <div class="form-group">
          <label>Número de celular</label>
          <input
            type="text"
            class="form-control"
            v-model="student.phone"
            required
          />
        </div>
<br>
        <div class="form-group">
          <button class="btn btn-danger btn-block">Guardar</button>
        </div>
        <br>
      </form>
    </div>
    
    <router-link to="/view">Ver lista de estudiantes</router-link>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data(){
    return{
      student:{
        name:"",
        email:"",
        phone:""
              }
    }
    
  },
  methods:{
    handleSubmitForm(){
        console.log(this.student.phone.length)
        let apiURL= "https://assitence-platform.herokuapp.com/api/create-student";
        axios.post(apiURL, this.student)
        .then(()=>{
        this.$router.push("/view")
        this.student={
          name:"",
          email:"",
          phone:""
                };          
        })
        .catch(error=>{
          console.log(error)
        })
    }
  }
}
</script>

