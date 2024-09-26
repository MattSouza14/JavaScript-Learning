//Declarando um array
let nomes = ["mateus", "souza", "nascimento"]
//Outra forma de declara um array
let nome = newArray = ['felipe', 'smith']

//Bucando um valor dentro do array
console.log(nomes[0])
console.log(nome[1])

//Jogando um valor para uma posição no array

nome[0] = 'xuxa'
nome.push('carlos')

console.log(nome[0])
console.log(nome[2])


let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

]
//Metodos para arrays
//push -> adiciona um valor ao final do array
nomes.push("Jorge", "Cleitinho")
console.log(nomes)

//pop -> remove um valor ao final do array
nomes.pop()
console.log(nomes)

//unshift -> adiciona um valor no inicio do array
nomes.unshift("Matt")
console.log(nomes)

//shift -> remove um valor ao final do array
nomes.shift()
console.log(nomes)


//Destruturação 

const array = [1, 2, 3]

const[a,b,c] = [1, 2, 3]
console.log(a,b,c)