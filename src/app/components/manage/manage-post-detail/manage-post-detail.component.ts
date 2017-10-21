import { Component, OnInit } from '@angular/core';
import { IPost } from '../../../models/post';
import { PostService } from '../../../services/post/post.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-post-detail',
  templateUrl: './manage-post-detail.component.html',
  styleUrls: ['./manage-post-detail.component.css']
})
export class ManagePostDetailComponent implements OnInit {

  private formPost: FormGroup;
  private post: IPost;
  private postId: number;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.formPost = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required, Validators.minLength(4)]),
      content: new FormControl('', [Validators.required, Validators.minLength(4)]),
      logoUrl: new FormControl(),
      visible: new FormControl()
    });

    this.route.params.subscribe((params: Params) => {
      this.postId = params['id'];
      if (this.postId > 0) {
        this.postService.getPost(params['id']).subscribe(
          result => this.setPost(result),
          error => alert('Error ' + error)
        );
      }
    });
  }

  savePost(postData: IPost) {
    if (this.postId <= 0) {
      this.postService.addPost(postData).subscribe({
        error: (err: any) => console.dir(err),
        complete: () => this.router.navigateByUrl('/manage/posts')
      });
    } else {
      this.postService.updatePost(this.postId, postData).subscribe({
        error: (err: any) => console.dir(err),
        complete: () => this.router.navigateByUrl('/manage/posts')
      });
    }
  }

  setPost(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.post = result.data;
    this.formPost.setValue({
      title: this.post.title,
      description: this.post.description,
      content: this.post.content,
      logoUrl: this.post.logoUrl,
      visible: this.post.visible
    });
  }
}
