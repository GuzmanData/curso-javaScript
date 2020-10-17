const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And'); // true si todos los valores son verdaderos

console.log(true && true);
console.log(true && false);

console.log('====================');
console.log( regresaFalse() && regresaTrue()); //false
console.log( regresaTrue() && regresaFalse()); //false

console.log('4 condiciones ', true && true && true && false);
console.warn('OR');

console.log(true || false);

console.log( regresaFalse() || regresaTrue()); //true
console.log( regresaTrue() || regresaFalse()); //true



console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;


const a1 = true && 'Hola mundo' && 150;

const a2 = 'Hola' && ' Mundo' && soyFalse;
const a3 = soyFalse || 'ya no soy falso';
console.log({ a1, a2, a3});




cons




