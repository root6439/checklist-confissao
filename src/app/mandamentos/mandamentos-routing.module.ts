import { PrimeiroComponent } from './primeiro/primeiro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'primeiro-mandamento', component: PrimeiroComponent },
  { path: '', redirectTo: 'primeiro-mandamento', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandamentosRoutingModule {}
