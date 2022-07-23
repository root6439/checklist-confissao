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
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-oitavo',
  templateUrl: './oitavo.component.html',
  styleUrls: ['./oitavo.component.scss'],
})
export class OitavoComponent {
  @ViewChild('htmlData') htmlData!: ElementRef;

  mandamentos: Mandamento = OITAVO_MANDAMENTO;

  constructor(public service: MandamentosService) {}

  public openPDF(): void {
    let selecionados: string[] = this.mandamentos.pecados
      .filter((value) => value.selecionado)
      .map((value) => value.texto);

    this.service.pecadosSelecionados =
      this.service.pecadosSelecionados.concat(selecionados);

    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'JPEG', 0, position, fileWidth, fileHeight);
      PDF.save('checklist-confissao.pdf');
    });
  }
}
