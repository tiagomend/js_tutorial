/* 
    CRIANDO OBJETOS DE DATA
    
    Existem 9 maneiras de criar um novo objeto de data:
    >> new Date()
    >> new Date(date string)
    >> new Date(year,month)
    >> new Date(year,month,day)
    >> new Date(year,month,day,hours)
    >> new Date(year,month,day,hours,minutes)
    >> new Date(year,month,day,hours,minutes,seconds)
    >> new Date(year,month,day,hours,minutes,seconds,ms)
    >> new Date(milliseconds)
*/

let d = new Date();
console.log(d); // retorna o horário atual de londres

// Criando um objeto de data a partir de uma string de data
d = new Date("October 13, 2014 11:13:00");
console.log(d);

d = new Date("2022-03-25");
console.log(d);

// Especificado data
d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);

// JavaScript conta meses de 0 a 11

d = new Date(99, 11, 24);
console.log(d);

// Métodos de Data
d = new Date();
console.log(d.toString());

// Converte data em um formato mais legível
console.log(d.toDateString());

// Converte uma data em uma string no padrão UTC
console.log(d.toUTCString());

// Converte uma data em uma string no padrão ISO
console.log(d.toISOString());
