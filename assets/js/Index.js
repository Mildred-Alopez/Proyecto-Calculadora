let input = document.querySelector('#input-pantalla')
let btnNumeros = document.querySelectorAll('.btn-numero')
let btnsAccion = document.querySelectorAll('.accion')
let clear = document.querySelector('.borrar')

let primerNumero = 0;
let SegundoNumero = 0;
let signo = ''
let acumulador = 0
let primeraVez = true;


btnNumeros.forEach((btn) => {
    btn.addEventListener('click', () => {
        input.value += btn.value
    })
})

const suma = () => {
    acumulador = acumulador + primerNumero
}

const resta = () => {
    if (primeraVez) {
        acumulador = primerNumero - Math.abs(acumulador)
        primeraVez = false;
    } else if (acumulador >= 0) {
        acumulador = Math.abs(acumulador) - primerNumero
    } else {
        acumulador = acumulador - primerNumero
    }
}

const multiplicacion = () => {
    if (acumulador == 0) {
        acumulador = 1
        acumulador = acumulador * primerNumero
    } else {
        acumulador = acumulador * primerNumero
    }

}

const division = () => {
    if (acumulador == 0) {
        acumulador = primerNumero
    } else {
        acumulador = acumulador / primerNumero
    }
}

const igual = () => {

    if (signo == '+') {
        SegundoNumero = parseInt(input.value)
        acumulador = acumulador + SegundoNumero
        input.value = acumulador

    } else if (signo == '-') {
        SegundoNumero = parseInt(input.value)
        acumulador = acumulador - SegundoNumero;
        primeraVez = true
        input.value = acumulador

    } else if (signo == '*') {
        SegundoNumero = parseInt(input.value)
        acumulador = acumulador * SegundoNumero;
        input.value = acumulador

    } else if (signo == '/') {
        SegundoNumero = parseInt(input.value)
        acumulador = acumulador / SegundoNumero;
        input.value = acumulador
    }
}
btnsAccion.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(input.value == ''){
            alert('ingrese un numero')

        }else if (e.target.value != '=' ) {

            primerNumero = parseInt(input.value)

            switch (e.target.value) {

                case '+':
                    if (signo != '') {
                        igual()
                    } else {
                        suma()
                    }
                    break;

                case '-':
                    if (signo != '') {
                        igual()
                    } else {
                        resta()
                    }
                    break;

                case '*':
                    if (signo != '') {
                        igual()
                    } else {
                        multiplicacion()
                    }
                    break;

                case '/':
                    if (signo != '') {
                        igual()
                    } else {
                        division()
                    }
                    break;
            }

            input.value = ''
            signo = e.target.value

        } else{
            igual()
            signo = ''
            acumulador = 0
            
        }
    })
})

clear.addEventListener('click', () => {
    input.value = ''
    acumulador = 0
    primerNumero = 0
    SegundoNumero = 0
    primeraVez = true;
    signo = ''

})
