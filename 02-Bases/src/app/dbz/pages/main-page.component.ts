import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageDBZComponent {

  constructor(
    private dbzService: DbzService // Utilizamos el servicio en el constructor hace referencia a la instancia de la clase
  ){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(uuidCharacter: string): void{
    this.dbzService.onDeleteCharacter(uuidCharacter);
  }

  onNewCharacter(character: Character): void{
    this.dbzService.onNewCharacter(character);
  }
}
