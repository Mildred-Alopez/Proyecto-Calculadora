const input = document.querySelector('#input-pantalla')
const btnNumero = document.querySelectorAll('.btn-numero')
const btnLimpiar = document.querySelector('.btn-borrar')
const btnIgual = document.querySelector('.btn-igual')
const btnSumar = document.querySelector('#plus')
const btnMultiplicar = document.querySelector('#times')
const btnDividir = document.querySelector('#divided')
const btnRestar = document.querySelector('#minus')

let primerN = '0'
let Snumero = '0'
let signo = ''


btnNumero.forEach((btn) => {
    btn.addEventListener('click', () => {
        input.value += btn.value
    })
})



btnSumar.addEventListener('click', () => {
    primerN = input.value
    input.value = ''
    signo = '+'
})


btnMultiplicar.addEventListener('click', () => {
    primerN = input.value
    input.value = ''
    signo = '*'
})

btnDividir.addEventListener('click', () => {
    primerN = input.value
    input.value = ''
    signo = '/'
})

btnRestar.addEventListener('click', () => {
    primerN = input.value
    console.log(primerN)
    input.value = ''
    signo = '-'
})


btnIgual.addEventListener('click', () => {
    Snumero = input.value

    if (signo == '+') {
        total = parseInt(primerN) + parseInt(Snumero)
        input.value = total
    } else if (signo == '*') {
        total = parseInt(primerN) * parseInt(Snumero)
        input.value = total
    } else if (signo == '/') {
        total = parseInt(primerN) / parseInt(Snumero)
        input.value = total
    } else if (signo == '-') {
        total = parseInt(primerN) - parseInt(Snumero)
        input.value = total
        console.log(total)
    }
})


btnLimpiar.addEventListener('click', () => {
    input.value = ''
})
