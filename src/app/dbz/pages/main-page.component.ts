import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-component-page',
  templateUrl: './main-page.component.html',
})
export class MainPage {
  constructor() {}

  public characters: Character[] = [
    { name: 'Piccoro', power: 200 },
    { name: 'Trunks', power: 360 },
    { name: 'Freezer', power: 300 },
  ];

  onNewCharacterMethod(character: Character): void {
    this.characters.push(character);
  }

  // ngOnInit() {}
}
