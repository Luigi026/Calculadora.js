const argv = require('process').argv;
const { log } = require('console');

const operacion = argv[3];   // agrego el signo "+" para parsearlo y  
const numeroA = +argv[2];    // me sume los numero pasados por consola 
const numeroB = +argv[4];    // y no me los concatene   
require('colors');                               // Tammbien cambie el indice de la operacion en medio de los numeros                           

//Al usar el require() estoy llamando a las funciones
//hechas por compañeros de forma remota 
//para ejecutarlas en el modulo calculadora
//por este motivo sacamos nuestras operaciones del codigo anterior y
//dicho esto sabemos que los modulos ya nos retornar las operaciones

const sumar = require('./sumar');                
const restar = require('./restar');              
const multiplicar = require('./multiplicar');    
const dividir = require('./dividir');    
const calculaCircunferencia = require('./valorPi');       
                                               
let resultado = '';

if (operacion == "+"){
    log('\nEl resultado es : '.green, `${resultado = sumar(numeroA,numeroB)}\n`);
}else if (operacion == "-"){
    log('\nEl resultado es : '.green, `${resultado = restar(numeroA,numeroB)}\n`);
}else if (operacion == "*"){
    log('\nEl resultado es : '.green, `${resultado = multiplicar(numeroA,numeroB)}\n`);
}else if (operacion == "/"){
    log('\nEl resultado es : '.green, `${resultado = dividir(numeroA,numeroB)}\n`);
}else if (operacion == "pi"){
    log('\nEl resultado es : '.green, `${resultado = calculaCircunferencia(numeroA)}\n`);
}else if (operacion == "cos"){
    log('\nEl resultado es : '.green, `${resultado = Math.cos(numeroA)}\n`);
}else if (operacion == "raiz2"){
    log('\nEl resultado es : '.green, `${resultado = Math.sqrt(numeroA)}\n`);
}else if (operacion == "raiz3"){
    log('\nEl resultado es : '.green, `${resultado = Math.cbrt(numeroA)}\n`);
}else{
    log('\n      Se espera una operacion...\n'.red);
}    

// log('El resultado es: '.green, resultado);


// Math.pow(base, exponente) elevado al cuadrado    /    Math.sqrt() raiz cuadrada   /    Math.PI  3.14
// pasar el archivo.zip por privado a fabian DH

