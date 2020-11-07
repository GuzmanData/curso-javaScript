import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesId = ['capi', 'iron', 'spyder'];
const heroesPromesas = heroesId.map(id => buscarHeroe(id));

export const obtenerHeroesArr = async () => {

    return await Promise.all(heroesId.map(buscarHeroe));

    // const heroesArr = [];

    // for (const id of heroesId) {
    //     heroesArr.push(buscarHeroe(id));

    // }

    // return await Promise.all(heroesArr);
};



export const obtenerHeroeAwait = async (id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
        
    } catch (err) {

        console.log('CATCH!!!');
        console.log(err);
        throw err;
        // return {
        //     nombre: 'Sin nombre',
        //     poder: 'sin poder'
        // }
        
    }


}



export const heroesCiclo = async ()  => {

    console.time('HeroesCiclo');

    // const heroes = await Promise.all(heroesPromesas);
    // heroes.forEach(heroe => console.log(heroe) );

    for await(const heroe of heroesPromesas){
        console.log(heroe);
    }

    console.timeEnd('HeroesCiclo');

}


export const heroeIfAwait = async(id) => {
    if ( (await buscarHeroeAsync(id)).nombre === 'Ironman') {
        console.log('Es el mejor de todos');
    } else {
        console.log('naaaa...');
    }
}











