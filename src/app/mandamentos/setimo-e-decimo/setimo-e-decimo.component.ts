import { SETIMO_E_DECIMO_MANDAMENTOS } from './../../shared/data/SetimoEDecimoMandamentos';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MandamentosService } from '../mandamentos.service';

@Component({
  selector: 'app-setimo-e-decimo',
  templateUrl: './setimo-e-decimo.component.html',
  styleUrls: ['./setimo-e-decimo.component.scss'],
})
export class SetimoEDecimoComponent implements OnDestroy {
  mandamentos: Mandamento = SETIMO_E_DECIMO_MANDAMENTOS;

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
