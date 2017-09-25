'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//conecta banco
mongoose.connect('mongodb://localhost/cursoangular')

//carrega os Models
const Product = require('./models/product')

//carrega as rotas
const indexRoute   = require('./routes/index');
const productRoute = require('./routes/product');

const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.use('/',indexRoute)
app.use('/products',productRoute)


module.exports = app;
