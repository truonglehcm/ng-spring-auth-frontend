import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from '../../../services/post/post.service';
import { IPost } from '../../../models/post';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.css']
})
export class ManagePostComponent implements OnInit {

  private dataSize: number;
  private dataSource: PostDataSource;
  private displayedColumns = ['title', 'createAt', 'createBy', 'logo', 'visible', 'delete'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(
      result => this.setPosts(result),
      error => alert('Error ' + error)
    );
  }

  setPosts(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.dataSource = new PostDataSource(result.data, this.sort);
    this.dataSize = result.data.length;
    console.dir(result.data);
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(
      result => this.getPosts(),
      error => alert('Error ' + error)
    );
  }

}

export class PostDataSource extends DataSource<IPost> {

  constructor(private posts: IPost[], private sort: MatSort) {
    super();
  }

  connect(): Observable<IPost[]> {
    return Observable.of(this.posts);
  }

  disconnect(): void {
  }
}
