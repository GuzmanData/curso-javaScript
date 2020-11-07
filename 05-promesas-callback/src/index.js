
// import './styles.css';
// import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";
// import {}

const { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } = require("./js/await");

// const { buscarHeroe, buscarHeroeAsync } = require("./js/promesas");

// // promesaLenta.then(console.log);
// // promesaMedia.then(console.log);
// // promesaRapida.then(console.log);

// //Nos permite ejecutar todas las promesas y recuperar la que se resuelve más rapido
// // Promise.race([promesaLenta, promesaMedia, promesaRapida])
// // .then(mensaje => console.log(mensaje));


// buscarHeroe('cap2')
// .then(console.log)
// .catch(console.warn);

// buscarHeroeAsync('capi')
// .then(console.log)
// .catch(console.warn)

// console.time('await');

// obtenerHeroeAwait('capi2')
//     .then((heroe) => {
//         console.log(heroe);
//         console.timeEnd('await');

//     }).catch(console.warn);



heroesCiclo();
heroeIfAwait('iron');




