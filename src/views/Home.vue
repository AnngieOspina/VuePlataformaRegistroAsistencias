<template >
<div class="itemHeader">
<div class="container">
	<br>

<b-row>
	<b-col></b-col>
	<b-col></b-col>
  <b-col  lg="4" class="pb-2">
	  <b-button size="lg" block pill  variant="outline-light"  href="login" >Inicia sesión</b-button></b-col>
</b-row>
		<div class="row">
			<div class="col-md-12 text-center">
				<div class="text-homeimage">
					<div class="maintext-image" data-scrollreveal="enter top over 1.5s after 0.1s">
						Asistencia de alumnos
					</div>
					<div class="subtext-image" data-scrollreveal="enter bottom over 1.7s after 0.3s">
						Lleva el control en tu clase
					</div>
				</div>
			</div>
		</div>
	</div>


</div>


</template>

<script>
 
// @ is an alias to /src

export default {
 
}
</script>

<style >
.itemHeader {
	background-image:url('https://fondosmil.com/fondo/4279.jpg');
	background-repeat:no-repeat;
	background-position:0% top;
	background-size:cover;
	background-attachment:scroll;
	background-color:rgba(0,0,0,0);
}
.text-homeimage {
	text-align:center;
	color:rgb(255, 255, 255);
	z-index:2;
	position:relative;
	font-size:75px;
	line-height:90px;
	text-transform:uppercase;
	padding-top:190px;
	padding-bottom:190px;
	font-weight:700;
	font-family:Dosis;
}
.subtext-image {
	text-transform:none;
	font-weight:100 !Important;

}
</style>
