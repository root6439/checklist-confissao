import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'checklist-confissao';

  isMobile: boolean = window.screen.width <= 720;

  ngOnInit() {
    console.log(window.screen.width);
  }
}
