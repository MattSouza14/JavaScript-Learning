//Declarando a função

function nomeDaFuncao(){
    console.log("Chamando a função...")
}

function funcaoComParametro(nome){
    console.log("O nome chamado foi " + nome)
}

let func = function (){
    console.log("Chamando a função com variavies")
}
//Chamando a função

nomeDaFuncao()
funcaoComParametro('Mateus')
func()

// Arrow functions
//Quando há apenas um retorno, não é nescessário o uso das {}
//Quando há apenas um parametro, não é nescessário uso de ()
let meuNome =(nome) =>{
    return `Olá ${nome}`
}
console.log(meuNome("Mateus"))

let saudacao = ()=> console.log("Olá")
