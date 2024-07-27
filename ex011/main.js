// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divísivel por 3 = Fizz
// Número é divísivel por 5 = Buzz
// Número é divísivel por 3 e 5 = Retorn FizzBuzz
// Número NÃO é divísivel por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com números de 0 a 100

function verificaNumero(numero) {
    if (isNaN(numero)) return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log(verificaNumero('a'));

let num = 0;
while (num <= 100) {
    console.log(num, verificaNumero(num));
    num++;
}