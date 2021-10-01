const express = require('express');
const app = express();

require('./db');
const Usuarios = require ('./models/Usuarios');
const Entradas = require ('./models/Entradas');
const { Mongoose } = require('mongoose');

app.listen(3000,()=>{
    console.log('{');
    console.log('"Status" : "ok"');
    console.log('}');
})

const jesus = new Usuarios({
    _id : 155821845336,
    Apellidos:'Castilla Quiroz',
    Fec_nacimiento:new Date('Aug 5, 2001'),
    Email:'castilla@gmail.com',
    Estado: 1,
   Fec_creacion:'Aug 5, 2015',
    Fec_modificacion:'Aug 15, 2018'

});
//jesus.save();

const entrada = new Entradas({
    _id : 1,
    Titulo:'Ejerciocio 2',
    Descripcion:'esto es  una prueba',
    Detalle:'para el curso de aplicaciones web utilizando software libre',
    Estado:1,
    FK_usuario:jesus,
    Fec_creacion:'Aug 5, 2015',
    Fec_modificacion:'Aug 15, 2018'
});

//entrada.save();

