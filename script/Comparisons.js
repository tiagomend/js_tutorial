/*
    OPERADORES DE COMPARAÇÃO
    São usados em instruções lógicas para determinar
    igualdade ou diferença entre variáveis ou valores.

    (  == ) -> Igual a
    ( === ) -> Igual valor e igual tipo
    (  != ) -> Diferente
    ( !== ) -> Diferente valor ou diferente de tipo
    (  >  ) -> Maior
    (  <  ) -> Menor
    (  >= ) -> Maior ou Igual
    (  <= ) -> Menora ou Igual

    OPERADORES LÓGICOS
    São usados para determinar a lógica entre variáveis
    ou valores.

    ( && ) -> AND
    ( || ) -> OR
    (  ! ) -> NOT
*/

let age = 16;
if (age < 18) text = "Muito jovem para comprar álcool";
console.log(text);

/* 
    OPERADOR TERNÁRIO
    Atribui valor a variável com base em uma condição.

    varName = (condition) ? value1 : value2
*/

let voteable = (age < 18) ? "Muito Jovem!":"Velho o bastante!";
console.log(voteable);

// Operador NULLISH COALESCING (??)
let name = null;
let text = "missing";
let result = name ?? text; // Se o primeiro for nulo, retorna o segundo
