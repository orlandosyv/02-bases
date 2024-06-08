import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    { id: uuid(), name: 'Piccoro', power: 200 },
    { id: uuid(), name: 'Trunks', power: 360 },
    { id: uuid(), name: 'Freezer', power: 300 },
    { id: uuid(), name: 'Dodoria', power: 180 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id: string) {
    console.log(id);
    this.characters = this.characters.filter((char) => char.id !== id);
  }

  // public onDeleteCharacter(index: number): void {
  //   // const newArray = this.characters
  //   //   .slice(0, index)
  //   //   .concat(this.characters.slice(index + 1));
  //   // this.characters = newArray;
  //   this.characters.splice(index, 1);
  // }
}
