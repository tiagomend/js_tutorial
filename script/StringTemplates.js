/*
    JavaScript Template Literals
    Literais de template usam acentos graves (``) em vez de aspas ("")
*/

let text = `Hello World!`;
console.log(text)

// Pode usar aspas simples e duplas dentro da String
text = `He's often called "Johnny"`;
console.log(text);

// Permitem strings de várias linhas
text = 
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text);

// Maneira fácil de interpolar variáveis e expressões -> ${...}
let firstName = "John";
let lastName = "Doe";
text = `Welcome ${firstName} ${lastName}!`;
console.log(text);

// TEMPLATES HTML
let header = "Templates Literals";
let tags = ["template literals", "JavaScript", "ES6"];
let html = 
`<h2>${header}</h2>
<ul>`;

for (const x of tags){
    html += `<li>${x}</li>`;
}
html += `</ul>`;

// Usando template
document.getElementById("demo").innerHTML = html;
