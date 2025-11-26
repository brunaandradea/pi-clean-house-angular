import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-registro',
  standalone: false,
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro implements OnInit {
  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)]], 
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/)]], 
      senha: ['', [Validators.required, Validators.minLength(6)]],
      aceitoTermos: [false, Validators.requiredTrue] 
    });
  }

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      const dadosParaEnvio = { ...this.cadastroForm.value };

      dadosParaEnvio.cpf = dadosParaEnvio.cpf.replace(/\D/g, '');
      dadosParaEnvio.telefone = dadosParaEnvio.telefone.replace(/\D/g, '');

      this.apiService.cadastrarUsuario(dadosParaEnvio)
        .subscribe({
          next: (response: any) => {
            console.log('Sucesso', response);
            alert('Cadastro realizado!');
            
            this.cadastroForm.reset(); 
          },
          error: (error: any) => {
            console.error('Erro:', error);
            
            alert('Erro ao cadastrar: ' + (error.error?.message || 'Tente novamente.'));
          }
        });
    } else {
      this.cadastroForm.markAllAsTouched();
    }
  }
}
