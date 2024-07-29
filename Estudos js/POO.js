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
