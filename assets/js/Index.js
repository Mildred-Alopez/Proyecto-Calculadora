let input = document.querySelector('#input-pantalla')
let btnNumeros = document.querySelectorAll('.btn-numero')
let btnsAccion = document.querySelectorAll('.accion')
let clear = document.querySelector('.borrar')

let primerNumero = 0;
let SegundoNumero = 0;
let signo = ''
let acumulador = 0
let primeraVez = true;
let acumuladorMultiplicar = 1
let acumuladorDividir = true


btnNumeros.forEach((btn) => {
    btn.addEventListener('click', () => {
        input.value += btn.value
    })
})

btnsAccion.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.value == '+' || e.target.value == '*'
            || e.target.value == '-' || e.target.value == '/') {

            primerNumero = parseInt(input.value)
            console.log(primerNumero)
            switch (e.target.value) {

                case '+':
                    acumulador = acumulador + primerNumero
                    break;

                case '-':
                    if (primeraVez) {
                        acumulador = primerNumero - Math.abs(acumulador)
                        console.log(acumulador)
                        primeraVez = false;
                    } else if (acumulador >= 0) {
                        acumulador = Math.abs(acumulador) - primerNumero
                    }
                    break;

                case '*':
                    acumuladorMultiplicar = acumuladorMultiplicar * primerNumero
                    break;

                case '/':
                    if (acumuladorDividir) {
                        acumulador = acumulador + primerNumero
                        console.log(acumulador)
                        acumuladorDividir = false;
                    } else {
                        acumulador = acumulador / primerNumero
                        console.log(acumulador)
                    }
                    break;
            }

            input.value = ''
            signo = e.target.value

        } else if (e.target.value == '=') {
            
            if (signo == '+') {
                SegundoNumero = parseInt(input.value)
                let resultado = acumulador + SegundoNumero
                input.value = resultado

            } else if (signo == '-') {
                SegundoNumero = parseInt(input.value)
                let resultado = acumulador - SegundoNumero;
                primeraVez = true
                input.value = resultado

            } else if (signo == '*') {
                SegundoNumero = parseInt(input.value)
                let resultado = acumuladorMultiplicar * SegundoNumero;
                acumuladorMultiplicar = 1
                input.value = resultado

            } else if (signo == '/') {
                SegundoNumero = parseInt(input.value)
                let resultado = acumulador / SegundoNumero;
                acumuladorDividir = true
                console.log(acumuladorDividir)
                input.value = resultado
            }
            acumulador = 0

        }
    })
})

clear.addEventListener('click', () => {
    input.value = ''
    acumuladorMultiplicar = 1
    acumuladorDividir = true
    primeraVez = true
})
