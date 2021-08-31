const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {

    try {

        let salida = '';
        let texto = '';
        const archivo = `tabla-${base}.txt`;

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} `.yellow + `*`.red + ` ${i}`.green + ` = `.red + `${base * i}\n`.blue;
            texto += `${base} * ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log('====================');
            console.log(`Tabla del: ${base}`.green);
            console.log('====================');
            console.log(salida);
        }

        fs.writeFileSync(`./salida/${archivo}`, texto);

        return archivo;

    } catch (error) {

        throw error;

    }

}

module.exports = {
    crearArchivo
}
