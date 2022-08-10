import { OITAVO_MANDAMENTO } from './../../shared/data/OitavoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MandamentosService } from '../mandamentos.service';

@Component({
  selector: 'app-oitavo',
  templateUrl: './oitavo.component.html',
  styleUrls: ['./oitavo.component.scss'],
})
export class OitavoComponent implements OnDestroy {
  mandamentos: Mandamento = OITAVO_MANDAMENTO;

  constructor(public service: MandamentosService) {}

  ngOnDestroy(): void {
    let selecionados: string[] = this.mandamentos.pecados
      .filter((value) => value.selecionado)
      .map((value) => value.texto);

    this.service.pecadosSelecionados =
      this.service.pecadosSelecionados.concat(selecionados);
  }
}
