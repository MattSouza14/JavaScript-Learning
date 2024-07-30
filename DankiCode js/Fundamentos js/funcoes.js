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