// Invocação de função

var x = myFunction(4, 3);
console.log(x);

function myFunction(a, b){
    return a * b;
}

// Retorno do valor 12 no Node.js

// Acessar um função sem () retornará o objeto da função
console.log(myFunction);

// Com () retornará o resultado da função
console.log(myFunction(5, 2));
