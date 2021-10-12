"use strict"
//Menu responsive
const btnMenu = document.querySelector('.btn-menu')
btnMenu.addEventListener('click',()=>{
  document.querySelector('.barras').classList.toggle('icon-active')
  document.querySelector('.barras').classList.toggle('icon-desactive')
  document.querySelector('.cerrar').classList.toggle('icon-active')
  document.querySelector('.cerrar').classList.toggle('icon-desactive')

  document.querySelector('.menu').classList.toggle('menu-active')
})

let fotosDesktop = ['images/proyecto1.jpg','images/proyecto2.jpg','images/proyecto3.jpg','images/proyecto4.jpg']
let fotosMovil = ['images/proyecto1Movil.jpg','images/proyecto2Movil.jpg','images/proyecto3Movil.jpg','images/proyecto4Movil.jpg']
const imgs = document.querySelectorAll('.img-proyectos')
let mql = window.matchMedia('(max-width: 575px)')


//imagenes de proyectos que cambian cuando es responsives
function screenTest(e) {
    for (let i = 0; i < imgs.length; i++) {
        if (e.matches) {
          imgs[i].src = fotosMovil[i]
        }else{
          imgs[i].src = fotosDesktop[i]
          
        }
      }
  
}

screenTest(mql)
mql.addEventListener('change', screenTest, false);

// mql.onchange = function() {
//   console.log(mql);
// }

//ventana modal
const ventana = document.querySelectorAll('.skill-item')
for (let i = 0; i < ventana.length; i++) {
  ventana[i].addEventListener('click',()=>{
    mostrarMensaje(i)
  })
}

function mostrarMensaje(num){
  const tituloModal = document.getElementById('exampleModalLabel')
  const modalCuerpo = document.querySelector('.modal-body')
  switch (num) {
    case 0:
      tituloModal.textContent = 'HTML'
      modalCuerpo.innerHTML = `<p class="text-center">Nivel de manejo: <span>Intermedio</span>`      
      break;
    case 1:
      tituloModal.textContent = 'CSS'
      modalCuerpo.innerHTML = `<p class="text-center">Nivel de manejo: <span>Intermedio</span>`
      break;
    case 2:
        tituloModal.textContent = 'Javascript'
        modalCuerpo.innerHTML = `<p class="text-center">Nivel de manejo: <span>Intermedio</span>`
        break;
    case 3:
        tituloModal.textContent = 'Bootstrap'
        modalCuerpo.innerHTML = `<p class="text-center">Nivel de manejo: <span>Intermedio</span></p>`
        break;
    case 4:
        tituloModal.textContent = 'Node Js'
        modalCuerpo.innerHTML = `<p class="text-center">Nivel de manejo: <span>Intermedio</span></p>`
        break;
    case 5:
        tituloModal.textContent = 'GIT'
        modalCuerpo.innerHTML = `<p class="text-center">Nivel de manejo: <span>Intermedio</span></p>`
        break;
    case 6:
        tituloModal.textContent = 'Github'
        modalCuerpo.innerHTML = `<p class="text-center">Nivel de manejo: <span>Avanzado</span></p>`
        break;
    case 7:
        tituloModal.textContent = 'Photoshop'
        modalCuerpo.innerHTML = `<p class="text-center">Nivel de manejo: <span>Intermedio</span></p>`
        break;
  
    default:
      tituloModal.textContent = 'Todavia no agregado'
      break;
  }
}

//Scroll reveal
let reveals = document.querySelectorAll('.reveal')
for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top
    let revealPoint = 150
    
    if(revealPoint < windowHeight - revealPoint){
        reveals[i].classList.add('active')

    }
    else{
        reveals[i].classList.remove('active')
    }
  
}

