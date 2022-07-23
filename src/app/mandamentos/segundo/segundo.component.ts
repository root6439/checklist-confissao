import { Mandamento } from './../../shared/models/Mandamento';
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

  constructor(private service: MandamentosService) {}

  ngOnDestroy(): void {
    let selecionados: string[] = this.mandamentos.pecados
      .filter((value) => value.selecionado)
      .map((value) => value.texto);

    this.service.pecadosSelecionados =
      this.service.pecadosSelecionados.concat(selecionados);
  }
}
