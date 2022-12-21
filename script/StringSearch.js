// Indice da posição da primeira ocorrência - indexOf()
let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate")); // retorna 7

// Indice da última ocorrência de um texto - lastIndexOf()
console.log(str.lastIndexOf("locate")); // retorna 21

// indexOf e lasIndexOf retornará -1 se o texto não for encontrado
console.log(str.indexOf("John")); // retorna -1

// Segundo parâmetro como posição inicial para a pesquisa
console.log(str.indexOf("locate", 15)); // retorna 21

console.log(str.lastIndexOf("locate", 15)); // retorna 7 >> busca de trás para frente

// método search() - não pode receber segundo parâmetro mais pode  receber expressões regulares
console.log(str.search("locate")); // retorna 7

console.log(str.search(/locate/)); // retorna 7

// Retorna uma matriz contendo os resultados da correspondência
let text = "The rain in SPAIN stays mainly in the pain";
console.log(text.match("ain"));

console.log(text.match(/ain/));

// Pesquisa global
console.log(text.match(/ain/g));

// Pesquisa global sem distinção entre maiúsculas e minúsculas
console.log(text.match(/ain/gi));

// matchAll() -> retorna um iterador com as correspondente
console.log(text.matchAll("ain"));

// retorna true se uma string conter um valor especificado
text = "Hello World, welcome to the universe."
console.log(text.includes("World")); // retorna true

// verifica se "World" começa na posição 12
console.log(text.includes("World", 12)); // retorna false
console.log(text.includes("World", 6)); // retorna true

// Retorna true se uma string começacom um valor especificado
console.log(text.startsWith("Hello")); // retorna true
console.log(text.startsWith("World")); // retorna false
