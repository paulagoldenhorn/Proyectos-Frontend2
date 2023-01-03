// Vamos a crear una funcion para chequear si el usuario puede estar en la vista.
function chequearUsuarioValido(){

    const user = JSON.parse(localStorage.getItem('user'));

    if(user === null){
        location.replace('./')
        localStorage.clear();
    }else{
         // 👇utilizamos destructuring para separar las variables
         const { password, rol, terminos, email } = user;
         console.log("User:");
         console.log(`-> ${email}\n-> ${password}\n-> ${rol}\n-> ${terminos}`);
     
    }
}


function componente({nombre, apellido}) {
    console.log(nombre);
    console.log(apellido);
}
