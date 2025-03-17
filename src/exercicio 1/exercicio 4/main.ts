class Tarefa {
  descricao: string;
  concluida: boolean;

  constructor(descricao: string) {
    this.descricao = descricao;
    this.concluida = false;
  }

  marcarComoConcluida(): void {
    this.concluida = true;
  }

  exibirDetalhes(): void {
    console.log(
      `Tarefa: ${this.descricao} | Status: ${
        this.concluida ? "Concluída" : "Pendente"
      }`
    );
  }
}

class GerenciadorTarefas {
  tarefas: Tarefa[] = [];

  adicionarTarefa(descricao: string): void {
    this.tarefas.push(new Tarefa(descricao));
  }

  marcarTarefaComoConcluida(index: number): void {
    if (index >= 0 && index < this.tarefas.length) {
      this.tarefas[index].marcarComoConcluida();
    } else {
      console.log("Índice inválido.");
    }
  }

  exibirTarefas(): void {
    this.tarefas.forEach((tarefa, index) => {
      console.log(
        `${index + 1}. ${tarefa.descricao} - ${
          tarefa.concluida ? "Concluída" : "Pendente"
        }`
      );
    });
  }
}
const gerenciador = new GerenciadorTarefas();
gerenciador.adicionarTarefa("Estudar TypeScript");
gerenciador.adicionarTarefa("Fazer exercícios de POO");
gerenciador.exibirTarefas();
gerenciador.marcarTarefaComoConcluida(0);
gerenciador.exibirTarefas();
