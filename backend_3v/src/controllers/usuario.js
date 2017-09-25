'use strict'

const express = require('express')
const router = express.Router();
const usuarioModel = require('../models/usuario');

router.post('/',(req,res)=>{
	let usuario = new usuarioModel(req.body);
	usuario.save()
		.then(()=>{
			res.status(200).send({
				message:"Usuario cadastrado com sucesso!"
			});
		})
		.catch((e)=>{
			res.status(200).send({
				message:"Problema ao cadastrar usuario!",
				data:e
			})
		})
})

router.get('/',(req,res)=>{
	usuarioModel.find({})
		.then((data)=>{
			res.status(200).send(data);
		})
		.catch((e)=>{
			res.status(200).send({
				message:"Problema ao buscar usuarios!",
				data:e
			})
		})
})

router.post('/:id',(req,res)=>{
	usuarioModel.findOne(
		{
			name:req.body.name,
			password:req.body.password
		},
		(err,usuarioUnico)=>{
			if(err) new handleError(err);
			usuarioUnico.password = "********"
			if(usuarioUnico){
				res.status(200).send(usuarioUnico)
				return;
			}

			res.status(401).send({message:"Você não tem permissão para isto!"})
	})
})

router.put('/:id',(req,res)=>{
	usuarioModel.update({_id:req.params.id},{
		$set:{
			name:req.body.name,
			password:req.body.password
		}
	},(err,usuario)=>{
		if(err) return handleError(err);

		res.status(200).send({message:"Usuario editado com sucesso!"});
	});
})

router.put('/:id/todos',(req,res)=>{
	usuarioModel.update({_id:req.params.id},{
		$set:{
			todos:req.body.todos
		}
	},(err,usuario)=>{
		if(err) return handleError(err);

		res.status(200).send({message:"Todos editados com sucesso!"});
	});
})

module.exports = router;
