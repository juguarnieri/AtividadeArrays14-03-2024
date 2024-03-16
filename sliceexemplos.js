//Exemplo adicionar:

//Criando um array chamado colors que contém algumas cores como elementos.
let colors = ['Verde', 'Branco', 'Rosa', 'Roxo', 'Azul'];

//Mensagem inicial dos elementos sem adição, e exibir as cores diponíveis.
console.log("Cores disponíveis de lápis:", colors)//Cores disponíveis de lápis: [ 'Verde', 'Branco', 'Rosa', 'Roxo', 'Azul' ]

//O método splice() é utilizado para adicionar o elemento 'Preto' ao array colors na posição 1. Já que o segundo elemento é 0, nada é removido antes.  
colors.splice(1, 0, 'Preto');
console.log("Adicionar cor disponível:" , colors);//Adicionar cor disponível: [ 'Verde', 'Preto', 'Branco', 'Rosa', 'Roxo', 'Azul' ] com mensagem atualizada.

//O método splice(), estamos adicionando os elementos 'Vermelho', 'Amarelo' e 'Cinza' ao array colors, começando pela posição 5. Está adicionando esses elementos após o elemento na posição 4 (índice 5). 
colors.splice(5, 0, 'Vermelho', 'Amarelo', 'Cinza');

console.log("Adicionar mais cores disponíveis no total:", colors); // [ 'Verde', 'Preto', 'Branco', 'Rosa', 'Roxo', 'Azul', 'Vermelho', 'Amarelo', 'Cinza' ]. com mensagem mostrando todas as cores disponíveis.

//Exemplo Remover:

// Inicializando o array animals com uma lista de animais.
let animals = ["gato", "cachorro", "cavalo", "vaca", "pato", "galinha", "jacaré"];

// Usando splice() para remover elementos do array animals.
//Está sendo removido elementos a partir do índice 1 (o segundo elemento, "cachorro") e removendo 2 elementos no total ("cachorro" e "cavalo"). Esses elementos removidos são armazenados na variável removedAnimals.
let removedAnimals = animals.splice(1, 2);

console.log("Animais restantes:", animals);//Exibe os animais restantes no array animals após a remoção.
console.log("Animais removidos:", removedAnimals);//Exibe os animais removidos, que foram armazenados na variável removedAnimals.



