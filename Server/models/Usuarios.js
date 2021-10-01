const { Schema , model} = require ('mongoose');

const UsuariosSchema= new Schema({
    _id : Number,
    Apellidos:String,
    Fec_nacimiento:Date,
    Email:String,
    Estado: Number,
    Fec_creacion:Date,
    Fec_modificacion:Date
})

module.exports = model('Usuarios', UsuariosSchema);