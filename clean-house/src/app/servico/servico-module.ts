import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoRoutingModule } from './servico-routing-module';
import { Finalizacao } from './finalizacao/finalizacao';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider'; // Para a linha separadora
import { MatDatepickerModule } from '@angular/material/datepicker'; // Para o seletor de data
import { MatNativeDateModule } from '@angular/material/core'; // Necessário para o Datepicker
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Para formulários


@NgModule({
  declarations: [
    Finalizacao
  ],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // IMPORTS DO ANGULAR MATERIAL
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule // IMPORTANTE para o MatDatepicker funcionar
  ]
})
export class ServicoModule { }
