class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    if (this.tipo === "mago") {
      return `${this.nome} atacou usando magia`;
    } else if (this.tipo === "guerreiro") {
      return `${this.nome} usou espada`;
    } else if (this.tipo === "monge") {
      return `${this.nome} usou artes marciais`;
    } else if (this.tipo === "ninja") {
      return `${this.nome} usou shuriken`;
    } else {
      return `${this.nome} não tem ataque definido`;
    }
  }
}

// Perguntar ao usuário
let nome = prompt("Qual o nick do herói?");
let idade = prompt("Qual a idade do herói?");
let classe = prompt("Qual a classe do herói? (mago, guerreiro, monge, ninja)");

// Criar o herói
let heroi = new Heroi(nome, idade, classe);

// Mostrar ação
console.log(heroi.atacar());
