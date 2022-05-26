const resultados = document.querySelector('.pantalla')
const teclas = document.querySelectorAll('.tecla')
const teclaOperaciones = document.querySelectorAll('.operador')

const pantalla = new Pantalla(valor);

console.log(calculadora.div(10, 0))

teclas.forEach(tecla => {
    tecla.addEventListener('click', function() {
        pantalla.mostrarNumeros(tecla.value)
    })
})

