// Para as seguintes situações, crie um módulo e utilize ele em um outro arquivo utilizando a importação do módulo original
//Calcular o salário de um funcionário considerando horas trabalhadas e valor por hora.
let horasTrabalhadas = 8
let valorHora = 15



const mostrarCarro = require('./modulo')
const calculoSal = require('./modulo')

console.log(calculoSal(horasTrabalhadas, valorHora))

//Questão 2


const verCarro = require('./modulo')
console.log(mostrarCarro())

