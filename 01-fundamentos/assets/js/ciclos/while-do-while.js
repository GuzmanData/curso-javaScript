

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

/*
while( i < carros.length ) {

    console.log(carros[i])
    i++;
}
*/


// estas condiciones harian que el bucle no se ejecuta undefined , null false
console.warn('while')
while( i < carros.length ) {
    if( i == 1) {
       // break;
       i++;
       continue;
    }
    console.log(carros[i])
    i++;
}




console.warn('Do while')
let j = 0;

do {

    console.log(j)
    j++;

} while (carros[j]) {




}