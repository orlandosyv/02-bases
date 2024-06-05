import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPage } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [MainPage, ListComponent],
  imports: [CommonModule],
  exports: [MainPage],
})
export class DbzModule {}
