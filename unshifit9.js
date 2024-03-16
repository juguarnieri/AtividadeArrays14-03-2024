//Exemplo 1:

// Um array chamado colors é declarado e inicializado com três elementos: "Azul", "Verde" e "Roxo".
let colors = ["Azul", "Verde", "Roxo"];

//O método unshift() é usado para adicionar os elementos "Marrom" e "Rosa" no início do array colors. É póssivel adicionar multiplos itens de uma vez na ordem que são escritos.
colors.unshift("Marrom", "Rosa");

console.log("-----Lista das cores-----");//mensagem inicial.

//o array colors é exibido no console.
console.log(colors);// [ 'Marrom', 'Rosa', 'Azul', 'Verde', 'Roxo' ]
