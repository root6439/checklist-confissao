import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'checklist-confissao';

  isMobile: boolean = window.screen.width <= 720;

  progressData: { [value: string]: number } = {
    'primeiro-mandamento': 10.25,
    'segundo-mandamento': 20.5,
    'terceiro-mandamento': 30.75,
    'quarto-mandamento': 50,
    'quinto-mandamento': 60.25,
    'sexto-e-nono-mandamentos': 70.5,
    'setimo-e-decimo-mandamentos': 80.75,
    'oitavo-mandamento': 100,
  };

  constructor(private route: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dialog.open(DialogNoDataStorage, {
      width: '30%'
    });
  }

  get progress(): number {
    let aux: string[] = this.route.url.split('/');

    if (aux[1] != 'checklist') {
      return 0;
    }

    return this.progressData[aux[2]];
  }
}

@Component({
  selector: 'no-data-storage-warning',
  template: `<h1 mat-dialog-title class="mb-2">Seja bem vindo ao Checklist Confissão :D</h1>
    <div mat-dialog-content class="mb-2">
      Passando apenas pra avisar que não armazenamos qualquer informação sua,
      pode marcar as caixinhas a vontade que ninguém vai ficar sabendo.
    </div>
    <div mat-dialog-actions>
      <button mat-flat-button color="accent" mat-dialog-close>Maravilha!</button>
    </div>`,
})
export class DialogNoDataStorage {}
