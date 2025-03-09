export class RetanguloOO {
  private largura: number;
  private altura: number;

  constructor(largura: number, altura: number) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }

  exibirDetalhes(): void {
    console.log(`A área do retângulo é: ${this.calcularArea()}`);
  }
}

const retangulo = new RetanguloOO(10, 5);
retangulo.exibirDetalhes();
