// class Livro{
//     #status
//     constructor(titulo, autor, anoPublicacao, status){
//         this.titulo = titulo
//         this.autor = autor
//         this.anoPublicacao = anoPublicacao
//         this.#status = status
//     }
//     setStatus(status){ this.#status = status}
//     getStatus(){return this.#status}

// }

// class Biblioteca{

// constructor(){
//     this.livros = []

// }

// adicionarLivro(livro){
//     this.livros.push(livro)
// }


// listarLivros(){
//     const livrosDisponiveis = this.livros.filter(livro => livro.getStatus() == 'Disponivel')
//     if(livrosDisponiveis.length > 0){
//         livrosDisponiveis.forEach(book => console.log(book))

//     }
//     else {
//         console.log('Não há livros disponiveis :(')
//     }
// }

// emprestarLivro(nomeLivro){
//     this.livros.forEach(livro => {
//         if (livro.titulo == nomeLivro){
//             if (livro.getStatus() == 'disponível'){
//                     livro.setStatus() = 'emprestado';
//             }
//             else{
//                 console.log("Livro já foi emprestado");
//             }
//         }
//     })
// }

// devolverLivro(nomeLivro){
//     this.livros.forEach(livro => {
//         if(livro.titulo == nomeLivro ){
//             if(livro.getStatus() == 'emprestado'){
//                 livro.setStatus() = 'Disponivel'
//             }
//         }
//         else{
//             console.log('Livro devolvido :)')
//         }
//     })
// }


// }


// let bibliotecaCleitinho = new Biblioteca()

// const book1 = new Livro('O morro dos ventos uivantes', 'Mateus', 1968, 'Disponivel')
// const book2 = new Livro('20 Mil leguas submarinas', 'Julio Verne', 1998, 'Disponivel')
// const book3 = new Livro('Um livro muito louco', 'Cleitinho', 2015, 'Disponivel')

// bibliotecaCleitinho.adicionarLivro(book1)
// bibliotecaCleitinho.adicionarLivro(book2)
// bibliotecaCleitinho.adicionarLivro(book3)


// bibliotecaCleitinho.listarLivros()




class Conta{
     
    #saldo
    constructor(titular, agencia, numero, saldo){
        this.titular=titular
        this.agencia=agencia
        this.numero=numero
        this.#saldo=saldo
    }
    getSaldo(){return console.log(`O saldo da conta de ${this.titular} é R$${this.#saldo}`)}
    
}
 let mateusAcount =  new Conta('Mateus', '0549', '498781', 700 )
 console.log(mateusAcount)
 mateusAcount.getSaldo()
 

 class ContaSalario extends Conta{

    #saldo
    constructor(empresa, titular, agencia, numero, saldo){
        super(titular, agencia, numero, saldo)
        this.empresa=empresa
    }

    // getSaldo(){return console.log(`O saldo da conta de ${this.titular} é R$${this.#saldo}`)}
    setSaldo(saldo){this.#saldo = saldo}
    verSaldo(){
        this.getSaldo()
    }
    sacar(valorSaque){
        if(valorSaque > this.#saldo){
             return console.log(`Não é possivel realizar o saque ${this.verSaldo()} `)
           
        }else{
            this.setSaldo() -= valorSaque
            return this.getSaldo()
        }
    }

}
mateusAcount = new ContaSalario('Digital College', 'Mateus', '5844', '148667', 700)
console.log(mateusAcount)
mateusAcount.sacar(800)


class ContaCorrente extends Conta{
    #limiteTransferencia
    #limiteEmprestimo
    #saldo
    constructor(limiteEmprestimo, temEmprestimo, limiteTransferencia){
        this.#limiteEmprestimo=limiteEmprestimo
        this.temEmprestimo=temEmprestimo
        this.#limiteTransferencia=limiteTransferencia
    }
    getSaldo(){return console.log(`O saldo da conta de ${this.titular} é R$${this.#saldo}`)}
    setSaldo(saldo){this.#saldo = saldo}
    verSaldo(){
        this.getSaldo()
    }
    transferir(valorTransferir){
        if(valorTransferir > this.#saldo || valorTransferir > this.#limiteTransferencia){
            return console.log('Não é possvel realizar a transferencia')
        }
        else{
            this.setSaldo() -= valorTransferir
            return this.gettSaldo()
        }

    }
    depositar(){}
    emprestimo(valorEmprestimo){
        if(this.#limiteEmprestimo == true){
            this.getSaldo() += valorEmprestimo
        }
    }
}

class ContaPoupança extends Conta{
    #saldo
    constructor(dataAniverssario, rendimento){
        this.dataAniverssario=dataAniverssario
        this.rendimento=rendimento
    }
    aplicarRendimento(){}
    depositar(){}
    transferir(){}
}
