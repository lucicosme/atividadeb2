import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { Turma } from './turma';

@Injectable({providedIn: 'root'})

export class GerenciamentoService {
  private turmas: Turma[] = [];

  adicionarAluno(turmaNome: string, aluno: Aluno): void {
    let turma = this.turmas.find(t => t.nome === turmaNome);
    if (!turma) {
      turma = new Turma(turmaNome);
      this.turmas.push(turma);
    }
    turma.adicionarAluno(aluno);
  }

  listarAlunos(turmaNome: string): string {
    const turma = this.turmas.find(t => t.nome === turmaNome);
    if (turma) {
      return turma.listarAlunos();
    } else {
      return 'Turma não encontrada';
    }
  }
}
