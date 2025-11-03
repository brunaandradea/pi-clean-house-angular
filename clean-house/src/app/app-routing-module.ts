import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registro } from './cadastro/registro/registro';
import { Home } from './home/home/home';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home-module').then(m => m.HomeModule)
  },
  { path: 'home', component: Home },

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
