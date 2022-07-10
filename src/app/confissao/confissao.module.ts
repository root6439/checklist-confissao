import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfissaoComponent } from './confissao.component';
import { ConfissaoRoutingModule } from './confissao-routing.module';

@NgModule({
  declarations: [ConfissaoComponent],
  imports: [CommonModule, ConfissaoRoutingModule],
})
export class ConfissaoModule {}
