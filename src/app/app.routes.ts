import { Routes } from '@angular/router';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';

export const routes: Routes = [
    {path:'', component:CadastroAlunoComponent},
    { path: 'aluno', component: ListaAlunosComponent}
];
