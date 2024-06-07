import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { name: 'Piccoro', power: 200 },
    { name: 'Trunks', power: 360 },
    { name: 'Freezer', power: 300 },
  ];

  onNewCharacterMethod(character: Character): void {
    this.characters.push(character);
  }

  public onDeleteCharacter(index: number): void {
    // const newArray = this.characters
    //   .slice(0, index)
    //   .concat(this.characters.slice(index + 1));
    // this.characters = newArray;
    this.characters.splice(index, 1);
  }
}
