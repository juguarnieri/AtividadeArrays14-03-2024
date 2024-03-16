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

//Exemplo 2:

////  Um array chamado clubes é definido e inicializado com cinco elementos.
let clubes = ["São Paulo", "Palmeiras", "Santos", "Corinthians", "Ponte Preta"];

//Um loop while continuará executando enquanto o resultado de clubes.shift() não for undefined. Cada item é removido com o método shift() e é atribuído à variável i, dentro do loop.
//Undefined é usado após todos os itens serem removidos do array clubes e o loop While termina.
//O método shift() remove o primeiro elemento do array e retorna esse elemento. 
//O elemento removido é atribuído à variável i.
//Exemplo: O primeiro elemento é removido e atribuído a i. O valor de i será "São Paulo", que é então escrito, isso continua até que todos os elementos sejam removidos (iteração).

while ((i = clubes.shift()) !== undefined) {

//executar os itens removidos (valor atual de i)
    console.log(i);
}

