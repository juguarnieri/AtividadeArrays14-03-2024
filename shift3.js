// Exemplo 1:

//Um array chamado colors é definido e inicializado com 5 elementos.
let colors = ["Rosa", "Branco", "Verde", "Amarelo", "Azul"];

//Mensagem inicial: "Ordem das cores antes: " seguida pelo conteúdo do array colors no console. Ordem das cores antes: Rosa,Branco,Verde,Amarelo,Azul
console.log("Ordem das cores antes: ", colors);

//Este comando remove o primeiro elemento do array colors e atribui esse elemento removido à variável shifted.
let primeiro  = colors.shift(); 

//Mensagem final: "Ordem das cores depois: " seguida pelo conteúdo atualizado do array colors no console. O primeiro elemento ("Rosa") foi removido. Ordem das cores depois: Branco,Verde,Amarelo,Azul
console.log("Ordem das cores depois: ", colors); 

// Mensagem "Elemento removido: " seguido pelo elemento que foi removido do array colors, na variável 'primeiro'. Item removido: Rosa.
console.log("Item removido: " , primeiro); 