import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit } from '@angular/core';
import { SEGUNDO_MANDAMENTO } from 'src/app/shared/data/SegundoMandamento';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss'],
})
export class SegundoComponent implements OnInit {
  mandamentos: Mandamento = SEGUNDO_MANDAMENTO;

  constructor() {}

  ngOnInit(): void {}
}
