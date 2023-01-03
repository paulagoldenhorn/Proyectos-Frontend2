// nuevo array con listado de planes
const planesMensuales = [{
        tipo: "Básico",
        costo: 300,
        descripcion: "Podes escuchar música sin límites todo el mes."
    },
    {
        tipo: "Dúo",
        costo: 450,
        descripcion: "Música ilimitada para vos y alguien más."
    },
    {
        tipo: "Familiar",
        costo: 600,
        descripcion: "El mejor plan, hasta un total de 5 miembros."
    },
];

window.addEventListener('load', function () {
    const footer = document.querySelector('footer');

    let contador = 0
    
    const intervalo = this.setInterval(() => {
        let posicion = contador % 3;
        footer.innerHTML = `<p>Plan: <strong>${planesMensuales[posicion].tipo}</strong> $ ${planesMensuales[posicion].costo}</p><p>${planesMensuales[posicion].descripcion}</p>`
        // aumentamos el contador
        contador++;

    }, 3000)
    // añadimos la escucha del doble click en el footer para frenar el intervalo
    footer.addEventListener('dblclick', function () {
        clearInterval(intervalo);
        console.log("---> Frenamos el intervalo");
    })
})


/* -------------------------------------------------------------------------- */
/*                               MESA DE TRABAJO                              */
/* -------------------------------------------------------------------------- */
// Vamos a utilizar el setTimeout para preguntarle al usuario despues de unos segundos.
// 1- Una vez cargada la página y pasados 12 segundos debemos preguntarle al usuario si desea
// conocer más música (podemos usar un confirm).
// 2- Si el usuario confirma debemos abrir una nueva pestaña en -> https://open.spotify.com/
// 3- Si el usuario cancela debemos agregar un parrafo dentro del div '#perfil'(sin eliminar nada dentro)
// 4- El parrafo agregado debe ser de color verde y decir: "Usuario oficial de Spotifront"
// 5- Por ultimo, si ese parrafo es clickeado, debe mostrar una alerta al usuario que diga: "Gracias por confiar en nosotros."
window.addEventListener('load', () => {
    let respUser
    this.setTimeout( () => {
        respUser = confirm('Desea conocer mas musica?') 
        
        if (respUser) {
            window.location.href = 'https://open.spotify.com/'
        } else {
           const perfil = document.querySelector('.perfil')
           let parrafo = document.createElement('p')
           parrafo.innerText = "Usuario oficial de Spotifront"
           parrafo.style.color = 'green'
           
           perfil.appendChild(parrafo)
    
           parrafo.addEventListener('click', () => {
            alert("Gracias por confiar en nosotros.")
           })
        }
    }, 12000)
})


/* --------------------------- EJERTCITACIÓN EXTRA -------------------------- */
// Vamos a practicar la utilización del objeto Date.
// La idea es añadir otro parrafo dentro de '#perfil' que muestre internamente un texto que diga:
// "El día de hoy es 3 de Noviembre del año 2022."
// ☝ Este texto siemre debe corresponder con la fecha del día que está transcurriendo.

function aniadirDate() {
    const perfil = document.querySelector('.perfil')
    let parrafo = document.createElement('p')
    let dia = new Date()

    let meses = ['Enero', 'Febreo', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    parrafo.innerText = `El día de hoy es ${dia.getDate()} de ${meses[dia.getMonth()]} del año ${dia.getFullYear()}`
    perfil.appendChild(parrafo)
}
aniadirDate()