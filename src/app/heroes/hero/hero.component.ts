import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name.toLowerCase()} - ${this.age} `;
  }

  public changeHero(newName: string): void {
    this.name = newName;
  }

  public changeAge(newAge: number): void {
    this.age = newAge;
  }
}
