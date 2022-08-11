import { QUINTO_MANDAMENTO } from './../../shared/data/QuintoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MandamentosService } from '../mandamentos.service';

@Component({
  selector: 'app-quinto',
  templateUrl: './quinto.component.html',
  styleUrls: ['./quinto.component.scss'],
})
export class QuintoComponent implements OnDestroy {
  mandamentos: Mandamento = QUINTO_MANDAMENTO;

  constructor(public service: MandamentosService) {}

  ngOnDestroy(): void {
    let selecionados: string[] = this.mandamentos.pecados
      .filter((value) => value.selecionado)
      .map((value) => value.texto);

    this.service.pecadosSelecionados = new Set([
      ...this.service.pecadosSelecionados,
      ...selecionados,
    ]);
  }
}
