

let a = 10;

if (a >= 10) {
    console.log('A es es mayor o igual que 10');
} else {
    console.log('A es menor que 10');
}

console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log({dia})


//dos iguales evalua que sea igual, sin importar el tipo
// === evalua que sea exactamente igual
if ( dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} 


//sin usar if, else o switch, unicamento objetos
dia = 33;
const dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
console.log(dias[dia] || 'día no valido');

//con objetos literal
const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'vienres',
    6: 'sabado',
}

console.log(diasLetras[dia]  || 'día no valido');





