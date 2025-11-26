import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-finalizacao',
  standalone: false,
  templateUrl: './finalizacao.html',
  styleUrl: './finalizacao.css',
})
export class Finalizacao implements OnInit {
  
  solicitacaoForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.solicitacaoForm = this.fb.group({
      // GRUPO DE HORÁRIO
      horarioGroup: this.fb.group({
        dataServico: ['', Validators.required],
        horaInicio: ['', Validators.required],
      }),

      // GRUPO DE ENDEREÇO
      enderecoGroup: this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        bairro: ['', Validators.required],
        cep: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]], // Exemplo de regex para CEP 00000-000
      }),

      // GRUPO DE PAGAMENTO
      pagamentoGroup: this.fb.group({
        numeroCartao: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]], // 16 dígitos
        cvc: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]], // 3 ou 4 dígitos
        nomeResponsavel: ['', Validators.required],
        dataExpiracao: ['', Validators.required],
      })
    });
  }

  onSubmit(): void {
    if (this.solicitacaoForm.valid) {
      console.log('Solicitação de Serviço Válida. Dados para Envio:', this.solicitacaoForm.value);
      alert('Serviço solicitado com sucesso!');
      // Implementação real: Enviar dados para o backend (API)
    } else {
      // Marcar todos os campos como "touched" para exibir mensagens de erro
      this.solicitacaoForm.markAllAsTouched(); 
      console.error('Formulário Inválido. Verifique os campos.');
      alert('Por favor, preencha todos os campos obrigatórios corretamente.');
    }
  }

  // Método auxiliar para acesso fácil aos grupos no HTML
  get form() { return this.solicitacaoForm.controls; }
}
