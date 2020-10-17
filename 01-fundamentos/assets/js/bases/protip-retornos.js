function crearPersona(nombre,apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

//otra forma de hacerlo
const crearPersona2 = (nombre,apellido) => ( { nombre,  apellido   })



const persona = crearPersona2('Carlos', 'Guzmán');
console.log({persona})


function imprimeArgumento ( ) {
    console.log(arguments)
}

//mandar los argumentos en las funciones de flechas
const imprimeArgumento2  = ( edad, ...args) => {
    //console.log({edad,args})
    return args
}

imprimeArgumento(10, true,'Carlos');

const [casado,vivo,nombre,saludo] = imprimeArgumento2(10, true,'Carlos');
console.log({casado,vivo,nombre,saludo});

const {apellido:nuevoApellido} = crearPersona2('Carlos', 'Guzmán');
console.log({nuevoApellido})



//--------------

const tony = {
    nombre: 'Tony Stark',
    codName: 'Ironman',
    vivo: false,
   // edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
};
/*
const imprimePropiedades = (personaje) => {
    console.log('nombre', personaje.nombre)
    console.log('codName', personaje.codName)
    console.log('vivo', personaje.vivo)
    console.log('edad', personaje.edad)
}
*/


const imprimePropiedades2 = ({nombre,codName,vivo,edad = 15,trajes}) => {

    console.log({nombre})
    console.log({codName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})


}
imprimePropiedades2(tony)