// Converter Arrays em String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // retorna Banana,Orange,Apple,Mango

// Convertendo para String especificando o separador
console.log(fruits.join(" | ")); // retorna Banana | Orange | Apple | Mango

// Removendo o último elemento de uma matriz
fruits.pop();
console.log(fruits.join(" | "));

// Adicionando um elemento no final do Array
fruits.push("Kiwi");
console.log(fruits.join(" | "));

// Removendo o primeiro elemento e deslocando os outros um índice abaixo
fruits.shift();
console.log(fruits.join(" | "));

// Adicionando um elemento no início
fruits.unshift("Lemon");
console.log(fruits.join(" | "));

// Concatenando Arrays
const girls = ["Cecilie", "Lone"];
const boys = ["Emil", "Tobias", "Linus"];
console.log(girls.concat(boys)); // Retorna um novo array
console.log(girls); // O método não altera o array existente

// Remover elementos sem deixar buracos
boys.splice(2, 1); // parametro 2 -> posição | parametro 1 -> quantidade
console.log(boys.join(" | ")); 

// Dividir o array em pedaços
console.log(fruits.slice(1, 3)); // método não muda o array, mas retorna um novo
console.log(`O array continua o mesmo ${fruits.join(" | ")}`);