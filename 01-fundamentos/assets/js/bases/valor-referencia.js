//los primitivos son pasados por valor
let a = 10;
let b = a;
a  = 30;
console.log({a,b});

//los objetos son pasados por referencias
let juan = { nombre: 'Juan'}
//rompemos el paso por referencia
let ana = { ...juan };
ana.nombre = 'Ana';

console.log({juan, ana})

//romper el paso por referencia

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony})


//Arreglos
const frutas = ['Manzana', 'Peras', 'Piña'];
//romper referencia
//const otrasFrutas = [...frutas];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas})