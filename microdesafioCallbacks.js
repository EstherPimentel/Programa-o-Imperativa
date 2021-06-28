/*Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.*/

function acaocarro(callback){
    return callback
}
function andar(){
    return 'O carro está andando'
}

function parar(){
    return 'O carro parou'
}
console.log(acaocarro(parar()))
console.log(acaocarro(andar()))