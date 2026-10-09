// 1. Definição do contrato de dados usando 'type'
type ConsumidorDTO = {
  nome: string;
  idade: number;
  email: string;
};

// Array para armazenar os consumidores
const listaConsumidores: ConsumidorDTO[] = [];

// 2. Função solta para criar o objeto consumidor
function criarConsumidor(nome: string, idade: number, email: string): ConsumidorDTO {
  return {
    nome,
    idade,
    email,
  };
}

// 3. Função solta para formatar a exibição
function formatarExibicao(consumidor: ConsumidorDTO): string {
  return `Consumidor: ${consumidor.nome} (${consumidor.idade} anos) - ${consumidor.email}`;
}

// 4. Função para calcular a média de idade
function calcularMediaIdade(consumidores: ConsumidorDTO[]): number {
  if (consumidores.length === 0) return 0;
  const somaIdades = consumidores.reduce((acc, c) => acc + c.idade, 0);
  return somaIdades / consumidores.length;
}

// 5. Função para encontrar extremos de idade
function obterExtremosIdade(consumidores: ConsumidorDTO[]): {
  maisVelho: ConsumidorDTO | undefined;
  maisNovo: ConsumidorDTO | undefined;
} {
  let maisVelho: ConsumidorDTO | undefined = consumidores[0];
  let maisNovo: ConsumidorDTO | undefined = consumidores[0];

  if (maisVelho != undefined && maisNovo != undefined) {
    for (const c of consumidores) {
      if (c.idade > maisVelho.idade) maisVelho = c;
      if (c.idade < maisNovo.idade) maisNovo = c;
    }
  }

  return { maisVelho, maisNovo };
}

// --- EXECUÇÃO DE TESTE ---
listaConsumidores.push(criarConsumidor("Ana Silva", 30, "ana@email.com"));
listaConsumidores.push(criarConsumidor("Carlos Souza", 22, "carlos@email.com"));
listaConsumidores.push(criarConsumidor("Mariana Lima", 45, "mariana@email.com"));
listaConsumidores.push(criarConsumidor("Roberto Alves", 19, "roberto@email.com"));
listaConsumidores.push(criarConsumidor("Fernanda Dias", 33, "fernanda@email.com"));

console.log("=== LISTA DE CONSUMIDORES ===");
listaConsumidores.forEach((c) => console.log(formatarExibicao(c)));

console.log("\n=== ANÁLISE ESTATÍSTICA ===");
console.log(`Média das Idades: ${calcularMediaIdade(listaConsumidores).toFixed(1)} anos`);

const { maisVelho, maisNovo } = obterExtremosIdade(listaConsumidores);
if (maisVelho != undefined && maisNovo != undefined) {
  console.log(`Mais Velho(a): ${maisVelho.nome} (${maisVelho.idade} anos)`);
  console.log(`Mais Novo(a): ${maisNovo.nome} (${maisNovo.idade} anos)`);
} else {
  console.log("Não foi possível calcular os extremos de idade");
}
