import { MandamentosService } from './../mandamentos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.scss'],
})
export class ImprimirComponent {
  constructor(public service: MandamentosService) {}

  print(): void {
    window.print();
  }
}
