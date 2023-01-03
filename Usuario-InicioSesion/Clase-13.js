/* --------------------------- estado por defecto --------------------------- */

const estadoUsuario = {
  email: "",
  password: "",
  rol: "",
  terminos: false,
};

// ponemos en true solo cuando esté correcto

const estadoErroresOk = {
  email: false,
  password: false,
  rol: false,
  terminos: false,
};

/* ---------------------------------- nodos --------------------------------- */

// capturamos todos los elementos que necesitamos
const formulario = document.forms[0];
// forms devuelce unj array con todas las etq form que haya en el html. En este
//caso solo hay una asi que queremos la primera

//inputs
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputRol = document.querySelector("#rol");
const inputTerminos = document.querySelector("#terminos");

//errors
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const rolError = document.querySelector("#rolError");
const terminosError = document.querySelector("#terminosError");

/* -------------------------------------------------------------------------- */
/*                   [1] FUNCION: mostrar errores al usuario                  */
/* -------------------------------------------------------------------------- */

function mostrarErrores() {
  // por cada small mostramos u ocultamos el error
  estadoErroresOk.email ? emailError.classList.remove("visible") : emailError.classList.add("visible");

  estadoErroresOk.password ? passwordError.classList.remove("visible") : passwordError.classList.add("visible");

  estadoErroresOk.rol ? rolError.classList.remove("visible") : rolError.classList.add("visible");

  estadoErroresOk.terminos ? terminosError.classList.remove("visible") : terminosError.classList.add("visible");
}

/* -------------------------------------------------------------------------- */
/*               [2] FUNCION: actulizamos los estados de la app               */
/* -------------------------------------------------------------------------- */

// 👇 por cada cambio en el formulario actualizamos
formulario.addEventListener("change", (e) => {
  // 👇 actualizo el estado de la pantalla con los datos
  estadoUsuario.email = inputEmail.value;
  estadoUsuario.password = inputPassword.value;
  estadoUsuario.rol = inputRol.value;
  estadoUsuario.terminos = inputTerminos.checked;

  // 👇 actualizo el estado del error segun el estado del usuario
  estadoErroresOk.email = validarEmail(estadoUsuario.email);
  estadoErroresOk.password = validarPassword(estadoUsuario.password);
  estadoErroresOk.rol = validarRol(estadoUsuario.rol);
  estadoErroresOk.terminos = validarTerminos(estadoUsuario.terminos);

  // finalmente muestro los errores presentes
  mostrarErrores();
});

/* -------------------------------------------------------------------------- */
/*                        [3] FUNCIONES: validar campos                       */
/* -------------------------------------------------------------------------- */

function validarEmail(email) {
  let resultado = false;

  // EJEMPLO CON EXPRESION REGULAR 👇
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  if (regex.test(email)) {
    resultado = true;
  }
  return resultado;
}

function validarPassword(password) {
  let resultado = false;

  // si pasa las pruebas lo damos por válido 👇
  if (
    !password.includes(" ") &&
    !password.includes("@") &&
    password.length > 6
  ) {
    resultado = true;
  }

  return resultado;
}

function validarRol(rol) {
  let resultado = false;

  // si pasa las pruebas lo damos por válido 👇
  if (rol === "frontend" || rol === "backend") {
    resultado = true;
  }

  return resultado;
}

function validarTerminos(terminos) {
  let resultado = false;

  // si pasa las pruebas lo damos por válido 👇
  if (terminos) {
    resultado = true;
  }
  return resultado;
}

/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: escuchamos el submit                     */
/* -------------------------------------------------------------------------- */

// en el evento submit nos remitimos a chequear nuestro estado de errores
formulario.addEventListener("submit", (e) => {
  // prevenimos el default para manejar nososotro el comportamiento
  e.preventDefault();

  console.log(estadoUsuario);
  console.log(estadoErroresOk);

  if (
    estadoErroresOk.email &&
    estadoErroresOk.password &&
    estadoErroresOk.rol &&
    estadoErroresOk.terminos
  ) {
  
  navegarPaginaExito()

  }
});

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete
// correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.
// 2 - Esperar 3 segundos para redireccionar a la página de usuario.html
// 3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
// 4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el botón de
// "Atrás"(la flechita del navegador) el usuario vuelva a index.

function navegarPaginaExito() {
  // desarrollar la funcion aqui
  const boton = document.querySelector('button')
  boton.disabled = true
  boton.innerHTML = 'Cargando...'

  localStorage.setItem("user", JSON.stringify(estadoUsuario));

  this.setTimeout( () => { 
    location.replace('usuario.html')
  }, 3000)
  
}
