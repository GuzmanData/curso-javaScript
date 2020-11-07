
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import './styles.css';
import { buscarHeroe } from './js/promesas';


const heroeId1 = 'capi';
const heroeId2 = 'spyder2';
const heroeId3 = 'iron';

// buscarHeroe(heroeId1, (err, heroe1) => {

//     // if( err ) {
//     //     console.error(err);
//     // } else{
//     //     console.log(heroe);
//     // }

//     if (err) { return console.error(err); }

//     buscarHeroe(heroeId2, (err, heroe2) => {

//         if (err) { return console.error(err); }

//         onsole.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`)



//     });

// });

// buscarHeroe(heroeId1).then(heroe1 => {
//     // console.log(`Enviando a ${heroe.nomre} a la misión`)
//     buscarHeroe(heroeId2).then(heroe2 => {
//         console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`)
//     });
// });

//ejecutar promesas en paralelo
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
    .then(([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`)
    }).catch(err=>{
        alert(err);
    }).finally(()=>{
        console.log('Se termino el promise.all')
    });

console.log('fin del programa');