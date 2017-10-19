import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private posts: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      result => this.setPosts(result),
      error => alert('Error ' + error)
    );
  }

  setPosts(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.posts = result.data;
  }

}
