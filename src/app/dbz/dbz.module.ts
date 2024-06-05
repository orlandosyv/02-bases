import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';

@NgModule({
  declarations: [MainPage, ListComponent, CharacterComponent],
  imports: [CommonModule],
  exports: [MainPage],
})
export class DbzModule {}
