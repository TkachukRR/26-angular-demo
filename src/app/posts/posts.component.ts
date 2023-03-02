import {Component, OnInit} from '@angular/core'
import {PostsService} from '../posts.service'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  showIds = false
  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit():void {
    this.route.queryParams.subscribe((params)=> {
        console.log(params)
        this.showIds = !!params?.['showIds']
      }
    )
  }
}
