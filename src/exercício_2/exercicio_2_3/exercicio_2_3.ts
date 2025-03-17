class Conta {
  private identificador: string;
  private valorAtual: number;

  constructor(identificador: string, valorAtual: number) {
    this.identificador = identificador;
    this.valorAtual = valorAtual;
  }

  depositar(valor: number): void {
    this.valorAtual += valor;
  }

  sacar(valor: number): boolean {
    if (valor <= this.valorAtual) {
      this.valorAtual -= valor;
      return true;
    }
    return false;
  }

  getSaldo(): number {
    return this.valorAtual;
  }
}

class ContaCorrente extends Conta {
  private limiteChequeEspecial: number;

  constructor(
    identificador: string,
    valorAtual: number,
    limiteChequeEspecial: number
  ) {
    super(identificador, valorAtual);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  sacar(valor: number): boolean {
    if (valor <= this.getSaldo() + this.limiteChequeEspecial) {
      this.depositar(-valor);
      return true;
    }
    return false;
  }
}

class ContaPoupanca extends Conta {
  private taxaJuros: number;

  constructor(identificador: string, valorAtual: number, taxaJuros: number) {
    super(identificador, valorAtual);
    this.taxaJuros = taxaJuros;
  }

  aplicarJuros(): void {
    const juros = this.getSaldo() * this.taxaJuros;
    this.depositar(juros);
  }
}

const contaCorrente = new ContaCorrente("12345", 1000, 500);
const contaPoupanca = new ContaPoupanca("67890", 2000, 0.02);

contaCorrente.depositar(500);
console.log("Saldo Conta Corrente: R$", contaCorrente.getSaldo());

contaPoupanca.aplicarJuros();
console.log("Saldo Conta Poupança com Juros: R$", contaPoupanca.getSaldo());
