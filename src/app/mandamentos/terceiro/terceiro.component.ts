import { TERCEIRO_MANDAMENTO } from './../../shared/data/TerceiroMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MandamentosService } from '../mandamentos.service';

@Component({
  selector: 'app-terceiro',
  templateUrl: './terceiro.component.html',
  styleUrls: ['./terceiro.component.scss'],
})
export class TerceiroComponent implements OnDestroy {
  mandamentos: Mandamento = TERCEIRO_MANDAMENTO;

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
