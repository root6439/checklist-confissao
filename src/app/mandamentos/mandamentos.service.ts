import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MandamentosService {
  pecadosSelecionados: Set<string> = new Set();
}
