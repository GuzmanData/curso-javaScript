let personaje = {
    nombre: 'Tony Stark',
    codName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};


console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Lat', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo trajes', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';
console.log('Vivo', personaje[x])
console.log('Ultima pelicula', personaje["ultima-pelicula"]);

//más detalles
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

// convertimos el literal en un arreglo
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje); // evitar que se pueda modificar el litear

personaje.dinero = 10000000000;
personaje.ubicacion = 'Costa rica';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log('Propiedades', propiedades);
console.log('valores', valores);

