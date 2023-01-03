/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */  
  let nombre = prompt('¿Cual es tu nombre?')
  datosPersona.nombre = nombre  

  let edad = parseInt( prompt('¿Cual es tu año de nacimiento?') )
  datosPersona.edad = 2022 - edad

  let ciudad = prompt('¿En que ciudad vivis?')
  datosPersona.ciudad = ciudad

  let interesPorJs = confirm('¿Te interesa JavaScript?')
  interesPorJs ? datosPersona.interesPorJs = 'Si' : datosPersona.interesPorJs = 'No'

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.getElementById('nombre')
  const edad = document.getElementById('edad')
  const ciudad = document.getElementById('ciudad')
  const javascript = document.getElementById('javascript')

  nombre.innerHTML = datosPersona.nombre
  edad.innerHTML = datosPersona.edad
  ciudad.innerHTML = datosPersona.ciudad
  javascript.innerHTML = datosPersona.interesPorJs

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  listado.forEach(materia => {
    document.getElementById('fila').innerHTML +=
      `<div class="caja">
        <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
        <p class="lenguajes">${materia.lenguajes}</p>
        <p class="bimestre">${materia.bimestre}</p>
      </div>`
  })
  
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas)

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const sitio = document.getElementById('sitio')
 sitio.classList.toggle('dark')
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener('keypress', function(e) {
  
  if (e.key.toUpperCase() === "F") {
    const sobreMi = document.getElementById('sobre-mi')
    sobreMi.classList.remove('oculto')
  }

})
