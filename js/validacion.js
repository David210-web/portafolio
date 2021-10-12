"use strict"
//validar formulario

// const validarFormulario = ()=>{
//     let nombre,email,mensaje,expresion
//     nombre = document.getElementById('nombre').value
//     email = document.getElementById('email').value
//     mensaje = document.getElementById('mensaje').value
//     expresion = /\w+@\w+\.+[a-z]/
//     expresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
//     if(nombre === '' || email === '' || mensaje === ''){
//         alert('Por favor rellena todos los campos')
//         return false
//     }
//     else if(nombre.length < 2 || nombre.length > 30){
//         alert('nombre muy corto')
//         return false
//     }
//     else if(email.length > 100){
//         alert('email muy largo')
//         return false
//     }
//     else if(!expresion.test(email)){
//         alert('correo no valido')
//         return false
        
//     }
// }

let nombre,email,mensaje;
nombre = document.getElementById('nombre')
email = document.getElementById('email')
mensaje = document.getElementById('mensaje')

function validarFormulario() {
    let expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let nombrevalor = nombre.value
    let emailvalor = email.value
    let mensajevalor = mensaje.value

      if (nombrevalor === null ||nombrevalor.length < 3) {
          alert('nombre Invalido')
          return false
      }
      else if (emailvalor === null || emailvalor.length >= 101) {
              alert('email no valido')
              return false
      }
      else if (!expresion.test(emailvalor)) {
              alert('email no valido')
              return false
      }
      else if(mensajevalor === null || mensajevalor.length >= 501){
          alert('Mensaje largo o invalido por favor escribelo de nuevo crack')
      }
      else{
              console.log(emailvalor)
          }
}