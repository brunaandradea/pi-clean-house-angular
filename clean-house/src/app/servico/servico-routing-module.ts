import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Finalizacao } from './finalizacao/finalizacao';

const routes: Routes = [
  { path: '', component: Finalizacao } // O componente principal do módulo (Será carregado em /finalizacao)
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
