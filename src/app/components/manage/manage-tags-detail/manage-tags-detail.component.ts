import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ITag } from '../../../models/tag';
import { TagService } from '../../../services/tag/tag.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-manage-tags-detail',
  templateUrl: './manage-tags-detail.component.html',
  styleUrls: ['./manage-tags-detail.component.css']
})
export class ManageTagsDetailComponent implements OnInit {

  private formTag: FormGroup;
  private tag: ITag;
  private tagId: number;

  constructor(private tagService: TagService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.formTag = this.fb.group({
      id: new FormControl(0),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      visible: new FormControl(false)
    });

    this.route.params.subscribe((params: Params) => {
      this.tagId = params['id'];
      if (this.tagId > 0) {
        this.tagService.getTag(params['id']).subscribe(
          result => this.setTag(result),
          error => alert('Error ' + error)
        );
      }
    });
  }

  saveTag(tagData: ITag) {
    tagData.id = this.tagId;
    if (this.tagId <= 0) {
      this.tagService.addTag(tagData).subscribe({
        error: (err: any) => console.dir(err),
        complete: () => this.router.navigateByUrl('/manage/tags')
      });
    } else {
      this.tagService.updateTag(this.tagId, tagData).subscribe({
        error: (err: any) => console.dir(err),
        complete: () => this.router.navigateByUrl('/manage/tags')
      });
    }
  }

  setTag(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.tag = result.data;
    this.formTag.setValue({
      id: this.tag.id,
      name: this.tag.name,
      visible: this.tag.visible
    });
  }

}
