import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registro } from './cadastro/registro/registro';
import { Finalizacao } from './servico/finalizacao/finalizacao';


const routes: Routes = [
  { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro-module').then(m => m.CadastroModule) },
  { path: 'registro', component: Registro },

{
    path: 'servico',
    loadChildren: () => import('./servico/servico-module').then(m => m.ServicoModule) 
  },
  {
    path: 'finalizacao', // Quando o usuário for para /finalizacao
    loadChildren: () => import('./servico/servico-module').then(m => m.ServicoModule) // Carrega o ServiceModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
