//Exemplo 1:

//Um array chamado animals é declarado e inicializado com 4 elementos:"pato", "cobra", "morcego", "elefante".
let animais = ["pato", "cobra", "morcego", "elefante"];

console.log(animais); //[ 'pato', 'cobra', 'morcego', 'elefante' ] mostra todos os elementos presentes.

// O método pop() remove um item do array, sendo ele o último elemento do array. 
//Não atribui valor a variável.
animais.pop();

console.log(animais); // [ 'pato', 'cobra', 'morcego' ] o último elemento foi removido.
