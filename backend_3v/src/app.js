'use strict'

const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');

//banco de dados
mongoose.connect('mongodb://localhost/bdcursoangular');

//midlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//models
const usuarioModel     = require('./models/usuario');
//rotas
const indexRouter      = require('./controllers/index');
const usuarioRouter    = require('./controllers/usuario');

app.use('/',indexRouter);
app.use('/usuario',usuarioRouter);

module.exports = app;