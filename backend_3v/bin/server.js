'use strict'

const app     = require('../src/app')
const http = require('http');
const server = http.createServer(app);


server.listen(3030);
console.log('Rodando na porta 3030');
