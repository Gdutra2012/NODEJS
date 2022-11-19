const meuModulo = require('./meu_modulo')
const soma = meuModulo.soma;
const subtracao = meuModulo.subtracao;
const multiplicacao = meuModulo.multiplicacao;
const divisao = meuModulo.divisao;

console.log(soma(10,90));
console.log(subtracao(90,10));
console.log(multiplicacao(10,20));
console.log(divisao(20,10));