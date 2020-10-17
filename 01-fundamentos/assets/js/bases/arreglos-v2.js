//propiedades y metodos de los arreglos

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chorno']

console.log('largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero,ultimo})

juegos.forEach( (elemento,indice,arr) => {
    console.log(elemento,indice,arr)

});

//insertar un nuevo elemente
let nuevaLongitud = juegos.push('F-zero');
console.log({nuevaLongitud, juegos});

//insertar al principio
nuevaLongitud = juegos.unshift('Fiere Emblem')
console.log({nuevaLongitud, juegos});

//borrar el del final
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//borrar un elemento un una posición en especifico
let pos = 1;
let juegosBorrados = juegos.splice(pos,1);
console.log({juegosBorrados, juegos});

//conocer en que indice se encuentra un elemento, si devuelve -1 significa que no encuentra el valor en el indice
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex})

