/*Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).

Após isso chame a função entrada() dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.*/

function Restaurante(nome, cardapio){
    this.nome = nome;
    this.cardapio = cardapio
    this.entrada = function(){
        return 'Bem vindo ao ' + this.nome + ' temos no cardápio: ' + this.cardapio
    }
}
let novoRestaurante = new Restaurante('Kitanda', ['Pão', 'Ovo', 'Farofa'])
console.log(novoRestaurante.entrada())
