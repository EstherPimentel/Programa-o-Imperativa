//função declarada
function imc (nome, idade, peso, altura) {
    let resultado = (peso / (altura**2)).toFixed(2)
      return nome + " tem " + idade + " anos e seu IMC é " + resultado
    }

    console.log(imc("Marcelo", 27, 80.1, 1.86))
    console.log(imc("Carlos", 28, 83.5, 1.70))



//função expressa
/*let imc = function (nome, idade, peso, altura) { 
let resultado = (peso / (altura**2)).toFixed(2)
     return nome + " tem " + idade + " anos e seu IMC é " + resultado
    }
console.log(imc("Marcelo", 27, 80.1, 1.86))
console.log(imc("Carlos", 28, 83.5, 1.70)) */