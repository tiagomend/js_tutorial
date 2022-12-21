// Arrays em JavaScript

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// Acessando elementos da matriz por índice
console.log(cars[0]);

// fornecer valores
cars[3] = "Chevrolet";
console.log(cars);

// Alterando um Elemento do Array
cars[0] = "Opel";
console.log(cars);

// Pode ter funções, objetos e outra array

// Retorna número de elementos
console.log(cars.length); // retorna 4

// Reorganização do Array -> ordem alfabética
console.log(cars.sort());

// Acessando o primeiro elemento da matriz
console.log(cars[0]);

// Acessando o último elemento da matriz
console.log(cars[cars.length - 1]);

// For loop para iterar sobre elementos do Array
for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// Adicionando um novo elemento ao array
cars.push("Chevet");
console.log(cars);

// Adicionando elemento usando propriedade length
cars[cars.length] = "Opala";
console.log(cars);

// Verificar se objeto é um array
// Maneira 1:
console.log(Array.isArray(cars)); // retorna true
// Maneira 2: verifica se objeto é criado por determinado construtor
console.log(cars instanceof Array); // retorna true
