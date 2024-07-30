// class Veiculo {
//     #preco
//     constructor(marca,modelo,ano,preco){
//         this.marca = marca
//         this.modelo = modelo
//         this.ano = ano
//         this.#preco = preco
//     }

//     ExibirInfos(){
//         console.log(`
//         Marca: ${this.marca}
//         Modelo: ${this.modelo}
//         Ano de Fabricação: ${this.ano}
//         Preço: R$${this.#preco}`)  
//     }
// }
// const veiculo1 = new Veiculo('FIAT', 'Uno', '2015', 56000)
// console.log (veiculo1) 

// class Carro extends Veiculo{
//         constructor(numPortas, combustivel, marca,modelo,ano,preco ){
//             super(marca,modelo,ano,preco)
//             this.numPortas = numPortas
//             this.combustivel = combustivel
//         }
//         ExibirInfos(){
//         super.ExibirInfos()
//         console.log(`
//         Quantidade portas: ${this.numPortas}
//         Tipo de Combustivel: ${this.combustivel}`) 
                          
//         }
//     }

// const carro =new Carro('4', 'Aditivado', 'Fiat', 'Uno', '2099', 90000)
// console.log(carro)
// console.log(carro.ExibirInfos())

// class Moto extends Veiculo{
//     constructor(cilindrada, partida, marca,modelo,ano,preco ){
//         super(marca,modelo,ano,preco)
//         this.cilindrada = cilindrada
//         this.partida = partida
//     }

//     ExibirInfos(){
//         super.ExibirInfos()
//         console.log(`
//         Cilindradas: ${this.cilindrada}
//         Tipo de Partida: ${this.partida}`) 
                      
//     }
// }
// const moto = new Moto('90','Muitas','Honda','Bis', '1999', 15000)
// console.log(moto)
// console.log(moto.ExibirInfos()) 



class Produtos {
    #preco
    constructor(nome,preco,validade,marca,disponibilidade){
        this.nome = nome
        this.#preco = preco
        this.validade = validade
        this.marca = marca
        this.disponibilidade = disponibilidade

    }
    getPreco(){return this.#preco}
    setPreco(preco){this.#preco = preco}
    exibirInfo(){
        console.log(`
                    Nome do produto: ${this.nome}
                    Preço: R$${this.getPreco()}
                    Data de Validade: ${this.validade}
                    Marca: ${this.marca}
                    `)
    }
}

class Estoque{
    constructor(){
        this.estoque = []
    }
    adicionarProduto(produto){
        this.estoque.push(produto)
    }
    removerProduto(produto){
        this.estoque.forEach(nomeProduto =>{
            if(nomeProduto.nome == produto){
                if(nomeProduto.disponibilidade == 'Disponivel'){
                    produto.disponibilidade = 'Sem estoque'
                }
                else{
                    console.log('Produto não existe no estoque :(')
                }

            }})

        }
    
    listarProtudos(){
        const listarProtudos =
         this.estoque.filter(produto => produto.disponibilidade == 'Disponivel')
        if (listarProtudos.length > 0){
            listarProtudos.forEach(produto => console.log(produto))

        }
        else {
            console.log('Não há produtos no estoque :( estamos falidos')
        }
    }
}

class Alimentos extends Produtos{
    constructor(nome,preco,validade,marca,peso,ehPerecivel){
        super(nome,preco,validade,marca)
        this.peso =  peso
        this.ehPerecivel = ehPerecivel
    }
    exibirInfo(){
        super.exibirInfo()
        console.log(`
            Peso: ${this.peso}
            Perecivel: ${this.ehPerecivel}
            `)
    }
}

class Bebidas extends Produtos{
    constructor(nome,preco,validade,marca,volume,ehAlcoolico){
        super(nome,preco,validade,marca)
        this.volume =  volume
        this.ehAlcoolico = ehAlcoolico
    }
    exibirInfo(){
        super.exibirInfo()
        console.log(`
            Peso: ${this.volume}
            Perecivel: ${this.ehAlcoolico}
            `)
    }
}

let mercadoCleitinho = new Estoque()

const produto1 = new Alimentos('Arroz', 8, '30/07/2024', '3Corações', '1KG', true, 'Disponivel')
const produto2 = new Alimentos('Feijão', 6.85, '30/07/2024', 'PaiJoao', '1KG', true, 'Disponivel')
const produto3 = new Bebidas('Coquinha GELADA', 10, '3 Meses', 'Coca-Cola', '2L', false, 'Disponivel')

mercadoCleitinho.adicionarProduto(produto1)
mercadoCleitinho.adicionarProduto(produto2)
mercadoCleitinho.adicionarProduto(produto3)

// mercadoCleitinho.listarProtudos()

mercadoCleitinho.removerProduto('Feijão')
mercadoCleitinho.listarProtudos()
