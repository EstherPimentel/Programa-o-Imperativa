/*Transforme as seguintes funções em arrow functions:

function print(mensagem){
  console.log(mensagem)
}

print("Olá, bom dia")

function soma(n1, n2){
  return n1 + n2
}

console.log(soma(10, 10))*/

let print1 = mensagem => mensagem
   console.log(print1('Olá mundo!'))

let soma = (n1, n2) => n1 + n2;
   console.log(soma(10,10))