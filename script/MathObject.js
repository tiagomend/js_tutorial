/* 
    Objeto Math não possui construtor.
    O objeto Math é estático.
    Métodos podem ser usados sem criar um objeto primeiro
*/

// Constantes
console.log(Math.E); // retorna o número de Euler
console.log(Math.PI); // retorna o valor de PI
console.log(Math.SQRT2); // retorna a raíz quadrada de 2
console.log(Math.SQRT1_2); // retorna a raíz quadrada de 1/2
console.log(Math.LN2); // retorna o logaritmo natural de 2
console.log(Math.LN10); // retorna o logaritmo natural de 10
console.log(Math.LOG2E); // retorna o logaritmo de base 2 de E
console.log(Math.LOG10E); // retorna o logaritmo de base 10 de E

/*
    MÉTODOS MATEMÁTICOS

    # Números para inteiro.
    Existem 4 métodos comuns para arredondar um número para inteiro.
*/

// Retorna o inteiro mais próximo
console.log("\nTestando método .round()")
console.log(Math.round(4.6)); // retorna 5
console.log(Math.round(4.5)); // retorna 5
console.log(Math.round(4.4)); // retorna 4

// Retorna valor arredondado para próximo número
console.log("\nTestando método .ceil()")
console.log(Math.ceil(4.9));  // retorna 5
console.log(Math.ceil(4.7));  // retorna 5 
console.log(Math.ceil(4.4));  // retorna 5 
console.log(Math.ceil(4.2));  // retorna 5 
console.log(Math.ceil(-4.2));  // retorna -4

// Retorna valor arredondado para próximo número
console.log("\nTestando método .floor()")
console.log(Math.floor(4.9));  // retorna 4
console.log(Math.floor(4.7));  // retorna 4 
console.log(Math.floor(4.4));  // retorna 4 
console.log(Math.floor(4.2));  // retorna 4 
console.log(Math.floor(-4.2));  // retorna -5

// Retorna a parte inteira
console.log("\nTestando método .trunc()")
console.log(Math.trunc(4.9));  // retorna 4
console.log(Math.trunc(4.7));  // retorna 4 
console.log(Math.trunc(4.4));  // retorna 4 
console.log(Math.trunc(4.2));  // retorna 4 
console.log(Math.trunc(-4.2));  // retorna -4

// Retorna se valor é negativo, nulo ou positivo
console.log("\nTestando método .sign()")
console.log(Math.sign(-4)); // retorna -1
console.log(Math.sign(0)); // retorna 0
console.log(Math.sign(4)); // retorna 1

console.log("-----------------------------------")
// Math.pow(x, y) >> retorna valor de x elevado a y
console.log(Math.pow(8, 2));

// Retorna raiz quadrada de
console.log(Math.sqrt(64));

// Retorna o valor absoluto de
console.log(Math.abs(-4.7)); // retorna 4.7

// Retorna o seno (entre -1 e 1 ) do angulo x (em radiano)
console.log(Math.sin(90 * Math.PI / 180)); // retorna 1 (seno de 90)

// Retorna o cosseno (entre -1 e 1 ) do angulo x (em radiano)
console.log(Math.cos(0 * Math.PI / 180)); // retorna 1 (seno de 0)

// Encontrar o valor mais baixo ou mais alto em lista de argumentos
console.log(Math.min(0, 150, 30, 20, -8, -200)); // retorna -200
console.log(Math.max(0, 150, 30, 20, -8, -200)); // retorna 150

// Retorna um número aleatório entre 0 e 1 (exclusivo)
console.log(Math.random());

// Retorna o logaritmo natural de um número
console.log(Math.log(3));

// Retorna o logaritmo de base 2 de um número
console.log(Math.log2(8));

// Retorna o logaritmo de base 10 de um número
console.log(Math.log10(1000));
