/*
Pedro Monteiro Bittencourt

Descrição:
- Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.
*/

function calcula(numero) {
    var soma = 0;
    for (var i = 0; i < numero; i++){
        if (i % 3 == 0 || i % 5 == 0) {
            soma += i;
        }
    }
    return soma;
}

console.log(calcula(10));
console.log(calcula(11));
console.log(calcula(25));