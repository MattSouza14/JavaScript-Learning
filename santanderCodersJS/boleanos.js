const prompt =require('readline-sync')

const numero1 = 10
const numero2 = 12

console.log(numero1 == numero2)
console.log(numero1 === numero2)
console.log(numero1 == "10")

console.log(numero1 != numero2)
console.log(numero1 !== "10")

console.log(numero1 >= numero2)
console.log(numero1 <= numero2)


const pessoa1 = 20
const pessoa2 = 17

console.log(pessoa1 >= 18 && pessoa2 >=18)
console.log(pessoa1 >= 18 || pessoa2 >=18)

const idade = Number(prompt.question('Qual a sua idade?'))

const ehMaiorDeIdade = idade >= 18

if (ehMaiorDeIdade)
{
    console.log('Voce eh maior de idade')
}
else 
{
    console.log('Voce eh menor de idade')
}


const permissoes = 'aluno'

switch(permissoes){
    case 'aluno':
        console.log('Voce so pode ver as aulas')
        break
    case 'professor':
        console.log('voce pode alterar as aulas')
        break
    case 'admin':
        console.log('Voce pode fazer tudo')
        break
    default:
        console.log('Quem eh voce')
        break
}

//Operador ternario

const age = 21

age >= 18 ? console.log('Maior de idade') : console.log('Menor de idade')

const mensagem = age >= 18 ? "Maior de idade" : "Menor de idade"
console.log(mensagem)






