//Exemplo 1:

// Declarei duas listas: clothers contendo itens de vestuário e accessories contendo acessórios.
let clothers = ["saia", "camisa", "calça"];
let accessories = [ "pulseira", "anel", "colar"];

//O método concat() é usado para combinar as duas listas. 
//Ambos foi usado para declarar uma nova variável que vai armazenar o resultado da concatenação das duas listas.
//Cria uma matriz que contém os elementos da matriz original (clothers) seguidos pelos elementos da segunda matriz (accessories), mantendo a mesma ordem.
let ambos = clothers.concat(accessories);

console.log("Lista de compras femininas do mês:");// mensagem inicial para mostrar as compras.
console.log(ambos);//Cria uma nova lista chamada ambos, que contém todos os itens de vestuário e acessórios.
