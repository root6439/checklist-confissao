import { MatIconModule } from '@angular/material/icon';
import { MandamentosService } from './../mandamentos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule]
})
export class ImprimirComponent {
  constructor(public service: MandamentosService) {}

  print(): void {
    window.print();
  }
}
