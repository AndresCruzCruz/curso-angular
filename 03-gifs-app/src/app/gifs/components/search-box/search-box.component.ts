import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInpunt
    >
  `
})
// #txtTagInpunt es una referencia local que se puede usar en el componente para acceder al valor del input, pero este valor solo esta disponible en html

export class SearchBoxComponent {

  @ViewChild('txtTagInpunt') // Se usa para acceder a un elemento del DOM
  public tagInpunt!: ElementRef<HTMLInputElement>;

  // Los servicios se inyectan en el constructor para poder usarlos
  constructor( private gifsService: GifsService){}

  searchTag():void {
    const newTag = this.tagInpunt.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInpunt.nativeElement.value = '';
  }

}
