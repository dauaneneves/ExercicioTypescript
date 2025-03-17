import { Funcionario } from "src/exer/exercicio_2_1/exe.ts";
import { Onibus, Taxi } from "./exercicio_2_2/exe.ts";
import { ContaCorrente, ContaPoupanca } from "./exercicio_2_3/exe.ts";

// Exercício 1
const funcionario = new Funcionario("João", 30, 3000);
console.log(
  `Funcionário: ${funcionario.nome}, Idade: ${
    funcionario.idade
  }, Salário: ${funcionario.calcularSalario()}`
);

// Exercício 2
const onibus = new Onibus("Ônibus Escolar", "45 passageiros", 0.5);
const taxi = new Taxi("Taxi Executivo", "4 passageiros", 2);
console.log(`Ônibus: ${onibus.calcularConsumo(100)} litros para 100 km`);
console.log(
  `Táxi: ${taxi.calcularConsumo(50, 3)} litros para 50 km com 3 passageiros`
);

// Exercício 3
const contaCorrente = new ContaCorrente("001", 1000, 500);
const contaPoupanca = new ContaPoupanca("002", 2000, 0.05);
contaCorrente.depositar(500);
contaPoupanca.aplicarJuros();
console.log(`Conta Corrente Saldo: ${contaCorrente.valorAtual}`);
console.log(`Conta Poupança Saldo: ${contaPoupanca.valorAtual}`);
