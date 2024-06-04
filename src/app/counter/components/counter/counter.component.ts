import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>...Hello Counter...</h1>
    <h3>Counter: {{ counter }}</h3>

    <button (click)="this.increaseBy()">+1</button>
    <button (click)="this.decreaseBy()">-1</button>
    <button (click)="this.reset()">Reset</button>
  `,
})
export class CounterComponent {
  constructor() {}

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

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-counter',
//   template: '<h1>Hola Counter 1234</h1>',
// })
// export class CounterComponent {}
