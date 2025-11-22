
//exemplo de spred operator com objetos

//Conceito de Spred Operator
// o Spred operator é representado por três pontos (...) e é usado para expandir elementos de um array ou objeto em locais onde múltiplos valores são esperados.

let pessoa = {
    nome: "Ruan",
    idade: 21,
    cargo: "Desenvolvedor",
}

let pessoaAtualizada = {
    ...pessoa, //expande o objeto pessoa
    idade: 22,
    cidade: "São Paulo",
}


console.log(pessoaAtualizada);

/* 
let pessoa = {
    nome: "Ruan",
    idade: 21,
    cargo: "Desenvolvedor",
} */

//Desconstruindo o objeto
/* 
let nome = 'teste'

let {nome:pessoaNome, cargo} = pessoa;

console.log(pessoaNome);
console.log(cargo); */