import { SETIMO_E_DECIMO_MANDAMENTOS } from './../../shared/data/SetimoEDecimoMandamentos';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setimo-e-decimo',
  templateUrl: './setimo-e-decimo.component.html',
  styleUrls: ['./setimo-e-decimo.component.scss'],
})
export class SetimoEDecimoComponent implements OnInit {
  mandamentos: Mandamento = SETIMO_E_DECIMO_MANDAMENTOS;

  constructor() {}

  ngOnInit(): void {}
}
