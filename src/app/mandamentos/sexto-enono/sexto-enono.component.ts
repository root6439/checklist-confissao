import { SEXTO_E_NONO_MANDAMENTOS } from './../../shared/data/SextoENonoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MandamentosService } from '../mandamentos.service';

@Component({
  selector: 'app-sexto-enono',
  templateUrl: './sexto-enono.component.html',
  styleUrls: ['./sexto-enono.component.scss'],
})
export class SextoENonoComponent implements OnDestroy {
  mandamentos: Mandamento = SEXTO_E_NONO_MANDAMENTOS;

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
