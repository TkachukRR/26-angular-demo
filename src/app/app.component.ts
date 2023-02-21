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
  changeableURL = 'https://www.bsmu.edu.ua/wp-content/uploads/2019/03/6923.jpg';
  inputValue = '';

  constructor() {
    setTimeout(() => {
      this.changeableURL =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMYSJLBgXEa9WWe5VtP1mcZOt4d7eS78mJZOrO9XhcEjC90ZzJl_kMTIxVsvWB1cARC8&usqp=CAU';
    }, 3000);
  }

  onInputChange(event?: any) {
    this.inputValue = event.target.value;
  }
}
