// Loops -> excutar o mesmo código várias vezes -> valor diferente

/*
    Expressão 1 = executada uma vez antes da execução do bloco
    Expressão 2 = define a condição para executar o bloco
    Expressão 3 = executada todas as vezes após a execução do bloco
*/

let car = ["Palio", "Uno", "Vectra", "Gol", "Voyage"];
console.log("Os carros disponíveis são:")

for (let i = 0; i < car.length; i++) {
    console.log(`${i+1} - ${car[i]};`)
}
