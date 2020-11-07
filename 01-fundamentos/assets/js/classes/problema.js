

// como se solia hacer antes, no se debe hacer
const carlos = {
    nombre: 'Carlos',
    edad: 24,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15
}

const melissa = {
    nombre: 'Melissa',
    edad: 35
}

//carlos.imprimir();



// otra forma 

function Persona(nombre, edad) {

    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }


}

// creamos una instancia de persona
const maria = new Persona('María', 23);
const melissa2 = new Persona('Melissa', 27);

console.log(maria);

maria.imprimir();
melissa2.imprimir();


















