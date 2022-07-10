import { TERCEIRO_MANDAMENTO } from './../../shared/data/TerceiroMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terceiro',
  templateUrl: './terceiro.component.html',
  styleUrls: ['./terceiro.component.scss'],
})
export class TerceiroComponent implements OnInit {
  mandamentos: Mandamento = TERCEIRO_MANDAMENTO;

  constructor() {}

  ngOnInit(): void {}
}
