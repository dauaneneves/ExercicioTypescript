abstract class Funcionario {
  protected nome: string;
  protected salario: number;
  protected cargo: string;

  constructor(nome: string, salario: number, cargo: string) {
    this.nome = nome;
    this.salario = salario;
    this.cargo = cargo;
  }

  abstract calcularVencimentos(): number;
}

class FuncionarioEfetivo extends Funcionario {
  private bonusAnual: number;

  constructor(
    nome: string,
    salario: number,
    cargo: string,
    bonusAnual: number
  ) {
    super(nome, salario, cargo);
    this.bonusAnual = bonusAnual;
  }

  calcularVencimentos(): number {
    return this.salario + this.bonusAnual;
  }
}

class FuncionarioTerceirizado extends Funcionario {
  private custoPorProjeto: number;

  constructor(
    nome: string,
    salario: number,
    cargo: string,
    custoPorProjeto: number
  ) {
    super(nome, salario, cargo);
    this.custoPorProjeto = custoPorProjeto;
  }

  calcularVencimentos(): number {
    return this.salario + this.custoPorProjeto;
  }
}

const efetivo = new FuncionarioEfetivo("Ana", 3000, "Desenvolvedora", 5000);
console.log("Vencimentos (Efetivo):", efetivo.calcularVencimentos());

const terceirizado = new FuncionarioTerceirizado(
  "João",
  2000,
  "Designer",
  1000
);
console.log("Vencimentos (Terceirizado):", terceirizado.calcularVencimentos());
