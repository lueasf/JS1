/* Input: 
n = 10 
["call","call","call"]
Output: [10,11,12] */

var createCounter = function(n) {
    let currentCount = n - 1;
    return function() {
      currentCount += 1;
      return currentCount;      
    };
  };


// CLOSURE
function createAdder(a) {
    return function add(b) {
      const sum = a + b;
      return sum;
    }
  }
  
  const addTo2 = createAdder(2); // addTo2 est donc une fonction qui ajoute 2 à un nombre
  addTo2(5); // 7
// ici on crée une fonctionqui prend une fonction en argument.