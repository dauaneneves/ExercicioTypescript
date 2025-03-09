class Produto {
  nome: string;
  preco: number;
  quantidadeEmEstoque: number;

  constructor(nome: string, preco: number, quantidadeEmEstoque: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidadeEmEstoque = quantidadeEmEstoque;
  }

  atualizarPreco(novoPreco: number): void {
    this.preco = novoPreco;
  }

  adicionarAoEstoque(quantidade: number): void {
    this.quantidadeEmEstoque += quantidade;
  }

  removerDoEstoque(quantidade: number): void {
    if (quantidade <= this.quantidadeEmEstoque) {
      this.quantidadeEmEstoque -= quantidade;
    } else {
      console.log("Quantidade insuficiente em estoque.");
    }
  }

  exibirDetalhes(): void {
    console.log(
      `Produto: ${this.nome}, Preço: R$${this.preco.toFixed(2)}, Estoque: ${
        this.quantidadeEmEstoque
      }`
    );
  }
}

class CadastroProdutos {
  produtos: Produto[] = [];

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  atualizarPreco(nomeProduto: string, novoPreco: number): void {
    const produto = this.produtos.find((p) => p.nome === nomeProduto);
    if (produto) {
      produto.atualizarPreco(novoPreco);
    } else {
      console.log("Produto não encontrado.");
    }
  }

  exibirRelatorio(): void {
    console.log("Relatório de Produtos:");
    this.produtos.forEach((produto) => produto.exibirDetalhes());
  }
}

const cadastro = new CadastroProdutos();
cadastro.adicionarProduto(new Produto("Notebook", 3500, 10));
cadastro.adicionarProduto(new Produto("Mouse", 150, 50));
cadastro.exibirRelatorio();
cadastro.atualizarPreco("Mouse", 120);
cadastro.exibirRelatorio();
