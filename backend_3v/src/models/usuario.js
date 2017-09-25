'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todo = require('./todo');

const usuarioSchema = new Schema({
	name:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	},
	todos:[todo]
})

module.exports = mongoose.model('Usuario',usuarioSchema);
