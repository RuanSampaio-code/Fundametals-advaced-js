//Funções anonimas


//Função nomeada
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Ruan"));

//Função anônima atribuída a uma variável
let despedida = function(nome) {
    return `Tchau, ${nome}!`;
}
console.log(despedida("Ruan"));

//Função anônima como callback
setTimeout(function() {
    console.log("Esta mensagem foi exibida após 2 segundos");
}, 2000);

//Função anônima autoexecutável
(function() {
    console.log("Esta função anônima foi executada imediatamente!");
})();

//Função anônima com arrow function
let multiplicar = (a, b) => {
    return a * b;
}

console.log(multiplicar(5, 3));

