import { Mandamento, Pecado } from './../../shared/models/Mandamento';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SEGUNDO_MANDAMENTO } from 'src/app/shared/data/SegundoMandamento';
import { MandamentosService } from '../mandamentos.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss'],
})
export class SegundoComponent implements OnDestroy {
  mandamentos: Mandamento = SEGUNDO_MANDAMENTO;

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

  clearMandament(): void {
    this.mandamentos.pecados.forEach((value: Pecado) => {
      value.selecionado = false;
    });
  }

  clearAll(): void {
    this.service.pecadosSelecionados = new Set();
  }
}