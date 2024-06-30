import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDBZComponent {

  @Input()
  public characterList: Character[] = []

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(uuidCharacter?: string):void{
    if (!uuidCharacter) return;
    this.onDeleteCharacter.emit(uuidCharacter);
  }
}
