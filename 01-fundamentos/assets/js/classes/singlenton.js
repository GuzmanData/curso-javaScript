


class Singlenton {
    
    static instancia; 
    nombre = '';

    constructor( nombre = '' ) {

        if ( !!Singlenton.instancia ) {

            return Singlenton.instancia
        }

        Singlenton.instancia = this;
        this.nombre = nombre;

        // return this;

    }

}

const instancia1 = new Singlenton('Ironman');
const instancia2 = new Singlenton('Spiderman');


console.log('Nombre en la instancia1 es: ' +  instancia1.nombre);
console.log('Nombre en la instancia2 es: ' +  instancia2.nombre);