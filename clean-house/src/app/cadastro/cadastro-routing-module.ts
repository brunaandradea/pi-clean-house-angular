import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },

  // 2. Carregamento preguiçoso do módulo de Cadastro
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro-module').then(m => m.CadastroModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
