import { Component } from '@angular/core';
import { GerenciamentoService } from '../gerenciamento.service';
import { Aluno } from '../aluno';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.css'
})
export class CadastroAlunoComponent {
  nome: string = '';
  idade: number = 0;
  matricula: string = '';
  turma: string = '';

  constructor(private gerenciamentoService: GerenciamentoService) {}

  adicionarAluno(): void {
    const aluno = new Aluno(Date.now(), this.nome, this.idade, this.matricula);
    this.gerenciamentoService.adicionarAluno(this.turma, aluno);
    alert(`Aluno ${this.nome} adicionado à turma ${this.turma}`);
  }
}
