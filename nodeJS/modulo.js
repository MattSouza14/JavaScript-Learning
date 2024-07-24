const calcularSalario = (a, b)=> a * b


    const car ={
        cor: 'Cinza',
        marca: 'Fiat',
        valor: 90000,
        ano: 2023,
        cambio: 'Manual',
        descricao : function(){ return console.log(`Cor do carro: ${(car.cor)} Marca do carro:${(car.marca)} Valor do carro: ${(car.valor)} Ano de fabricação: ${(car.ano)}`)
        }
    }



module.exports = {calcularSalario, car}