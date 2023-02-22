import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-titled-post',
  templateUrl: './titled-post.component.html',
  styleUrls: ['./titled-post.component.scss'],
})
export class TitledPostComponent implements OnInit {
  @Input() post: Post;
  @ContentChild('info', { static: true }) infoRef: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log(this.infoRef.nativeElement);
  }
}
