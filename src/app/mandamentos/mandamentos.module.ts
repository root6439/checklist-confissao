import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MandamentosRoutingModule } from './mandamentos-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PrimeiroComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MandamentosRoutingModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class MandamentosModule {}
