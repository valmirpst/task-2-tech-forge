class Consumidor {
  public nome: string;
  public idade: number;
  public email: string;

  constructor(nome: string, idade: number, email: string) {
    this.validarNome(nome);
    this.validarIdade(idade);

    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  private validarNome(nome: string) {
    if (nome.trim().length < 2) {
      throw new Error("O nome deve ter pelo menos 2 caracteres.");
    }
  }

  private validarIdade(idade: number) {
    if (idade < 0) {
      throw new Error("A idade deve ser um número positivo.");
    }
  }

  formatarExibicao(): string {
    return `Consumidor: ${this.nome} (${this.idade} anos) - ${this.email}`;
  }

  static calcularMediaIdade(consumidores: Consumidor[]): number {
    if (consumidores.length === 0) return 0;
    const somaIdades = consumidores.reduce((acc, c) => acc + c.idade, 0);
    return somaIdades / consumidores.length;
  }

  static obterExtremosIdade(consumidores: Consumidor[]): {
    maisVelho: Consumidor | undefined;
    maisNovo: Consumidor | undefined;
  } {
    let maisVelho: Consumidor | undefined = consumidores[0];
    let maisNovo: Consumidor | undefined = consumidores[0];

    if (maisVelho != undefined && maisNovo != undefined) {
      for (const c of consumidores) {
        if (c.idade > maisVelho.idade) maisVelho = c;
        if (c.idade < maisNovo.idade) maisNovo = c;
      }
    }

    return { maisVelho, maisNovo };
  }
}

const listaConsumidores: Consumidor[] = [
  new Consumidor("Ana Silva", 30, "ana@email.com"),
  new Consumidor("Carlos Souza", 22, "carlos@email.com"),
  new Consumidor("Mariana Lima", 45, "mariana@email.com"),
  new Consumidor("Roberto Alves", 19, "roberto@email.com"),
  new Consumidor("Fernanda Dias", 33, "fernanda@email.com"),
];

console.log("=== LISTA DE CONSUMIDORES ===");
listaConsumidores.forEach((c) => console.log(c.formatarExibicao()));

console.log("\n=== ANÁLISE ESTATÍSTICA ===");
const media = Consumidor.calcularMediaIdade(listaConsumidores);
console.log(`Média das Idades: ${media.toFixed(1)} anos`);

const { maisVelho, maisNovo } = Consumidor.obterExtremosIdade(listaConsumidores);
if (maisVelho != undefined && maisNovo != undefined) {
  console.log(`Mais Velho(a): ${maisVelho.nome} (${maisVelho.idade} anos)`);
  console.log(`Mais Novo(a): ${maisNovo.nome} (${maisNovo.idade} anos)`);
} else {
  console.log("Não foi possível calcular os extremos de idade");
}
