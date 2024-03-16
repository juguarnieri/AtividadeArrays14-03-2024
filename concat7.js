//Exemplo 1:

// Declarei duas listas: clothers contendo itens de vestuário e accessories contendo acessórios.
let clothers = ["saia", "camisa", "calça"];
let accessories = ["pulseira", "anel", "colar"];

//O método concat() é usado para combinar as duas listas. 
//Ambos foi usado para declarar uma nova variável que vai armazenar o resultado da concatenação das duas listas.
//Cria uma matriz que contém os elementos da matriz original (clothers) seguidos pelos elementos da segunda matriz (accessories), mantendo a mesma ordem.
let ambos = clothers.concat(accessories);

console.log("Lista de compras femininas do mês:");// mensagem inicial para mostrar as compras.
console.log(ambos);//Cria uma nova lista chamada ambos, que contém todos os itens de vestuário e acessórios.

//Exemplo 2:

//Declarei dois arrays de objetos. O array children contém objetos com o nome de crianças, enquanto o array adults contém objetos com o nome de adultos.
let children = [{ name: "Júlia" }, { name: "Anna" }];
let adults = [{ name: "Antonia" }, { name: "Neusa" }];

// O método concat() é usado combinar os arrays children e adults em um único array chamado todos. 
//Cria uma matriz que contém os elementos dos dois arrays originais, mantendo a mesma ordem.
let todos = children.concat(adults);

//O método unshift()é usado para adicionar um novo objeto { name: "Amanda" } ao início do array todos. 
todos.unshift({ name: "Amanda" });

// Os arrays são impressos no console (children e adults), 
console.log(children);//[ { name: 'Júlia' }, { name: 'Anna' } ]
console.log(adults);//[ { name: 'Antonia' }, { name: 'Neusa' } ]

// Mensagem informativa "Lista completa dos nomes:".
//Impresso a lista completa de nomes contida no array todos.
console.log("Lista completa dos nomes:", todos);//Lista completa dos nomes: [ { name: 'Amanda' },{ name: 'Júlia' },{ name: 'Anna' }, {name: 'Antonia' },{ name: 'Neusa' } ]