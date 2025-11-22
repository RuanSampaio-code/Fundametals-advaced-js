//Operações com listas

//MAP - cria uma nova array com os resultados da chamada de uma função para cada elemento da array original
/* let listaDeNumeros = ["Joao", 2, 3, 4, 5];

listaDeNumeros.map((item, index) => {
    console.log(`Índice: ${index} - Valor: ${item}`);
});
 */

//Reduce - aplica uma função a um acumulador e a cada valor da array (da esquerda para a direita) para reduzi-lo a um único valor

l/* et numeros = [9, 2, 3];

let total = numeros.reduce((acumulador, numero, indice, original) =>{

    console.log(`Acumulador: ${acumulador}`);
    console.log(`Número: ${numero}`);
    console.log(`Índice: ${indice}`);
    console.log(`Original: ${original}`);
    console.log('------------------');

    return acumulador += numero;

})

console.log(`Total: ${total}`);
 */


//Find - retorna o valor do primeiro elemento da array que satisfaz a função de teste fornecida
let numeros = [10, 25, 30, 45, 50, 60];
let numeroEncontrado = numeros.find((numero) => {
    return numero > 30;
});

console.log(numeroEncontrado);


//Filter - cria uma nova array com todos os elementos que passaram no teste implementado pela função fornecida
/* let numeros = [10, 25, 30, 45, 50, 60];

let numerosFiltrados = numeros.filter((numero) => {
    return numero > 30;
}); */

