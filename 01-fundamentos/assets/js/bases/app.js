// console.log('Hola mundo');

// Variables
// let a = 10;
// var b = 10; // no recomendado usr el var, forma antigua
// const c = 10;
// c = 20; no se pueda hacer



let a = 10, b = 10, c = 10, d = 10, x = a + b;

let saludos = 'Hola ',
    superHero1 = "Spiderman"

const saludosHeroe = saludos + superHero1

console.log(x)
console.warn(x)
console.error(x)
console.info(x)

console.log('a', a)
console.log('b', b)
console.log('c', c) 

console.log({a})
console.log({b})
console.log({c})

//dar css en la consola
console.log('%c Mis variables', 'color:blue;font-weight:bold')

console.table({a, b, c, d, x,  saludos, superHero1})

alert('Hola desde app.js')

var miNombre = "Carlos"