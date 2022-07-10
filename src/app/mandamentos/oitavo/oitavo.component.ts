import { OITAVO_MANDAMENTO } from './../../shared/data/OitavoMandamento';
import { Mandamento } from './../../shared/models/Mandamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oitavo',
  templateUrl: './oitavo.component.html',
  styleUrls: ['./oitavo.component.scss'],
})
export class OitavoComponent implements OnInit {
  mandamentos: Mandamento = OITAVO_MANDAMENTO;

  constructor() {}

  ngOnInit(): void {}
}
