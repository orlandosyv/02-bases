import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title = 'Hallo Welt';
  public counter: number = 20;

  increaseBy(): void {
    this.counter = this.counter + 1;
  }

  decreaseBy(): void {
    this.counter = this.counter - 1;
  }

  reset(): void {
    this.counter = 10;
  }
}
