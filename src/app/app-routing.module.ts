import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiroComponent } from './mandamentos/primeiro/primeiro.component';

const routes: Routes = [
  {
    path: 'confissao',
    loadChildren: () =>
      import('./confissao/confissao.module').then((m) => m.ConfissaoModule),
  },
  {
    path: 'perguntas',
    loadChildren: () =>
      import('./perguntas/perguntas.module').then((m) => m.PerguntasModule),
  },
  {
    path: 'checklist',
    loadChildren: () =>
      import('./mandamentos/mandamentos.module').then(
        (m) => m.MandamentosModule
      ),
  },
  { path: '', redirectTo: 'checklist', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
