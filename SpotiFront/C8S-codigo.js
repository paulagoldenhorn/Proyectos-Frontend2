/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array
// - cambiar el estado del like
// - volver a renderizar
function marcarFavorito() {
  // seleccionamos todos lo botones de like
  const botonesLike = document.querySelectorAll(".fa-heart");

  botonesLike.forEach((boton) => {
    // 👇 por cada boton escuchamos su click
    boton.addEventListener("click", function (evento) {
      // recorreremos el listado de albumes
      albumesFamosos.forEach((album) => {
        // si encontramos al que coincide con el boton apretado,
        // le cambiamos la propiedad like por lo contrario
        if (album.id === boton.id) {
          album.like = !album.like;
        }
      });
      //👇 post click debemos renderizar nuevamente las tarjetas
      renderizarAlbumes(albumesFamosos);
      //👇 post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminó lo anterior
      marcarFavorito();
      // Esto para que cambie el numero de favoritos totales
      mostrarDatosEnPerfil()
    });
  });
}
marcarFavorito();

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del album buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que sean nuevamente aplicadas.

function eliminarAlbum() {
  // desarrollar la función 👇
  document.addEventListener("keydown", (event) => {

    let nombreAlbumEliminar
    if (event.key.toLowerCase() === "f") {
      nombreAlbumEliminar = prompt('¿Que album desea eliminar?')
    }
    // Asignamos a la BD un nuevo array con todos los albumes menos el que deseamos eliminar
    albumesFamosos = albumesFamosos.filter(album => album.nombre.toLowerCase() !== nombreAlbumEliminar.toLowerCase())
    
    renderizarAlbumes(albumesFamosos)
    marcarFavorito()
    mostrarDatosEnPerfil()

  });

}
eliminarAlbum();