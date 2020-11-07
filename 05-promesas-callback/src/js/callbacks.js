const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Iron Man',
        poder: 'Absurda cantidad de dinero'
    },
    spyder: {
        nombre: 'Spyderman',
        poder: 'La mejor reaccion alergica a las picaduras de arañas'
    }
}


export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];

    if ( heroe ) {
        callback(null, heroe);

    } else {
        //un error
        callback(`No existe un héroe con el id ${id}`);

    }

    // callback(heroe);


}