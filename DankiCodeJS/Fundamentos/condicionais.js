let nota_1 = 6
let nota_2 = 8
let nota_3 = 10

let media = (nota_1 + nota_2) / 2
let novaMedia = (nota_3 + media) / 2

if (media >= 7){
    console.log("Você passou com media " + media)
}
else if (media >= 5  && media < 7){
    console.log("Você está de recuperação com media " + media)
    if(novaMedia >= 7){
        console.log("Você passou na recuperação com media " + novaMedia)
    }
    else {
        console.log("Você reprovou na recuperação com media " + novaMedia)
    }
}
else {
    console.log("Você reprovou direto com media " + media)
}

// || OR
// && AND
//! Negação
//!= Diferente


//Area para exercicios