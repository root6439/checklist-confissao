import { MandamentosService } from './../mandamentos.service';
import { Mandamento, Pecado } from './../../shared/models/Mandamento';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeiroMandamento } from 'src/app/shared/data/PrimeiroMandamento';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.scss'],
})
export class PrimeiroComponent implements OnDestroy {
  mandamentos: Mandamento = PrimeiroMandamento;

  constructor(private service: MandamentosService) {}

  ngOnDestroy(): void {
    let selecionados: string[] = this.mandamentos.pecados
      .filter((value) => value.selecionado)
      .map((value) => value.texto);
      
    this.service.pecadosSelecionados =
      this.service.pecadosSelecionados.concat(selecionados);
  }
}
