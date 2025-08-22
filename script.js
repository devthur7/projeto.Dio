function nivelPlay() {
    let saldoVitoria = Number(prompt("Quantas vitorias ?"));
    let nivel = "";

    if (saldoVitoria < 10) {
        nivel = "Ferro";
    } else if (saldoVitoria >= 11 && saldoVitoria <= 20) {
        nivel = "Bronze";
    } else if (saldoVitoria >= 21 && saldoVitoria <= 50) {
        nivel = "Prata";
    } else if (saldoVitoria >= 51 && saldoVitoria <= 80) {
        nivel = "Ouro";
    } else if (saldoVitoria >= 81 && saldoVitoria <= 90) {
        nivel = "Diamante";
    } else if (saldoVitoria >= 91 && saldoVitoria <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Radiante";
    }

    console.log(`O herói tem um saldo de ${saldoVitoria} vitórias e está no nível ${nivel}`);
}

nivelPlay();
