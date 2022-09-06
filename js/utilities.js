// COME FUNZIONA UN OBJECT vs COME SI SCRIVE UN ARRAY

const unArrayACaso = ['pippo', 'pluto', ['paperino', 'qui', 'quo', 'qua']];
console.log('questo è un array');
console.log('index 0', unArrayACaso[0]);
console.log('index 1', unArrayACaso[1]);
console.log('index 2', unArrayACaso[2]);
console.log('index 2 - 2', unArrayACaso[2][2]);
console.log('array intero', unArrayACaso);

console.log(' ');

const traduzioneArrayInObject = {
    0: 'pippo',
    1: 'pluto',
    2: ['paperino', 'qui', 'quo', 'qua']
};
console.log('questo è un object');
console.log('index 0', traduzioneArrayInObject[0]);
console.log('index 1', traduzioneArrayInObject[1]);
console.log('index 2', traduzioneArrayInObject[2]);
console.log('index 2 - 2', traduzioneArrayInObject[2][2]);
console.log('object intero', traduzioneArrayInObject);