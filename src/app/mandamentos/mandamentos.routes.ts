import { Routes } from '@angular/router';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { QuartoComponent } from './quarto/quarto.component';
import { QuintoComponent } from './quinto/quinto.component';
import { SextoENonoComponent } from './sexto-enono/sexto-enono.component';
import { SetimoEDecimoComponent } from './setimo-e-decimo/setimo-e-decimo.component';
import { OitavoComponent } from './oitavo/oitavo.component';
import { ImprimirComponent } from './imprimir/imprimir.component';

export const MANDAMENTOS_ROUTES: Routes = [
  { path: 'primeiro', component: PrimeiroComponent },
  { path: 'segundo', component: SegundoComponent },
  { path: 'terceiro', component: TerceiroComponent },
  { path: 'quarto', component: QuartoComponent },
  { path: 'quinto', component: QuintoComponent },
  { path: 'sexto-e-nono', component: SextoENonoComponent },
  { path: 'setimo-e-decimo', component: SetimoEDecimoComponent },
  { path: 'oitavo', component: OitavoComponent },
  { path: 'imprimir', component: ImprimirComponent },
];
