class Pessoa {
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
      const imcClassificacao = ["Abaixo do peso", "Peso normal", "Acima do peso", "Obesidade", "Obesidade grave"]
        const IMC = this.calcImc();
        return IMC < 18.5 ? `Você está ${imcClassificacao[0]} IMC ${IMC}`:
               IMC < 25 ? `Você está com ${imcClassificacao[1]} IMC ${IMC}` :
               IMC < 30 ? `Você está ${imcClassificacao[2]} IMC ${IMC}` :
               IMC < 40 ? `Você está ${imcClassificacao[3]} IMC ${IMC}` :
               `Você está com ${imcClassificacao[4]} IMC ${IMC}`
    }

}
const paciente = new Pessoa('Jose', 90, 1.67);
console.log(paciente.classImc());