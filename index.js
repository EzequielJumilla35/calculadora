const displayValorAnterior = document.querySelector("#valor-anterior")
const displayValorActual = document.querySelector("#valor-actual")
const botonesNumeros = document.querySelectorAll(".numero")
const botonOperadores = document.querySelectorAll(".operador")


const display = new Display(displayValorActual,displayValorAnterior)

botonesNumeros.forEach(boton =>{
boton.addEventListener('click',() => {    display.agregarNumero(boton.innerHTML)})
})
    
botonOperadores.forEach(boton => {
    boton.addEventListener('click', () =>display.computar(boton.value) )
} )