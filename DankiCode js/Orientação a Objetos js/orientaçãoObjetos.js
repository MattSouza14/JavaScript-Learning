//Declarando um objeto

let carro = {

    'marca': 'fiat',
    'ano': 2017,
    'cor': 'cinza'

}

//chamando um objeto
 console.log(carro.cor)


//instancias e funções
 function Pessoa(){
    this.nome = "Mateus"

 }

 let pessoa = new Pessoa()
 Pessoa.nome = "Souza"

 console.log(Pessoa.nome)

 //Classes
 class Pessoa2{
    constructor(nome){
        this.nome = nome
    }
 }
 let pessoa2 = new Pessoa2("Mateus")
 console.log(pessoa2.nome)