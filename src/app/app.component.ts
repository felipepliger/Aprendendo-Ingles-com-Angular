import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  jogoEmAndamento = true;
  tipoEncerramento: string;
  
  encerrarJogo(tipo){
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
  }

  reiniciarJogo(){
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }

}
