// Calculadora con Switch

const { log } = require('console');

// const argv = require('process').argv;
const { argv } = require('process');
require('colors')

const operacion = argv[3];
const numeroA = +argv[2];
const numeroB = +argv[4];

const sumar = require('./sumar');                
const restar = require('./restar');              
const multiplicar = require('./multiplicar');    
const dividir = require('./dividir');  
const calculaCircunferencia = require('./valorPi');

switch (operacion) {
    case "+":
        log('\n El resultado es :'.green, `${sumar(numeroA,numeroB)}\n`);
        break;
    case "-":
        log('\n El resultado es :'.green, `${restar(numeroA,numeroB)}\n`);
        break;
    case "*":
        log('\n El resultado es :'.green, `${multiplicar(numeroA,numeroB)}\n`);
        break;
    case "/":
        log('\n El resultado es :'.green, `${dividir(numeroA,numeroB)}\n`);
        break;
    case "cos":
        log('\n El resultado es :'.green, `${Math.cos(numeroA)}\n`);
        break;   
    case "pi":
        log('\n El resultado es :'.green, `${calculaCircunferencia(numeroA)}\n`);
        break;        
    case "raiz2":
        log('\n El resultado es :'.green, `${Math.sqrt(numeroA)}\n`);
        break; 
    case "raiz3":
        log('\n El resultado es :'.green, `${Math.cbrt(numeroA)}\n`);   
        break; 
    default:
        log('\n  Se esperaba una operacion...\n'.red); 
        break

}
