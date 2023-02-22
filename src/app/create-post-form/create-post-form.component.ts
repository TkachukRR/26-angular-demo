import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.scss'],
})
export class CreatePostFormComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', { static: false }) inputRef: ElementRef;
  title: string = '';
  text: string = '';

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
      };

      this.onAdd.emit(post);

      console.log('new post', post);
      this.title = this.text = '';
    }
  }

  focusTitle() {
    console.log(this.inputRef);

    this.inputRef.nativeElement.focus();
  }
}
