import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '35-angular-demo';
  arr = ['asb', 1, true];
  obj = { par: 'slp' };
}
