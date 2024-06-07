import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{ name: 'TenShinHan', power: 200 }];

  // constructor() {}

  @Output()
  public onDeleteIndex: EventEmitter<number> = new EventEmitter();

  // public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // @Input()
  public onDeleteCharacter(index: number): void {
    //TODO: emitir el Id del char
    console.log({ index });

    this.onDeleteIndex.emit(index);
  }

  // ngOnInit() {}
}
