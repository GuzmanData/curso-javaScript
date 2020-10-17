/*
* Dias de semana abrimos a las 11
* fines de semana abrimos a las 9
*/


//entrar a un sitio web para consultar si esta abierto






const dia = 1; //0: domingo, lunes: 1 .....
const horaActaul = 10;

let horaApertura;
let mensaje; // Esta abierto, esta cerrado, hoy  abrimos a las XX




//if ( dia === 0  || dia === 6 ) {
/*if([0,6].includes(dia)) {
    console.log('Fin de semana');
    horaApertura = 9;
}  else {
    console.log('Dia de semana');
    horaApertura = 7; 
}
*/
//operador ternario
horaApertura = ([0,6].includes(dia)) ? 9 : 11

/*
if ( horaActaul >= horaApertura ) {
    mensaje = 'Esta abierto';
} else {
    mensaje = + `Esta cerrado,  hoy abrimos a las ${horaApertura}`;
}
*/

mensaje = (horaApertura > horaApertura) ? 'Esta abierto' : `Esta cerrado,  hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});