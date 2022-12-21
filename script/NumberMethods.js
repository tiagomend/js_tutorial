// Métodos númericos
let x = 123;

// Retorna um número como uma String
console.log(x.toString()); // retorna 123 como string

// Retorna uma string como um número arredondado e escrito usando notação exponencial
x = 9.656;
console.log(x.toExponential(2));

// Retorna uma string com número especifico de casas decimais
console.log(x.toFixed(2)); // retorna 9.66 -> arredonda

// Retorna uma string com número com comprimento especificado
console.log(x.toPrecision(2)) // retorna 9.7

// valueOf -> converte Number em tipo primitivo
x = 123;
console.log(x.valueOf()); // retorna 123

// Convertendo variáveis em Números
let y = "124.50";
console.log(Number(y)); // retorna 124.5 -> objeto
console.log(parseFloat(y)); // retorna 124.5
console.log(parseInt(y)); // retorna 124
