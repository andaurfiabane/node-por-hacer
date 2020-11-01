const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion: descripcion //<-- Ver más abajo una forma nuevo de realizar lo mismo, bajo ecmascript 6
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: descripcion,
        completado: completado,
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion //<-- Gracias a ecmascript 6 (o también conocido como ES2015) podemos evitar poner descripcion: descripcion y solo escribir descripcion, teniendo el mismo resultado
    })
    .help()
    .argv;

module.exports = { argv }