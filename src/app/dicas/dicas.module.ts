import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DicasComponent } from './dicas.component';
import { DicasRoutingModule } from './dicas-routing.module';

@NgModule({
  declarations: [DicasComponent],
  imports: [CommonModule, DicasRoutingModule],
})
export class DicasModule {}
