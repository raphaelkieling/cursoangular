'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
	description:{
		type:String,
		required:true
	},
	isDone:{
		type:Boolean,
		required:true,
		default:false
	}
})

module.exports = todoSchema;