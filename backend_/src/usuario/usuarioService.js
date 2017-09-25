const Usuario = require('./usuario');

Usuario.methods(['get','post','put','delete'])


Usuario.route('addTodo',(req,res)=>{
    console.log(req.body);

    var update = Usuario.update(
        {_id:req.body._id},
        {
            $push:{
                todos:req.body.todo
            }
        }
    )
    update.exec((err)=>{
        if(err) return handleError(err);
        var usuario = Usuario.findOne({_id:req.body._id}).sort({nome:-1})
        usuario.exec((err,usuario)=>{
            res.status(200).send(JSON.stringify(usuario));
        })

    })
})

Usuario.route('modificaTodos',(req,res)=>{
    console.log(req.body);

    var update = Usuario.update(
        {_id:req.body._id},
        {
            $set:{
                todos:req.body.todos
            }
        }
    )
    update.exec((err)=>{
        if(err) return handleError(err);
        var usuario = Usuario.findOne({_id:req.body._id}).sort({nome:-1})
        usuario.exec((err,usuario)=>{
            res.status(200).send(JSON.stringify(usuario));
        })
    })
})

module.exports = Usuario;