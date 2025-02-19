import { Pessoa } from "./pessoa";

export class Aluno extends Pessoa {
    matricula: string;
  turmas: string[] = [];

  constructor(
    id: number, 
    nome: string, 
    idade: number,
     matricula: string) {
        
    super(id, nome, idade);
    this.matricula = matricula;
  }

  override exibirInfo(): string {
    return `${super.exibirInfo()}, Matrícula: ${this.matricula}, Turmas: ${this.turmas.join(', ')}`;
  }

  adicionarTurma(turma: string): void {
    this.turmas.push(turma);
  }
}


