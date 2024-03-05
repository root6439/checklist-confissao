import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MandamentosRoutingModule } from './mandamentos-routing.module';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { FormsModule } from '@angular/forms';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { QuartoComponent } from './quarto/quarto.component';
import { QuintoComponent } from './quinto/quinto.component';
import { SextoENonoComponent } from './sexto-enono/sexto-enono.component';
import { SetimoEDecimoComponent } from './setimo-e-decimo/setimo-e-decimo.component';
import { OitavoComponent } from './oitavo/oitavo.component';
import { ImprimirComponent } from './imprimir/imprimir.component';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

@NgModule({
  declarations: [
    PrimeiroComponent,
    SegundoComponent,
    TerceiroComponent,
    QuartoComponent,
    QuintoComponent,
    SextoENonoComponent,
    SetimoEDecimoComponent,
    OitavoComponent,
    ImprimirComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MandamentosRoutingModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
  ],
})
export class MandamentosModule {}
