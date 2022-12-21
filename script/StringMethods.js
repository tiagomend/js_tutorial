let text = "Hello World! Vamos programar em JavaScript.";
console.log(text);

// Propriedade que retorna o comprimento de uma string
console.log("Tamanho da String:" + text.length);

// Fatia de string em JavaScript
console.log(text.slice(0, 5)); // retorna -> Hello

console.log(text.slice(32)); // retorna -> JavaScript.

// Fatia de string com substring()
console.log(text.substring(0, 5)); // retorna -> Hello

// Substituindo o conteúdo da String
console.log(text.replace("Vamos", "Iremos"));
// Para substituir todas ocorrências -> /Vamos/g ou método replaceAll()

// Converter para maiúsculas
console.log(text.toUpperCase());

// Converter para minúsculas
console.log(text.toLowerCase());

// Concatenar string
console.log(text.concat(" ", "Bora!", " Estou animado!"));

// Remover espaços em branco de ambos os lados de uma String
let text1 = "        Hello World!        ";
console.log(text1.trim()); // retorna Hello World!

// Remove espaços apenas no início
console.log(text1.trimStart());

// Remove espaços apenas no final
console.log(text1.trimEnd());

// Extraindo caracteres de String
console.log(text.charAt(0)); // retorna letra "H"
console.log(text.charCodeAt(1)); // retorna código UTF-16 da letra "e"
console.log(text[2]); // retorna letra "l" -> Apenas leitura

// Convertendo uma String em Array
console.log(text.split(" "));
