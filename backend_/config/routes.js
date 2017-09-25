const express = require('express');

module.exports = (app)=>{

    const router = express.Router()
    app.use('/api/v1',router);

    const usuarioService = require('../src/usuario/usuarioService');
    usuarioService.register(router,'/usuarios');
}