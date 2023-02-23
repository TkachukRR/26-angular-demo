import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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
  title = 'Angular pipes';

  e: number = Math.E;
  str: string = 'new string example';
  date: Date = new Date();
  float = 0.42;
  obj = { a: 1, b: 2, c: { c1: 3, c3: { d: 0 } } };

  posts: Array<Post> = [
    {
      title: 'Beer',
      text: 'The best beer vvv',
    },
    {
      title: 'milk',
      text: 'The best milk aaa',
    },
    {
      title: 'cola',
      text: 'The best drink ccc',
    },
  ];

  search = '';
  searchField = 'title';

  promise: Promise<string> = new Promise<string>((resolve) =>
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3000)
  );

  dateNow: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  addPost() {
    this.posts.unshift({
      title: 'sprite',
      text: 'Good drink ddd',
    });
  }
}
