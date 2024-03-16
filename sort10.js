//Exemplo 1:

//Defini um array chamado names que contém uma lista de nomes.
let names = ["Sabrina", "Letícia", "Joaquim", "Eduardo", "Arthur"];

//Esse método sort () é usado para ordenar os elementos de um array em ordem alfabética. 
names.sort(); 

//Mensagem inicial para informar a ordem.
//Exibe os nomes em ordem alfabética.
console.log("Segue os nomes da turma em ordem alfabética:", names);//Segue os nomes da turma em ordem alfabética: [ 'Arthur', 'Eduardo', 'Joaquim', 'Letícia', 'Sabrina' ]


//Exemplo 2:
//Defini um array chamado compras. Cada objeto possui duas propriedades: objeto, que descreve o item comprado, e preço, que indica o preço do item.
let compras = [
    { objeto: "Luva", preço: 28.99 },
    { objeto: "Óculos", preço: 125.49 },
    { objeto: "Sandália", preço: 75.99 },
    { objeto: "Batom", preço: 19.99 },
    { objeto: "Caneca", preço: 59.99 },
    { objeto: "Perfume", preço: 159.49 },
];

//O método sort() foi usado para ordenar os objetos dentro do array compras com base no preço. 
//Usei a função de comparação, para comparar dois objetos a e b do array compras.
//Em cada iteração, a função subtrai o preço de b do preço de a.
//Subtraindo b.preço de a.preço, a função determina se a deve vir antes ou depois de b no array ordenado. 
//Se o resultado for negativo, a será colocado antes de b; 
//Se for positivo, a será colocado depois de b; 
//Se for zero, a ordem permanecerá inalterada.
compras.sort((a, b) => a.preço - b.preço);

//Mensagem sobre a ordem por valor.
//Concole.log para exibir o array compras ordenado por preço.
console.log("Compras ordenadas por valor:", compras);//Compras ordenadas por valor: [ { objeto: 'Batom', 'preço': 19.99 }, { objeto: 'Luva', 'preço': 28.99 },{ objeto: 'Caneca', 'preço': 59.99 }, { objeto: 'Sandália', 'preço': 75.99 }, { objeto: 'Óculos', 'preço': 125.49 }, { objeto: 'Perfume', 'preço': 159.49 }]
  


