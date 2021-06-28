/*Com este exercício, vamos construir um if simples.

Declare uma variável com o nome status. Atribua a ela um valor booleano: (true ou false).

Em seguida, faça um if que avalie o valor contido nesta variável. Se o valor armazenado for true, imprima a seguinte mensagem no console: O valor é true - verdadeiro. Caso contrário, imprima a mensagem: O valor é false - falso.*/

let status = true;
if(status === true) {
    console.log('O valor é true - verdadeiro')
}

else if(status ===false) {
    console.log('O valor é false - falso')
}
else {
    console.log('Nenhum dos dois')
}

/*Crie uma variável chamada linguagem, que terá uma string atribuída a ela. Em seguida, construa uma condicional if/else para que, se a variável estiver armazenando o valor "javascript", ela deve imprimir no console, o texto: "Estou aprendendo". Contudo, caso a variável esteja armazenando qualquer outra linguagem, imprima "Aprenderei mais tarde".*/

let linguagem = 'javascript';
if(linguagem == 'javascript') {
    console.log('Estou aprendendo')
}
else {console.log('Aprenderei mais tarde')}


/*Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.

1)	Crie uma função podeSubir() que receba dois parâmetros: 
-	altura da pessoa;
-	se está acompanhada.

Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
a)	A pessoa deve medir mais de 1.40m e menos de 2 metros.
b)	Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
c)	Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.*/

function podeSubir(altura, acompanhada){
    if(altura >= 1.40 && altura <= 2.00){
        return true 
    }
    else if(altura < 1.40 && altura >= 1.20){
        if (acompanhada) {return true} else {return false} 
    }
    else {
        return false
    }
}
console.log( podeSubir(1.19, true));


/*2)	Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
a)	Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
b)	Em caso de impedimento, exiba a mensagem: “Acesso negado.”*/

function podeSubir(altura, acompanhada){
    if(altura >= 1.40 && altura <= 2.00){
        return 'Acesso autorizado' 
    }
    else if(altura < 1.40 && altura >= 1.20){
        if (acompanhada) {return 'Acesso autorizado'} else {return 'Acesso autorizado somente com acompanhante'} 
    }
    else {
        return 'Acesso negado'
    }
}
console.log( podeSubir(1.30, false));


/*Crie um algoritmo utilizando switch que receba uma string e tenha 5 situações:

Situação 1 – Caso na string esteja escrito “Verão”, deve exibir no console a mensagem: “Que calor hein?!”.

Situação 2 – Caso na string esteja escrito “Inverno”, deve exibir no console a mensagem: “Frio dms!”.

Situação 3 – Caso na string esteja escrito “Outono”, deve exibir no console a mensagem: “É a estação em que as folhas caem”.

Situação 4 – Caso na string esteja escrito “Primavera”, deve exibir no console a mensagem: “O momento em que as flores crescem”.

Situação 5 – Caso não se aplique nenhuma das opções acima, deve exibir no console a mensagem: “Ops, estação inválida”.*/

let estação = 'nada';
switch(estação){
    case 'verão': console.log('Que calor, hein?!');
    break;
    case 'inverno': console.log('frio demais!');
    break;
    case 'outono': console.log('É a estação em que as folhas caem');
    break;
    case 'primavera': console.log('O momento em que as flores crescem');
    break;
    default: console.log('Ops, estação inválida');
    break;
}
