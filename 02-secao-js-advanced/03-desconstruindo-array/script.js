

let pessoa = {
    nome: "Ruan",
    idade: 21,
    cargo: "Desenvolvedor",
}

//Desconstruindo o objeto

let nome = 'teste'

let {nome:pessoaNome, cargo} = pessoa;

console.log(pessoaNome);
console.log(cargo);