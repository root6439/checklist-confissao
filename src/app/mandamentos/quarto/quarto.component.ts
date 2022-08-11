import { QUARTO_MANDAMENTO } from './../../shared/data/QuartoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MandamentosService } from '../mandamentos.service';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.scss'],
})
export class QuartoComponent implements OnDestroy {
  mandamentos: Mandamento = QUARTO_MANDAMENTO;

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
