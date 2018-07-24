import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './fases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  frases: Frase[] = FRASES;

  instrucao = 'Traduza a frase:';

  resposta = '';

  rodada = 0;

  rodadaFrase: Frase;

  progresso = 0;

  tentativas = 3;

  @Output() encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor( ) { 
    this.atualizaRodada();
   }

  ngOnInit() {
  }

  atuallizaResposta(teste: Event){
    this.resposta = (<HTMLInputElement>teste.target).value;
  }

  verificarResposta(){

    if(this.resposta == this.rodadaFrase.frasePtBr){
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);
      if(this.rodada == this.frases.length){
        this.encerrarJogo.emit('vitoria')
      }
      this.atualizaRodada();
    }
    else{
      this.tentativas--;

      if(this.tentativas == -1){
        this.encerrarJogo.emit('derrota')
      }

    }
    
  }

  atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }

}
