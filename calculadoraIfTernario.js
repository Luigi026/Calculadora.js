//CACLCULADORA CON IF TERNARIO

const { log } = require('console');
const { argv } = require('process');

const operacion = argv[3];
const numeroA = +argv[2];
const numeroB = +argv[4];

const sumar = require('./sumar');                
const restar = require('./restar');              
const multiplicar = require('./multiplicar');    
const dividir = require('./dividir');
const calculaCircunferencia = require('./valorPi');
require('colors');


//CALCULADORA CON IF TERNARIO:


operacion === '+' ? log('\n El resultado es : '.green, `${sumar(numeroA,numeroB)}\n`) :
operacion === '-' ? log('\n El resultado es : '.green, `${restar(numeroA,numeroB)}\n`) : 
operacion === '*' ? log('\n El resultado es : '.green, `${multiplicar(numeroA,numeroB)}\n`) : 
operacion === '/' ? log('\n El resultado es : '.green, `${dividir(numeroA,numeroB)}\n`) :
operacion === 'cos' ? log('\n El resultado es: '.green, `${Math.cos(numeroA)}\n`) :
operacion === 'raiz2' ? log('\n El resultado es '.green, `${Math.sqrt(numeroA)}\n` ) :
operacion === 'raiz3' ? log('\n El resultado es :'.green, `${Math.cbrt(numeroA)}\n`) :
operacion === 'pi' ? log('\n El resultado es :'.green, `${calculaCircunferencia(numeroA)}\n`) : 
log('\n     Se espera una operacion ...\n'.red);



