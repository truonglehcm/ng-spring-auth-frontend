import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post/post.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  private postContent: String;
  private postId: number;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.postId = params['id'];
      this.postService.getPost(this.postId).subscribe(
        result => this.setPost(result),
        error => alert('Error ' + error)
      );
    });
  }

  setPost(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.postContent = result.data.content;
  }

}
