import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {
  constructor() {
    console.log('constructor');
  }
  // Este es el primer ciclo de vida de angular, este se ejecuta despues del constructor, sirve para consulta de servicios y se ejecuta antes de la renderizacion del mismo componente.
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  public heroes: string[] =  ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America']
  public heroeBorrado: string = '';
  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() ?? '';
  }
}
