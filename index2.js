function saldoFinal(jogosVencidos, jogosPerdidos) {
    let saldo = 0;

    for(let games = 0; games < jogosVencidos; games++){
        saldo += 10;
    }
    for(let games = 0; games < jogosPerdidos; games++){
        saldo -= 3;
    }
    console.log("O Herói tem de saldo " + saldo);
}

function nivel(vitorias) {
    let rank;
    if(vitorias > 10 && vitorias <= 20){
        rank = "Bronze";
    }
    else if(vitorias > 20 && vitorias <= 50){
        rank = "Prata";
    }
    else if(vitorias > 50 && vitorias <= 80){
        rank = "Ouro";
    }
    else if(vitorias > 80 && vitorias <= 90){
        rank = "Diamante";
    }
    else if(vitorias > 90 && vitorias <= 100){
        rank = "Lendário";
    }
    else if(vitorias >= 101){
        rank = "Imortal";
    }
    console.log("Está no nível " + rank);
}

function main() {
    let win = 42;
    let lose = 5;

    saldoFinal(win, lose);
    nivel(win);
}
main();