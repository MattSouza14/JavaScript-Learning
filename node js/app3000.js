const http = require('http');
const mostrarCarro = require('./modulo');
const porta = 3000 

const carro = require('./modulo').car


const servidor = http.createServer((req, res) => {
    res.write(car.descricao());
    res.end();  
}).listen(porta)