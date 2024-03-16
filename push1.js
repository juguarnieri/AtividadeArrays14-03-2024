// Um array chamado names é declarado e inicializado com 4 elementos: "Júlia", "Gabriel", "Mateus", "Fernanda".
let names = ["Júlia", "Gabriel", "Mateus", "Fernanda"];

//O método push adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. Adicionei dois: "Amanda" e "Moisés".
names.push("Amanda");
names.push("Moisés");

console.log(names); //[ 'Júlia', 'Gabriel', 'Mateus', 'Fernanda', 'Amanda', 'Moisés' ] exibe a lista com os itens adicionados.


// Um array chamado food é declarado e inicializado com 2 elementos: "arroz", "feijão".
let food = ["arroz", "feijão"];

//O método push() é utilizado para adicionar novos elementos ao final do array food. 
//Volta ao novo comprimento do array após a adição dos novos elementos. Esse valor é atribuído à variável total com todos os elementos.
let total = food.push("frango", "cenoura", "macarrão");

console.log(food); // [ 'arroz', 'feijão', 'frango', 'cenoura', 'macarrão' ] todos elementos adicionados ao final.
console.log(total); // 5 (é o novo comprimento do array, após a adição dos elementos).
