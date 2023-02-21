import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss'],
})
export class ForComponent {
  array: Array<any> = [1, 1, 2, 3];
  objects = [
    {
      title: 'post 1',
      name: 'name1',
      comments: [
        { name: 'name00', text: 'text00' },
        { name: 'name01', text: 'text01' },
      ],
    },
    {
      title: 'post 2',
      name: 'name2',
      comments: [
        { name: 'name02', text: 'text02' },
        { name: 'name03', text: 'text03' },
      ],
    },
  ];
}
