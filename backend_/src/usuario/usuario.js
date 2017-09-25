const restFul = require('node-restful')
const mongoose = restFul.mongoose;



var Todo = mongoose.Schema({
    descricao:{type:String},
    confirmado:{type:Boolean}
})

var Usuario = mongoose.Schema({
    nome:{type:String},
    idade:{type:Number},
    xp:{type:Number},
    todos:[Todo]
});

module.exports = restFul.model('Usuario',Usuario);