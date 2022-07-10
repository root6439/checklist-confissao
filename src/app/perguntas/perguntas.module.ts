import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerguntasComponent } from './perguntas.component';
import { PerguntasRoutingModule } from './perguntas-routing.module';

@NgModule({
  declarations: [PerguntasComponent],
  imports: [CommonModule, PerguntasRoutingModule],
})
export class PerguntasModule {}
