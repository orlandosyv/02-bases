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
  public characterList: Character[] = [
    { id: '', name: 'TenShinHan', power: 200 },
  ];

  // constructor() {}

  @Output()
  public onDeleteIndex: EventEmitter<string> = new EventEmitter();

  // public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // @Input()
  public onDeleteCharacter(id?: string): void {
    //TODO: emitir el Id del char
    if (!id) return;
    console.log({ id });
    this.onDeleteIndex.emit(id);
  }

  // ngOnInit() {}
}
