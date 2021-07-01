//1- Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.//
/*const numerosPares=[2, 4, 6, 8, 10]
const numerosImpares=numerosPares.map(
    el=> el+1
)
console.log(numerosImpares)
console.log(numerosPares)*/

//2- Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.//
let nomes = ['João', 'Joaquim', 'Milena Maria', 'Maria Roberta', 'Maria']
let filtrado = nomes.filter(
    el=> el=='Maria'
)
console.log(filtrado);

//3- Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.//

//Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”//
let numeros = [1, 5, 9, 3, 7];
let formatacao = numeros.reduce(
    (acumulador, numero)=> acumulador + '-' + numero
)
console.log(formatacao);

//4- Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.//
let animais= ['cachorro', 'girafa', 'elefante', 'leão', 'hipopótamo', 'hiena'];
animais.forEach(
    animal=> console.log('O animal é ' + animal)
)
