// Métodos de ordenação de Array em JavaScript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); // retorna o array não ordenado

// Ordenando em ordem alfabética
fruits.sort();
console.log(fruits); // retorna o array já ordenado

// Método reverse() inverte os elementos de um array
fruits.reverse();
console.log(fruits); // retorna em ordem decrescente

/*
    ORDENAÇÃO NUMÉRICA

    O método sort() classifica os valores como string.
    Desta forma, produzirá resultado incorreto ao ordenar números.
    A solução para esse problema é usar uma função de comparação
*/
const points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(`Ordenação incorreta com sort() = ${points.join(" | ")}`);

// Ordenação sort() com função de comparação
points.sort(function(a, b){return a - b});
console.log(`Ordenação sort() com função de comparação = ${points.join(" | ")}`);

// Ordenando um array em ordem aleatória
points.sort(function(){return 0.5 - Math.random()});
console.log(points);

/*
    MÉTODO FISHER YATES

    O exemplo acima não é preciso. Isso favorecerá alguns 
    números em detrimento de outros. O método correto 
    mais popular é chamado de shuffle de Fisher Yates e 
    foi introduzido na ciência de dados já em 1938!
*/
points.sort(function(a, b){return a - b});
console.log(points);

for (let i = points.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
}
console.log(points);

// Econtrar o valor mais alto com ordenação decrescente
points.sort(function(a, b){return b -a});
console.log(`No array (${points.join(" | ")}) o valor mais alto é ${points[0]}`);

// Encontrar o número mais alto em um array
console.log(Math.max.apply(null, points)); // retorna 100

// Encontrar o número mais baixo em um array
console.log(Math.min.apply(null, points)); // retorna 1
