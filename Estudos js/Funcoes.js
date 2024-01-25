//Funções
//Trecho de codigo que pode ser chamado quando quiser
//Declaração da função
//     (Aqui ficam os parametros da função)
//                  
function nomeFuncao(){
    console.log('teste')
}
//Chamando uma função
//nome da função();
nomeFuncao();

function meuNome(name){
    console.log('Meu nome é:' + name);
}
meuNome('Mateus');

function quadrado(valor){
    return valor * valor;
}

let resul = quadrado(10);
console.log (resul);

//função principal- onde o codigo do programa principal vai ficar
//As novas funções são criadas acima da main
function soma(valor1, valor2){
    return valor1 + valor2;
}

function main (){
    let a = 5;
    let b = 6;
    let r = soma(a, b);
    
    console.log ('Olá, Mundo!');
    console.log (r);
}
main();

//exemplo: Usando funções com o codigo do IMC


function calcImc(p, h){
    return p / (h * h);
}

function classImc (calc){
    
    if (calc < 18.5){calc
        return'Você está abaixo do peso';
    }else if ((calc >= 18.5) && (calc < 25)){
        return'Você está com peso normal';
    }else if ((calc >=25) && (calc <30)){
        return'Você está acima do peso';
    }else if((calc>= 30) && (calc < 40)){
        return'Você está obeso';
    }else {
        return'Você está com obesidade grave';
    }
}
//Codigo principal
function main(){
let PesoKG = 67;
let AlturaM = 1.67;

let IMC = calcImc(PesoKG, AlturaM);
console.log('Seu IMC é', IMC);
console.log(classImc(IMC));

}
//Funções em JS podem ser manipuladas como se fosse um valor

 //Exercicios:
//função para escrever meu nome

function digaNome(name){
    return 'Meu nome é ' + name;
}
//digaNome('Mateus');

//Fazer uma função para checar se é maior de idade
function maiorIdade(idade){
    if(idade >= 18){
        return ' e sou  maior de idade';
    }else{
        return ' e sou menor de idade';
    }
}
//console.log(maiorIdade(19));
 

console.log(digaNome(' Mateus ') + maiorIdade(18));


function pagamento(pay, value){
   
    if(condicaoPagamento === 1){
    let valorFinal = valorProduto - (valorProduto * 0.1);
    return ('O valor do produto ficou por: ', valorFinal);
    }else if(condicaoPagamento === 2){
    let valorFinal = valorProduto - (valorProduto * 0.15);
    return('O valor do produto ficou por: ', valorFinal);
    }else if (condicaoPagamento === 3){
    let valorFinal = valorProduto; 
    return ('O valor do produto ficou por: ', valorFinal);
    }else {
    let valorFinal = valorProduto + (valorProduto * 0.1);
    return ('O valor do produto ficou por: ', valorFinal);
}
} 

let valorProduto = 100;
let condicaoPagamento = 1

console.log(pagamento(condicaoPagamento, valorProduto));

