import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  constructor(private route: Router) {}

  get progress(): number {
    let aux: string[] = this.route.url.split('/');

    if (aux[1] != 'checklist') {
      return 0;
    }

    return this.progressData[aux[2]];
  }
}
