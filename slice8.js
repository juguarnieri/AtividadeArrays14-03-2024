//Exemplo 1:

//Um array chamado papelaria é criado, no qual possui uma lista de materiais escolares.
let papelaria = ["Cola", "Tesoura", "Lápis", "Borracha", "Caneta", "Apontador"];

console.log("Minha lista de material escolar:" + papelaria); // exibindo mensagem inicial sobre a lista de materiais escolares, contendo a lista toda.

console.log("Falta comprar:"); // mensagem final, para extrair os itens que faltam comprar da lista de material escolar

//O método slice(5) é utilizado para extrair uma parte do array papelaria. 
//Um argumento foi passado para slice(), ele extrai o elemento a partir do índice 5 até o final do array.
console.log(papelaria.slice(5));
