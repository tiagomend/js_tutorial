/*
    ENTRADA DE DATA

    Existem 3 tipos de formatos de entrada

    1. Data ISO >> "2015-03-25"
    2. Short Date >> "03/25/2015"
    3. Long Date >> "Mar 25 2015" ou "25 Mar 2015"
*/

// Datas ISO (Data-Hora)
let d = new Date("2015-03-25T12:00:00Z");
console.log(d);

// Data ISO de Brasília (-3:00)
d = new Date("2015-03-25T12:00:00-03:00");
console.log(d);

// Converter a data em milisegundo a partir de 01/01/1970
let msec = Date.parse("12-25-2022");
console.log(msec);
