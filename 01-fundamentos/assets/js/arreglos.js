//no muy comun usarlo
//const arr = new Array(10);
//console.log(arr);
//const arr2 = [];

let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videojuegos});

//primera posicion
console.log(videojuegos[0]); 


let arregloCosas = [
    true,
    123,
    'Fernando',
    1 * 2,
    function(){},
    ()=>{},
    { a : 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]]
]

console.log({arregloCosas})
console.log(arregloCosas[0])
console.log(arregloCosas[2])
console.log(arregloCosas[7][3])
console.log(arregloCosas[7][4][1])