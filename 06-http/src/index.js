// import {init} from './js/chistes-page';
// import {obtenerUsuarios} from './js/http-provider';
// import {init} from './js/usuarios-page';
import * as CRUD  from './js/crud-provider'


// // init();


// // obtenerUsuarios().then(console.log);
// init();

// CRUD.getUsuario(2).then(console.log);
// CRUD.crearUsuario({
//     name: 'Fernando',
//     job: 'Carpintero'
// }).then(console.log);
// CRUD.actualizarUsuario(1,{
//     name: 'Carlos',
//     job: 'Developer'
// }).then(console.log)

CRUD.deleteUser(1).then(console.log);