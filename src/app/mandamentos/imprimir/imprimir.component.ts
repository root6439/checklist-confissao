import { MandamentosService } from './../mandamentos.service';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-imprimir',
  templateUrl: './imprimir.component.html',
  styleUrls: ['./imprimir.component.scss'],
})
export class ImprimirComponent {
  constructor(public service: MandamentosService) {}

  print(): void {
    let DATA: HTMLElement = document.getElementById('htmlData');

    html2canvas(DATA).then((canvas: HTMLCanvasElement) => {
      let fileWidth: number = 208;
      let fileHeight: number = (canvas.height * fileWidth) / canvas.width;
      const FILEURI: string = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position: number = 0;
      PDF.addImage(FILEURI, 'JPEG', 0, position, 208, 208);
      PDF.save(`confissao-${new Date().toLocaleDateString('pt-br')}.pdf`);
    });
  }
}
