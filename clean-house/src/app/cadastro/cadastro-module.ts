import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing-module';
import { Registro } from './registro/registro';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Necessário para formulários

@NgModule({
  declarations: [
    Registro
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormsModule, // Para usar ngModel (opcional, mas recomendado)
    ReactiveFormsModule, // Para usar Reactive Forms (melhor prática)
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class CadastroModule { }
