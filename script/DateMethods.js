// Retorna um objeto com a data e hora atuais
let date = new Date();
console.log(date);

// Retorna ano de uma data
console.log(date.getFullYear());

// Retorna o mês de uma data como um número de 0-11
console.log(date.getMonth());
console.log(date.getMonth() + 1); // Opção para 1-12

// Retorna o dia de uma data
console.log(date.getDate());

// Retorna a hora como um número (0-23)
console.log(date.getHours());

// Retorna o minutos como um número (0-59)
console.log(date.getMinutes());

// Retorna os segundo como um número (0-59)
console.log(date.getSeconds());

// Retorna a diferença em minutos entre a hora local e a hora UTC
console.log(date.getTimezoneOffset() / 60); // dividi por 60 para retornar em horas
