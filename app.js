const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(archivo => console.log(archivo.red, 'creado'))
    .catch(err => console.log(err));