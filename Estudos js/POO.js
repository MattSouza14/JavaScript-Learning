

class Livro{
    #status
    constructor(titulo, autor, anoPublicacao, status){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.#status = status
    }
    setStatus(status){ this.#status = status}
    getStatus(){return this.#status}

}

class Biblioteca{

constructor(){
    this.livros = []

}

adicionarLivro(livro){
    this.livros.push(livro)
}


listarLivros(){
    const livrosDisponiveis = this.livros.filter(livro => livro.getStatus() == 'Disponivel')
    if(livrosDisponiveis.length > 0){
        livrosDisponiveis.forEach(book => console.log(book))

    }
    else {
        console.log('Não há livros disponiveis :(')
    }
}

emprestarLivro(nomeLivro){
    this.livros.forEach(livro => {
        if (livro.titulo == nomeLivro){
            if (livro.getStatus() == 'disponível'){
                    livro.setStatus() = 'emprestado';
            }
            else{
                console.log("Livro já foi emprestado");
            }
        }
    })
}

devolverLivro(nomeLivro){
    this.livros.forEach(livro => {
        if(livro.titulo == nomeLivro ){
            if(livro.getStatus() == 'emprestado'){
                livro.setStatus() = 'Disponivel'
            }
        }
        else{
            console.log('Livro devolvido :)')
        }
    })
}


}


let bibliotecaCleitinho = new Biblioteca()

const book1 = new Livro('O morro dos ventos uivantes', 'Mateus', 1968, 'Disponivel')
const book2 = new Livro('20 Mil leguas submarinas', 'Julio Verne', 1998, 'Disponivel')
const book3 = new Livro('Um livro muito louco', 'Cleitinho', 2015, 'Disponivel')

bibliotecaCleitinho.adicionarLivro(book1)
bibliotecaCleitinho.adicionarLivro(book2)
bibliotecaCleitinho.adicionarLivro(book3)


bibliotecaCleitinho.listarLivros()




class Conta{
    #saldo
    constructor(titular, agencia, numero, saldo){
        this.titular=titular
        this.agencia=agencia
        this.numero=numero
        this.#saldo=saldo
    }
    verSaldo(){}
    sacar(){}
}

class ContaSalario extends Conta{

    constructor(empresa){
        this.empresa=empresa
    }


}

class ContaCorrente extends Conta{
    #limiteTransferencia
    #limiteEmprestimo
    constructor(limiteEmprestimo, temEmprestimo, limiteTransferencia){
        this.#limiteEmprestimo=limiteEmprestimo
        this.temEmprestimo=temEmprestimo
        this.#limiteTransferencia=limiteTransferencia
    }
    transferir(){}
    depositar(){}
    emprestimo(){}
}

class ContaPoupança extends Conta{
    constructor(dataAniverssario, rendimento){
        this.dataAniverssario=dataAniverssario
        this.rendimento=rendimento
    }
    aplicarRendimento(){}
    depositar(){}
    transferir(){}
}
