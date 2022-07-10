import { TerceiroComponent } from './terceiro/terceiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'primeiro-mandamento', component: PrimeiroComponent },
  { path: 'segundo-mandamento', component: SegundoComponent },
  { path: 'terceiro-mandamento', component: TerceiroComponent },
  { path: '', redirectTo: 'primeiro-mandamento', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandamentosRoutingModule {}
