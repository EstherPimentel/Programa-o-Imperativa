function aquecimento (comida, time){
    let pratos = ['pipoca', 'macarrão', 'carne', 'feijão', 'brigadeiro']
    let tempos = [10, 8, 15, 12, 8]
    for(let i=0; i < pratos.length; i++){
        if(comida == pratos[i]){
            if(time < tempos[i]){
                return 'Tempo insuficiente!'
            }
            else if(time >= tempos[i] && time <= tempos[i]*2){
                return 'Prato pronto, bom apetite!'
            }
            else if(time > tempos[i]*2 && time <= tempos [i]*3){
                return 'Comida queimou!'
            }
            else if(time > tempos [i]*3){
                return 'Kabum!'
            }
        }
    }
    return 'Prato inexistente'
}

//console.log(aquecimento('pipoca', 10));
console.log(aquecimento('macarrão', 8));
//console.log(aquecimento('carne', 15));
//console.log(aquecimento('feijão', 12));
//console.log(aquecimento('brigadeiro', 8));
//console.log(aquecimento('doce', 10));