//Usando o Prompt

let seuNome = prompt("Digite seu nome")
let suaIdade = prompt("Qual a sua idade")
let suaCidade = prompt("Qual a sua ciade")

console.log("Seu nome é:" + seuNome)
console.log("Sua idade é:" + suaIdade)
console.log("Sua cidade é:" + suaCidade )

//Q1

let anoNasc = prompt("Informe o seu ano de nascimento")

while(anoNasc > 2024){
    alert('INFORME CORRETAMENTE SEU ANO DE NASCIMENTO')
    anoNasc = prompt("Informe o seu ano de nascimento")

}
let anoAtual = prompt("Informe o ano atual")

let idade =  anoAtual - anoNasc 

alert('Sua idade é:' + idade)

//Q2


