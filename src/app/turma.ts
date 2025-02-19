import { Aluno } from "./aluno";

export class Turma {
    
        nome: string;
        alunos: Aluno[] = [];
      
        constructor(nome: string) {
          this.nome = nome;
        }
      
        adicionarAluno(aluno: Aluno): void {
          this.alunos.push(aluno);
          aluno.adicionarTurma(this.nome);
        }
      
        listarAlunos(): string {
          return this.alunos.map(a => a.exibirInfo()).join('\n');
        }
      }
      

