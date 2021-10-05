<template>
    <div>
        <div v-b-toggle.collapse-2 class="m-1" >
            <div class="accordion-item">
              <h2 v-b-toggle.collapse-2 class="m-1" id="collapse-2">
                <button class="accordion-button" type="button" v-b-toggle.collapse-2  data-bs-target="#collapse-2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    ¿Cómo crear un usuario?
                </button>
              </h2>
              <div id="collapse-2" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div v-b-toggle.collapse-2 class="m-1">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  ¿Puedo consultar las notas?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  ¿Como enviar un reporte por E-mail?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  ¿Como consultar el total de inasistencias de un estudiante?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingfive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                  Solucionar un problema
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<style scoped>
:root {
	--primario: #e23939;
	--gris-claro: #B8B8B8;
	--sombra: 0 0 13px 0 rgba(185,185,185, .25);
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}



/*! =================================================*/
/*! ============= Contenedor Preguntas ============= */
/*! =================================================*/
.contenedor-preguntas {
	display: none;
	grid-template-columns: 1fr;
	gap: 40px;
}

.contenedor-preguntas.activo {
	display: grid;
}

.contenedor-pregunta {
	background: #fff;
	padding: 40px;
	border: 2px solid transparent;
	border-radius: 10px;
	overflow: hidden;
	transition: .3s ease all;
	cursor: pointer;
}

.contenedor-pregunta:hover {
	box-shadow: var(--sombra);
}

.contenedor-pregunta.activa {
	border: 2px solid var(--primario);
}

/*! =================================================*/
/*! ============= Preguntas ============= */
/*! =================================================*/
.pregunta {
	font-weight: 700;
	font-size: 20px;
	line-height: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.pregunta img {
	width: 14px;
}

.respuesta {
	color: #808080;
	line-height: 30px;
	max-height: 0;
	opacity: 0;
	transition: .3s ease all;
}

.contenedor-pregunta.activa .respuesta {
	opacity: 1;
	margin-top: 20px;
}

.contenedor-pregunta.activa img {
	transform: rotate(45deg);
}

/*! =================================================*/
/*! ============= Responsive Design ============= */
/*! =================================================*/
@media screen and (max-width: 820px){
	.categorias {
		grid-template-columns: 1fr 1fr;
	}

	.categoria {
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
	}

	.categoria svg {
		width: 30px;
		margin-right: 10px;
		margin-bottom: 0;
	}
}

@media screen and (max-width: 500px){
	.categorias {
		grid-template-columns: 1fr;
	}
}
</style>