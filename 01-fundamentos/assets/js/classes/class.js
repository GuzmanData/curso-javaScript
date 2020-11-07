

class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

static mensaje() {

    console.log( this.nombre ); // undefined

    console.log('Hola a todos soy un metodo estatico');

}

    nombre;
    codigo;
    frase;
    comida;

    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {

        //  if ( !nombre) throw Error('Necesitamos el nombre');
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida) {

        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {

        return `La comida favorita de ${this.nombre} es ${this.comida}`


    }




    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {

        // se puede llamar un metodo dentro de otro metodo
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }


}


const spiderMan = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironMan = new Persona('Tony Stark', 'Iron Man', 'Yo soy Iron Man');


console.log(spiderMan);
//console.log(ironMan);


spiderMan.quienSoy();
//ironMan.quienSoy();


spiderMan.miFrase();
//ironMan.miFrase();

spiderMan.setComidaFavorita = 'El pie de cereza de la tía May';

//console.log(spiderMan);
//console.log(spiderMan.getComidaFavorita);

Persona._conteo = 2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();


// Crear metodo statico fuera de la clase

Persona.propiedadExterna = 'Hola mundo';

console.log(Persona.propiedadExterna);
