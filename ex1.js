// Les fonctions

function f(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7

//  OU
var g = function(a, b) {
    const sum = a + b;
    return sum;
}
console.log(g(3, 8)); // 11

//  OU
const h = (a, b) => {
    const sum = a + b;
    return sum;
};
console.log(h(3, 4)); // 7

//  OU One-liner
const j = (a, b) => a + b;
console.log(j(3, 4)); // 7

// Écrire une fonction qui renvoie hello world
var helloWorld = function() {
    console.log("Hello World");
};
// Appel de la fonction pour afficher "Hello World"
helloWorld();