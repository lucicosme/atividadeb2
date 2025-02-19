import { Component } from '@angular/core';
import { GerenciamentoService } from '../gerenciamento.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-alunos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-alunos.component.html',
  styleUrl: './lista-alunos.component.css'
})
export class ListaAlunosComponent {
  turma: string = '';
  alunos: string = '';

  constructor(private gerenciamentoService: GerenciamentoService) {}

  listarAlunos(): void {
    this.alunos = this.gerenciamentoService.listarAlunos(this.turma);
  }
}


