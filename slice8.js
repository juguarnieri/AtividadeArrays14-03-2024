//Exemplo 1:

//Um array chamado papelaria é criado, no qual possui uma lista de materiais escolares.
let papelaria = ["Cola", "Tesoura", "Lápis", "Borracha", "Caneta", "Apontador"];

console.log("Minha lista de material escolar:" + papelaria); // exibindo mensagem inicial sobre a lista de materiais escolares, contendo a lista toda.

console.log("Falta comprar:"); // mensagem final, para extrair os itens que faltam comprar da lista de material escolar

//O método slice(5) é utilizado para extrair uma parte do array papelaria. 
//Um argumento foi passado para slice(), ele extrai o elemento a partir do índice 5 até o final do array.
console.log(papelaria.slice(5));


//Exemplo 2:

//Uma string chamada frase é declarada e inicializada com a frase "Uma meta é um sonho com um prazo.".
let frase = "Uma meta é um sonho com um prazo.";

//Acontece a junção da string frase com a mensagem "Parte selecionada da frase:" e com a parte selecionada da frase.
//O método slice() é utilizado para extrair uma parte da string frase. Usei índices negativos, no qual, conta a partir do final da string.
//-19 é o índice que representa o início da parte a ser extraída "s" de "sonho".
//-13 é o índice que representa o fim da parte a ser extraída "o" de "sonho".
console.log(frase + "Parte selecionada da frase:" + frase.slice(-19, -13));
