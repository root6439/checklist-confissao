import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit } from '@angular/core';
import { PrimeiroMandamento } from 'src/app/shared/data/PrimeiroMandamento';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.scss'],
})
export class PrimeiroComponent implements OnInit {
  mandamentos: Mandamento = PrimeiroMandamento;

  constructor() {}

  ngOnInit(): void {}
}
