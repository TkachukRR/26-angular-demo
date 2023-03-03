import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from "@angular/router";
import {Post, PostsService} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  post: Post
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // private postService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.post = this.route.snapshot.data['post'] //snapshot - is static object
    // this.route.params.subscribe((params)=> {
    //   console.log(params)
    //   // @ts-ignore
    //   this.post = this.postService.getById(+params?.['id'])
    // })
  }

  loadPost() {
  this.router.navigate(['/posts', 44])
  }
}
