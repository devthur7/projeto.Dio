let nickName = prompt("Seu nome!");
let numeroXp = Number(prompt("Quantidade de XP"));
let nivel = "";

if (numeroXp < 1000) {
    nivel = "Ferro";
} else if (numeroXp >= 1001 && numeroXp <= 2000) {
    nivel = "Bronze";
} else if (numeroXp >= 2001 && numeroXp <= 5000) {
    nivel = "Prata";
} else if (numeroXp >= 5001 && numeroXp <= 7000) {
    nivel = "Ouro";
} else if (numeroXp >= 7001 && numeroXp <= 8000) {
    nivel = "Platina";
} else if (numeroXp >= 8001 && numeroXp <= 9000) {
    nivel = "Ascendente";
} else if (numeroXp >= 9001 && numeroXp <= 10000) {
    nivel = "Imortal";
} else (numeroXp >= 10001) {
    nivel = "Radiante";
}

console.log(O Herói de nome ${nickName} está no nível de ${nivel});
