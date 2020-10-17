function saludar(nombre) {
    console.log(arguments)
    console.log('Hola ' + nombre);
    return 1;
    //esta parte del código no se va a ejecutar
    console.log('Soy un código que esta despues del return')
}

//funcion anononima
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoDeSaludar = saludar('Carlos', 40, true, 'Costa Rica');
console.log({retornoDeSaludar});
saludar2('Carlos');
saludarFlecha();
saludarFlecha2('Ricardo');


function sumar(a,b) {
    return a + b
}

//una sola linea
const sumar2 = (a,b) => a + b


console.log(sumar(1,2));

console.log(sumar2(1,2));


function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio());
console.log(getAleatorio2());

