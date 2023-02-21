import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
})
export class Task1Component {
  arr = ['asb', 1, true];
  obj = { par: 'slp' };
  changeableURL = 'https://www.bsmu.edu.ua/wp-content/uploads/2019/03/6923.jpg';
  inputValue = '';
  clickCounter = 0;

  constructor() {
    setTimeout(() => {
      this.changeableURL =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMYSJLBgXEa9WWe5VtP1mcZOt4d7eS78mJZOrO9XhcEjC90ZzJl_kMTIxVsvWB1cARC8&usqp=CAU';
    }, 3000);
  }

  onInputChange(event?: any) {
    this.inputValue = event.target.value;
  }

  onHandleClick() {
    this.clickCounter++;
  }

  onBlur(str: string) {
    console.log(str);
    this.inputValue = '';
  }
}
