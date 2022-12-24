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

// Retorna os milissegundo de uma data como um número (0-999)
console.log(date.getMilliseconds());

// Retorna o dia da semana como um número (0-6)
console.log(date.getDay());

// Retorna o número de milissegundos desde 1/01/1970
console.log(date.getTime());

// Retorna a diferença em minutos entre a hora local e a hora UTC
console.log(date.getTimezoneOffset() / 60); // dividi por 60 para retornar em horas

// Define o ano de um objeto de data
date.setFullYear(2023); // opcional -> ano, mes, dia
console.log(date); 

// Define o mês de um objeto de data(0-11)
date.setMonth(0);
console.log(date);

// Define o dia de um objeto de data (1-31)
date.setDate(15);
console.log(date);

// Define as horas de um objeto de data (0-23)
date.setHours(13); // Retorna correspondente UTC
console.log(date);

// Define o minuto de um objeto de data (0-59)
date.setMinutes(45);
console.log(date);

// Define o segundo de um objeto de data (0-59)
date.setSeconds(33);
console.log(date);
