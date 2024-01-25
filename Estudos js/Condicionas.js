
//Condicionais if, else if e else
//if(condição){
//Bloco de codigo que vai ser executado caso aconteça a condição 
//}

let Gasolina = 5.79;
let Etanol = 6.66
let gastoMedio = 10;
let distancia = 100;
let tipoCombustivel = 'Gasolina';


if (tipoCombustivel === 'Etanol'){
    let litrosConsumidos = distancia / gastoMedio;
    console.log("O total de litros consumidos foi de", litrosConsumidos);
    
    let gastoTotalE = litrosConsumidos * Etanol;
    console.log ("O valor total que será gasto na viagem com etanol é = ",
    gastoTotalE.toFixed(2));
//Caso a condição não seja verdadeira, podemos usar o else.
//senao
}else {
    let litrosConsumidos = distancia / gastoMedio;
    console.log("O total de litros consumidos foi de", litrosConsumidos);
    
    let gastoTotalG = litrosConsumidos * Gasolina;
    console.log("O valor total que será gasto na viagem com gasolina é =",
    gastoTotalG.toFixed(2));
}

let numero = 1;

let parImpar = numero % 2 === 0;
if(parImpar){
    console.log('Par')
}else {
    console.log('Impar')
}

console.log ("O numero", numero, "é par?");
console.log (parImpar);

let Ap1 = 10;
let Ap2 = 7;
let Ap3 = 7;

let media = (Ap1 + Ap2 + Ap3) / 3;

if(media < 5){

    console.log('Sua média foi', media);
    console.log('Reprovação');
//senao se
}else if ((media >= 5) || (media <= 7)){

    console.log('Sua média foi', media);
    console.log('Recuperação');
}else{
    console.log('Sua média foi', media);
    console.log('Passou de semestre');
}

let PesoKG = 67;
let AlturaM = 1.67;

let IMC = PesoKG / (AlturaM * AlturaM);

if (IMC < 18.5){
    console.log('Seu IMC é', IMC);
    console.log ('Você está abaixo do peso');
}else if ((IMC >= 18.5) && (IMC < 25)){
    console.log('Seu IMC é', IMC);
    console.log ('Você está com peso normal');
}else if ((IMC >=25) && (IMC <30)){
    console.log('Seu IMC é', IMC);
    console.log ('Você está acima do peso');
}else if((IMC>= 30) && (IMC < 40)){
    console.log('Seu IMC é', IMC);
    console.log ('Você está obeso');
}else {
    console.log('Seu IMC é', IMC);
    console.log ('Você está com obesidade grave');
}


let valorProduto = 100;
let condicaoPagamento = 2

if(condicaoPagamento === 1){
    let valorFinal = valorProduto - (valorProduto * 0.1);
    console.log ('O valor do produto ficou por: ', valorFinal);
}else if(condicaoPagamento === 2){
    let valorFinal = valorProduto - (valorProduto * 0.15);
    console.log ('O valor do produto ficou por: ', valorFinal);
}else if (condicaoPagamento === 3){
    let valorFinal = valorProduto; 
    console.log ('O valor do produto ficou por: ', valorFinal);
}else {
    let valorFinal = valorProduto + (valorProduto * 0.1);
    console.log ('O valor do produto ficou por: ', valorFinal);
}