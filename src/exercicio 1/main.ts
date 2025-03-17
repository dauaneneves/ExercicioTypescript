import { RetanguloOO } from "./exercicio 1/main";
import { ToDoList } from "./exercicio 1/exercicio 2/main";
import { ContaBancaria } from "./exercicio 1/exercicio 3/main";
import { GerenciadorTarefas } from "./exercicio 1/exercicio 4/main";
import { CalculadoraFormas } from "./exercicio 1/exercicio 5/main";
import { CadastroProdutos } from "./exercicio 1/exercicio 6/main";

const retangulo = new RetanguloOO(10, 5);
retangulo.exibirDetalhes();

const gerenciadorTarefas = new ToDoList();
gerenciadorTarefas.adicionarTarefa("Estudar TypeScript");
gerenciadorTarefas.listarTarefas();

globalThis.console.log("\nBanco:");
const banco = new ContaBancaria();
banco.criarConta(123, 1000);
banco.depositar(123, 500);
banco.sacar(123, 200);
banco.consultarSaldo(123);

const tarefasPessoais = new GerenciadorTarefas();
tarefasPessoais.adicionarTarefa("Fazer compras");
tarefasPessoais.marcarComoConcluida(0);
tarefasPessoais.exibirTarefas();

const calculadora = new CalculadoraFormas();
calculadora.testar();

const cadastroProdutos = new CadastroProdutos();
cadastroProdutos.adicionarProduto("Celular", 1500, 10);
cadastroProdutos.atualizarPreco("Celular", 1800);
cadastroProdutos.exibirRelatorio();
