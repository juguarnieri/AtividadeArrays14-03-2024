//Exemplo 1:

//Um array chamado palavras é declarado e inicializado com cinco strings.
let palavras = ['Viver', 'é', 'desenhar', 'sem', 'borracha'];

console.log("A frase do dia é:")// mensagem inicial.

//O método join() é usado para juntar todos os elementos do array palavras em uma única string. 
//O argumento " "  é o separador que será utilizado entre os elementos. Utilizei o espaço em branco, cada elemento é separado por ele. 
console.log(palavras.join(" "));


//Exemplo 2:

//Um array chamado names é declarado e inicializado com cinco strings.
let names = ['Renata', 'Madalena', 'Carlos', 'Gustavo', 'Livia'];

console.log("Lista de Alunos Aprovados do ano:");//mensagem inicial para mostrar os alunos aprovados.

//O método join() é usado para juntar todos os elementos do array names em uma única string. 
//O argumento "; " é o separador que será utilizado entre os elementos. Neste caso, estou usando ", ". 
console.log(names.join(", ")); 

console.log("Parabéns a todos os envolvidos!!!");//mensagem final dando os parabéns aos alunos que passaram.
