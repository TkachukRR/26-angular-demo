import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '35-angular-demo';

  posts: Array<Post> = [
    { title: 'post 1', text: 'Lorem ipsum dolor sit', id: 1 },
    { title: 'post 2', text: 'Amet consectetur adipisicing elit.', id: 1 },
  ];
}
