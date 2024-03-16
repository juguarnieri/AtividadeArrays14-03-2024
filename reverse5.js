//Exemplo 1:
//Um array chamado carros é declarado e inicializado com uma lista de modelos de carros.
let carros = ["Corola", "Meriva", "Corsa", "Celta", "Picasso"];

//O método reverse() é usado para inverter a ordem dos elementos no array carros. 
carros.reverse();

console.log("Lista inversa dos carros vendidos na semana:")//mensagem que a lista de carros vendidos na semana inversa será executada.

console.log(carros); // [ 'Picasso', 'Celta', 'Corsa', 'Meriva', 'Corola' ] lista inversa.


//Exemplo 2:

// Um array chamado numbers é declarado e inicializado com uma sequência de números de 1 a 10.
let numbers = [1, 2, 3, 4, 5, 6];

//Criei uma cópia do array numbers, revertendo e atribuindo à variável numbersInvertido. 
//O método slice(0) é usado para criar uma cópia do array numbers. O índice 0 para o slice() significa que copiei todos os elementos do array numbers.
// O método reverse() é usado para inverter a ordem dos elementos no array. Este método modifica o array original, e não cria uma cópia. 
//A cópia do slice é invertida.
let numbersInvertido = numbers.slice(0).reverse();

console.log(numbers); //[ 1, 2, 3, 4, 5, 6] Sem modificação.
    
console.log(numbersInvertido); // [ 6, 5, 4, 3, 2, 1 ] Números invertidos.

//Criei outra cópia invertida do array original `numbers`, armazenado na variável `numbersInvertidos`. 
//`numbers.reverse()`,  que inverte a ordem dos elementos no array `numbers`.  
let numbersInvertidos = numbers.reverse();

//Exibiu o primeiro elemento do array `numbers` após a segunda inversão. 
//o primeiro elemento deste array, é 6.
console.log(numbers[0]); 

