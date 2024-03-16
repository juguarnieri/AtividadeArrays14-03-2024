//Exemplo 1:

// Um array chamado colors é declarado e inicializado com três elementos: "Azul", "Verde" e "Roxo".
let colors = ["Azul", "Verde", "Roxo"];

//O método unshift() é usado para adicionar os elementos "Marrom" e "Rosa" no início do array colors. É póssivel adicionar multiplos itens de uma vez na ordem que são escritos.
colors.unshift("Marrom", "Rosa");

console.log("-----Lista das cores-----");//mensagem inicial.

//o array colors é exibido no console.
console.log(colors);// [ 'Marrom', 'Rosa', 'Azul', 'Verde', 'Roxo' ]


//Exemplo 2:

//Um array chamado numbers é declarado e inicializado com três elementos: 1, 2 e 3.
let numbers = [1, 2, 3];

//O método unshift() é usado para adicionar os elementos (0, -1) no início do array numbers. É possível adicionar múltiplos itens de uma vez na ordem que são escritos. 
//A variável total é usada para retornar o novo comprimento do array numbers após a adição dos novos elementos.
let total = numbers.unshift(0, -1,);

console.log(numbers);// o array numbers é exibido com todos os elementos.
console.log(total);// representa o comprimento atual do array = 5.


