//Conceito de Rest Operator
// o Rest operator é representado por três pontos (...) e é usado para agrupar o restante dos elementos em um array ou objeto durante a desconstrução.


//Rest operator example with objects
let pessoa = {
    nome: "Ruan",
    idade: 21,
    cargo: "Desenvolvedor",
}

//Destructuring the object with rest operator
let {nome, ...resto} = pessoa;
console.log(nome); // Ruan
console.log(resto); // { idade: 21, cargo: 'Desenvolvedor' }            


//exeplo com funçãos
function listarNomes(...nomes) {
    nomes.forEach(nome => {
        console.log(nome);
    });
}

listarNomes("Ruan", "Maria", "João");

//outro exeplo com funcção de sorteador de numero

function sortearNumeros(...numeros) {
    console.log("Números sorteados:", numeros);
    let numeroSorteado =  Math.floor(Math.random() * numeros.length);
    return numeros[numeroSorteado];
}

let numero = sortearNumeros(10, 20, 30, 40, 50);
console.log("Número sorteado:", numero);