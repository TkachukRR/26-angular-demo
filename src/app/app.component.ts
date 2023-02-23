import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular pipes';

  e: number = Math.E;
  str: string = 'new string example';
  date: Date = new Date();
  float = 0.42;
  obj = { a: 1, b: 2, c: { c1: 3, c3: { d: 0 } } };
}
