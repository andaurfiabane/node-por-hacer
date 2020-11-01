const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {

    try {
        listadoPorHacer = require('../data/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('data/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion, //no es necesario poner descripcion: descripcion, Javascript
        //según ecmascript 6 lo asume de esta manera
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => { return tarea.descripcion === descripcion });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    };
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => { return tarea.descripcion !== descripcion });

    if (nuevoListado.length !== listadoPorHacer.length) {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    } else {
        return false;
    };

}


module.exports = { crear, getListado, actualizar, borrar }