//Exemplo adicionar SPLICE:

//Criando um array chamado colors que contém algumas cores como elementos.
let colors = ['Verde', 'Branco', 'Rosa', 'Roxo', 'Azul'];

//Mensagem inicial dos elementos sem adição, e exibir as cores diponíveis.
console.log("Cores disponíveis de lápis:", colors)//Cores disponíveis de lápis: [ 'Verde', 'Branco', 'Rosa', 'Roxo', 'Azul' ]

//O método splice() é utilizado para adicionar o elemento 'Preto' ao array colors na posição 1. Já que o segundo elemento é 0, nada é removido antes.  
colors.splice(1, 0, 'Preto');
console.log("Adicionar cor disponível:", colors);//Adicionar cor disponível: [ 'Verde', 'Preto', 'Branco', 'Rosa', 'Roxo', 'Azul' ] com mensagem atualizada.

//O método splice(), está adicionando multiplos elementos ao array colors, começando pela posição 5. Está adicionando esses elementos após o elemento na posição 4 (índice 5). 
colors.splice(5, 0, 'Vermelho', 'Amarelo', 'Cinza');

console.log("Adicionar mais cores disponíveis no total:", colors); // Adicionar mais cores disponíveis no total: ['Verde',   'Preto','Branco',  'Rosa','Roxo',    'Vermelho','Amarelo', 'Cinza','Azul']. com mensagem mostrando todas as cores disponíveis.


//Exemplo Remover SPLICE:

// Inicializando o array animals com uma lista de animais.
let animals = ["gato", "cachorro", "cavalo", "vaca", "pato", "galinha", "jacaré"];

// Usando splice() para remover elementos do array animals.
//Está sendo removido elementos a partir do índice 1 (o segundo elemento, "cachorro") e removendo 2 elementos no total ("cachorro" e "cavalo"). Esses elementos removidos são armazenados na variável removedAnimals.
let removedAnimals = animals.splice(1, 2);

//Exibe os animais restantes no array animals após a remoção.
console.log("Animais restantes:", animals);// Animais restantes: [ 'gato', 'vaca', 'pato', 'galinha', 'jacaré' ]
//Exibe os animais removidos, que foram armazenados na variável removedAnimals.
console.log("Animais removidos:", removedAnimals);//Animais removidos: [ 'cachorro', 'cavalo' ]


//Exemplo Substituir SPLICE: 

//Inicializando o array fruits com uma lista de frutas.
let fruits = ["maça", "banana", "mexerica", "uva", "limão", "pera"];

//O método splice() é usado para substituir elementos do array fruits. 
//Os argumentos (0, 2, "laranja", "abacaxi") indicam a remoção de dois elementos a partir do índice 0 "maça" e "banana" e substituindo-os por "laranja" e "abacaxi".
fruits.splice(0, 2, "laranja", "abacaxi");

console.log("Após a substituição das frutas:");//Mensagem: Após a substituição das frutas:

//É exibido o array fruits com a mensagem das frutas já substituídas.
//O método join() foi usado para unir os elementos do array em uma string, separando-os por um ponto e vírgula (;).
console.log("Frutas atualizadas:", fruits.join("; "));//Frutas atualizadas: laranja; abacaxi; mexerica; uva; limão; pera



