import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MandamentosRoutingModule } from './mandamentos-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';

@NgModule({
  declarations: [PrimeiroComponent, SegundoComponent, TerceiroComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MandamentosRoutingModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class MandamentosModule {}
