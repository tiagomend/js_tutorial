// Objetos JavaScript

const car = {type:"Fiat", model:"500", color:"white"};
// nome:valor

// Definição de objeto
const person = {
    firstName: "John", 
    lastName: "Doe", 
    age: 50, 
    eyeColor: "blue",

    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Acessando Propriedade do Objeto
// Maneira 1:
console.log(person.eyeColor);

// Maneira 2:
console.log(person["firstName"]);

// Chamada do método fullName()
console.log(person.fullName());
// retornará no Node.js >> John Doe
