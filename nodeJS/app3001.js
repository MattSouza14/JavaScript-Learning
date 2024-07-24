const http = require('http')
const porta = 3001

const salario = require('./modulo').calcularSalario

const servidor = http.createServer((req, res)=>{
res.write(`Salario: ${salario(40, 50)}`)
res.end()

}).listen(porta)