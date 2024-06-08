import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-component-page',
  templateUrl: './main-page.component.html',
})
export class MainPage {
  constructor(private dbzService: DbzService) {}
  // dbzService.characters

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string) {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacterMP(character: Character): void {
    this.dbzService.addCharacter(character);
  }

  // ngOnInit() {}
}
