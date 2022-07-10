import { OitavoComponent } from './oitavo/oitavo.component';
import { SetimoEDecimoComponent } from './setimo-e-decimo/setimo-e-decimo.component';
import { SextoENonoComponent } from './sexto-enono/sexto-enono.component';
import { QuintoComponent } from './quinto/quinto.component';
import { QuartoComponent } from './quarto/quarto.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'primeiro-mandamento', component: PrimeiroComponent },
  { path: 'segundo-mandamento', component: SegundoComponent },
  { path: 'terceiro-mandamento', component: TerceiroComponent },
  { path: 'quarto-mandamento', component: QuartoComponent },
  { path: 'quinto-mandamento', component: QuintoComponent },
  { path: 'sexto-e-nono-mandamentos', component: SextoENonoComponent },
  { path: 'setimo-e-decimo-mandamentos', component: SetimoEDecimoComponent },
  { path: 'oitavo-mandamento', component: OitavoComponent },
  { path: '', redirectTo: 'primeiro-mandamento', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandamentosRoutingModule {}
