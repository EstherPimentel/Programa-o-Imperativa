let nome = "José da Silva"; // string
let idade = 27; //number
let peso = 83.5; //number float
let altura = 1.70; //number float
let plano = true; // boolean
const imc = (peso / (altura**2)).toFixed(2); // const porque a fórmula nunca muda. toFixed(2) para fixar 2 números depois do ponto.

console.log(nome + " tem " + idade + " anos " + "e seu índice de massa corporal é " + imc);