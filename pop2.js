//Exemplo 1:

//Um array chamado animals é declarado e inicializado com 4 elementos:"pato", "cobra", "morcego", "elefante".
let animais = ["pato", "cobra", "morcego", "elefante"];

console.log(animais); //[ 'pato', 'cobra', 'morcego', 'elefante' ] mostra todos os elementos presentes.

// O método pop() remove um item do array, sendo ele o último elemento do array. 
//Não atribui valor a variável.
animais.pop();

console.log(animais); // [ 'pato', 'cobra', 'morcego' ] o último elemento foi removido.


//Exemplo 2: 

//Um array chamado fruits é definido e inicializado com cinco elementos: "Banana", "Pera", "Abacaxi", "Manga" e "Maça".
let fruits = ["Banana", "Pera", "Abacaxi", "Manga", "Maça"];
console.log("-----Lista de compras das frutas-----");//mensagem inicial da lista.
console.log(fruits); //[ 'Banana', 'Pera', 'Abacaxi', 'Manga', 'Maça' ] lista com tudo.

//Método length é usado para determinar o número de elementos no array fruits e esse valor é atribuído à variável tamanho. 
let tamanho = fruits.length;

//Este comando remove o último elemento do array fruits (maça).
fruits.pop(); 

console.log("-----Lista das compras com itens riscados-----");//mensagem final da lista com menos um elemento.

console.log(fruits); //[ 'Banana', 'Pera', 'Abacaxi', 'Manga'] lista com o item removido.
console.log(tamanho); //4 (novo tamanho do comprimento do array, após a remoção do último elemento (maça).
