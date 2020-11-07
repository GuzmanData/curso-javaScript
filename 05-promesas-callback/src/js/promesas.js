const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spyder: {
        nombre: 'Spyderman',
        poder: 'La mejor reaccion alergica a las picaduras de arañas'
    }
}


export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    // const promesa = new Promise();

    return new Promise((resolve, reject) => {

        if (heroe) {

            setTimeout(() => {
                resolve(heroe);
            }, 1000);
        } else {
            reject(`No existe un heroe con el id ${id}`)
        }

    });

}
//función asincrona
export const buscarHeroeAsync = async (id) => {

    const heroe = heroes[id];

    if (heroe) {
        return heroe;
    } else {
        throw `No existe un heroe con el id ${id}`;
        // throw Error(`No existe un heroe con el id ${id}`);
    }



}

const promesaLenta = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa lenta'), 2000)
});
const promesaMedia = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa media'), 1500)
});
const promesaRapida = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa rapida'), 1000)
});


export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}

