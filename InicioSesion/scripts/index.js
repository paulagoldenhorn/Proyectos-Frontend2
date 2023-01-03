// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

// ACTIVIDAD 1

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.
// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.
// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."
// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
  // a) Que el primer input sea un email válido.
  // b) Que la contraseña tenga al menos 5 caracteres.
  // c) Que los datos ingresados corresponden a una persona que se encuentre registrada en la 
  // base de datos.
// En caso de que alguna de las validaciones no sea exitosa, se deberá mostrar un mensaje de error que diga 
// "Alguno de los datos ingresados son incorrectos"
// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
- Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
en internet frases como "Validar email con Javascript o similar".

- Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
estilos predefinidos para ayudarte a completar la actividad.

- También te dejamos algunos mensajes que te pueden ser de utilidad:

Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

¡Manos a la obra!
*/

/* CAPTURAR ELM */
const main = document.querySelector('main')
const formulario = document.forms[0]
const campoEmail = document.getElementById('email-input')
const campoPassword = document.getElementById('password-input')
const btnIniciarSesion = document.querySelector('button')

/* CREAR ELM*/
const btnCerrarSesion = document.createElement('button')
btnCerrarSesion.classList.add('login-btn')
btnCerrarSesion.innerHTML = 'Cerrar sesión'

const mensajeError = document.createElement('small')
mensajeError.innerHTML = 'Alguno de los datos ingresados son incorrectos'
const mensajeExito = document.createElement('h1')
mensajeExito.innerHTML = 'Bienvenido al sitio'

/* VALOR INPUTS */
let valorCampoEmail
let valorCampoPass

campoEmail.addEventListener('input', (e) => {
  valorCampoEmail = e.target.value
})
campoPassword.addEventListener('input', (e) => {
  valorCampoPass = e.target.value
})

/* EVENTO INICIAR SESION */
btnIniciarSesion.addEventListener('click', () => {
  console.log(valorCampoEmail);
  console.log(valorCampoPass);
  if (mensajeError) {
    mensajeError.remove()
  }

  btnIniciarSesion.innerHTML = "Iniciando sesión..."

  setTimeout(() => {

    if (validarUsuario()) {
      almacenarStorage()
      renderizarIndex()
    } 
    else {
      formulario.appendChild(mensajeError)
    }
    
    btnIniciarSesion.innerHTML = 'Iniciar sesión'

  }, 3000);

})

function renderizarIndex() {
  formulario.classList.add('hidden')
  main.innerHTML = "" 
  main.appendChild(mensajeExito)
  main.appendChild(btnCerrarSesion)
}

/* EMAIL */
function validarEmail(email) {

  let validacion = false

  const regex = new RegExp(/^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-]/)
  if (regex.test(email)) {
    validacion = true
  }

  return validacion

}

/* PASSWORD */
function validarPassword(password) {

  let validacion = false

  if (password.length >= 5) {
    validacion = true
  }

  return validacion

}

/* USUARIO */
function validarUsuario() {

  let validacion = false

  if (validarEmail(valorCampoEmail) && validarPassword(valorCampoPass)) {

    baseDeDatos.usuarios.forEach(usuario => {

      if (usuario.email === valorCampoEmail && usuario.password === valorCampoPass) {

        validacion = true
        mensajeExito.innerHTML += ' ' + usuario.name

      }

    });

  }

  return validacion

}


// ACTIVIDAD 2

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.
// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
// persona y un botón de "Cerrar Sesión".
// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
// recargue la página. Para ello, deberás validar si existe información del usuario al momento en
// que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.
// 4) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
// la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
// la página para mostrar nuevamente el formulario de login.
/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
 */

/* LOCAL STORAGE */
function almacenarStorage() {

  if (localStorage.length === 0) {

    baseDeDatos.usuarios.forEach(usuario => {

      if (usuario.email === valorCampoEmail && usuario.password === valorCampoPass) {

        localStorage.setItem('nombre', usuario.name)
        localStorage.setItem('email', usuario.email)

      }

    });

  }

}

/* EVENTO CERRAR SESION */
btnCerrarSesion.addEventListener('click', () => {

    localStorage.clear()

    renderizarSesion()

    setTimeout(() => {
      window.location.reload()
    }, 2000)

})

function renderizarSesion() {
  main.innerHTML = ""
  const mensajeSesionCerrada = document.createElement('h1')
  mensajeSesionCerrada.innerHTML = 'Sesión cerrada exitosamente'
  main.appendChild(mensajeSesionCerrada)
}