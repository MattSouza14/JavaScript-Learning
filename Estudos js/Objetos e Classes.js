//Objeto agrupa valores
const mateus = {
    nome: "Mateus Souza",
    idade: '23',
    nascionalidade : "Brasileiro",
    
}
//Acessando o objeto
console.log(mateus.nome)
console.log(mateus.idade)
console.log(mateus.nascionalidade)

//Incrementar o objeto
mateus.altura = 1.67;

//Deletando um valor
delete mateus.nome
console.log(mateus)
//função dentro do objeto se chama metodo
const pessoa = {
    nome:'Mateus',
    idade:23,
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        
    }
}
pessoa.descrever();

//Atribuindo valores dinamicamente 
pessoa['nome'] = 'teste';
pessoa.nome = 'teste';
//Classes
//Classe é a definição e instancia é a ocorrencia
 class Person{
    nome;
    idade;
    cpf;

    constructor(nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    descre() {
        console.log(`Meu nome é ${this.name} minha idade é ${this.idade}
        e meu cpf é ${this.cpf}`)
    }
 }
 //const matt = new Person();
 //matt.nome = 'Cleiton';
 //matt.idade = 35;
 //matt.cpf = 4452174878;




 function compararPerson(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
 }
 const jose = new Person('Jose', 25, 8513546846);
 const carlos = new Person('Carlos', 25);
 compararPerson(jose, carlos);

 class car{
    marca;
    cor;
    gastoMedio;
    
    constructor(marca, cor, gastoMedio){

        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
       calcGasto(distancia, gasolina) {
        
         return distancia * gasolina * this.gastoMedio
       }
   
    }
    
    const carro = new car('Fiat', 'Branco', 1/12);
    console.log(carro.calcGasto(20, 5));

    class pessoas {
        nome;
        peso;
        altura;
    

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
        calcImc(peso, altura){
            return this.peso /(this.altura * this.altura);
        }
        classImc(){
            const IMC = this.calcImc();
            if (IMC < 18.5){
                return ('Você está abaixo do peso');
            }else if ((IMC >= 18.5) && (IMC < 25)){
                return ('Você está com peso normal');
            }else if ((IMC >=25) && (IMC <30)){
                return ('Você está acima do peso');
            }else if((IMC>= 30) && (IMC < 40)){
                return('Você está obeso');
            }else {
                return ('Você está com obesidade grave');
            }
        }

    }
const eu = new pessoas('Jose', 90, 1.67);
console.log(eu.classImc());

