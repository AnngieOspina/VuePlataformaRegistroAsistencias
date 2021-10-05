<template>
<div>
     
    <main class="container">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            
            <div class="col text-center">
              <h3>Inicia sesión</h3>
            </div>
            
            
          </div>
          <div class="card-body">
            <form class="needs-validation" novalidate>
              <div >                                
                <input type="text" id="usuario" class="form-control" placeholder="Nombre de usuario" required>
                <br>
                <input type="password" id="password" class="form-control" placeholder="Constraseña" required>
              </div>
              
              <br>
              <div class="row align-items-center remember">
                <input type="checkbox" id="recordarme">Recordarme
              </div>
              <br>
              <div class="col text-center">
                  
                <b-button size="lg" block pill  variant="outline-light"  href="pageteacher" >Inicia sesión</b-button>

              </div>	
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center links">
              Necesitas ayuda ¿Olvidaste tu contraseña?<a href="index.html">Inicio</a>
            </div>
            
          </div>
        </div>
      </div>
    </main> 
</div>
    
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Numans');

html,body{
    background-image: url('https://media.istockphoto.com/photos/kids-raising-hands-to-teacher-in-an-elementary-school-class-picture-id803166770?k=20&m=803166770&s=170667a&w=0&h=jv4Ihlk9YxBmO6slgHdM90PaDiGNQHPNw0Ch-swhylo=');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    font-family: 'Numans', sans-serif;
}

.container{
    height: 100%;
    align-content: center;
}

.card{
    height: 370px;
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.5) !important;
}

.card-header h3{
    color: white;
}

input:focus{
    outline: 0 0 0 0  !important;
    box-shadow: 0 0 0 0 !important;
}

.remember{
    color: white;
}

.remember input {
    width: 20px;
    height: 20px;
    margin-left: 15px;
    margin-right: 5px;
}

.links{
    color: white;
}
    
.links a{
    margin-left: 4px;
    color: white;
}
</style>