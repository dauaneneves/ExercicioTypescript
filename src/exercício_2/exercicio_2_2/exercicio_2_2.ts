abstract class Veiculo {
  protected modelo: string;
  protected capacidade: string;

  constructor(modelo: string, capacidade: string) {
    this.modelo = modelo;
    this.capacidade = capacidade;
  }

  abstract calcularConsumo(distancia: number, passageiros?: number): number;
}

class Onibus extends Veiculo {
  private consumoPorKm: number;

  constructor(modelo: string, capacidade: string, consumoPorKm: number) {
    super(modelo, capacidade);
    this.consumoPorKm = consumoPorKm;
  }

  calcularConsumo(distancia: number): number {
    return distancia * this.consumoPorKm;
  }
}

class Taxi extends Veiculo {
  private taxaPorPassageiro: number;

  constructor(modelo: string, capacidade: string, taxaPorPassageiro: number) {
    super(modelo, capacidade);
    this.taxaPorPassageiro = taxaPorPassageiro;
  }

  calcularConsumo(distancia: number, passageiros: number = 1): number {
    return distancia * passageiros * this.taxaPorPassageiro;
  }
}

const onibus = new Onibus("Volvo", "50", 0.5);
console.log("Consumo do ônibus:", onibus.calcularConsumo(100), "litros");

const taxi = new Taxi("Fiat Uno", "4", 0.2);
console.log("Consumo do táxi:", taxi.calcularConsumo(50, 3), "litros");
