const { Schema , model} = require ('mongoose');

const EntradasSchema= new Schema({
    _id : Number,
    Titulo:String,
    Descripcion:String,
    Detalle:String,
    Estado:Number,
    FK_usuario:{type:Schema.ObjectId, ref:'Usuarios'},
    Fec_creacion:Date,
    Fec_modificacion:Date
})

module.exports = model('Entradas', EntradasSchema);