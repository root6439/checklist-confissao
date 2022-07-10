import { SEXTO_E_NONO_MANDAMENTOS } from './../../shared/data/SextoENonoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sexto-enono',
  templateUrl: './sexto-enono.component.html',
  styleUrls: ['./sexto-enono.component.scss'],
})
export class SextoENonoComponent implements OnInit {
  mandamentos: Mandamento = SEXTO_E_NONO_MANDAMENTOS;

  constructor() {}

  ngOnInit(): void {}
}
