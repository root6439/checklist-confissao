import { QUARTO_MANDAMENTO } from './../../shared/data/QuartoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quarto',
  templateUrl: './quarto.component.html',
  styleUrls: ['./quarto.component.scss'],
})
export class QuartoComponent implements OnInit {
  mandamentos: Mandamento = QUARTO_MANDAMENTO;

  constructor() {}

  ngOnInit(): void {}
}
