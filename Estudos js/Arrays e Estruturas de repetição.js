//Array ou Vetores
//armazenamos em uma variavels só, um conjunto de dados
//A posição do elemento começa em na posição 0
//Podem ter tipos diferentes no array
 const alunos = ['Mateus', 'Cleber', 'Carlos'];
 console.log(alunos[1]);
//Adicionando item na lista
alunos.push('Julio');
alunos[4]= 'Vinicius';
//Pode ser também usado para substituir 
alunos[2] = 'João';

console.log(alunos);

//.pop tira o ultimo item da lista
//.shift tira o primeiro item da lista
//.
console.log(alunos.pop());
console.log(alunos);


const notas =[];
notas.push(5);
notas.push(8);
notas.push(7);
notas.push(2);
notas.push(5);
//Para saber o tamanho da lista
//.length
const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(soma / notas.length);

//Estrutura de repetição FOR
//Sintaxe 
//for (let index = 0; index < array.length; index++) {
//    const element = array[index];    
//}
for (let index = 0; index < notas.length; index++) {
    
    console.log(`Na posição`, index, `=`, notas[index]);
    
}

    let  somas = 0

for (let index = 0; index < notas.length; index++) {
    const notaTotal = notas[index];
    somas = somas + notaTotal;
    
    
}
console.log(`A soma das notas é =`, somas);
const media = soma / notas.length;
console.log (`A média de notas é =`, media);

//Crie um programa que dado um número, faça a sua tabuada

let num = 5;
for (let index = 0; index <= 10; index++) {
       let multi = num * index;
    console.log(index, `X`, num, `=`, multi);
    
}


//Programa que percorra uma lista de números e imprima apenas os números pares

const lista = [5, 8, 9, 15, 20, 35, 60, 2, 10, 7]; 

for (let index = 0; index < lista.length; index++) {
    const pares = lista[index]
    if ( pares % 2 === 0) {
        console.log ( pares, `é par `);
    }
    
    
}