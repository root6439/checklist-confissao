import { QUINTO_MANDAMENTO } from './../../shared/data/QuintoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quinto',
  templateUrl: './quinto.component.html',
  styleUrls: ['./quinto.component.scss'],
})
export class QuintoComponent implements OnInit {
  mandamentos: Mandamento = QUINTO_MANDAMENTO;

  constructor() {}

  ngOnInit(): void {}
}
