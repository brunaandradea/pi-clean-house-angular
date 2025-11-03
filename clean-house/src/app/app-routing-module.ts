import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registro } from './cadastro/registro/registro';

const routes: Routes = [
  { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro-module').then(m => m.CadastroModule) },
  { path: 'registro', component: Registro }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
