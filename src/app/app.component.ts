import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CadastroAlunoComponent, ListaAlunosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividadeb2';
}
