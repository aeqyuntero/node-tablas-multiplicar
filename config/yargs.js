const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Límite de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv) => {
        if (isNaN(argv.base)) {

            throw 'La base tiene que ser un número';

        }
        if (isNaN(argv.hasta) || (parseInt(argv.hasta) != argv.hasta) || argv.hasta < 1) {

            throw 'El límite debe ser un número entero mayor o igual a 1';

        }
        return true;
    })
    .argv;

module.exports = argv;