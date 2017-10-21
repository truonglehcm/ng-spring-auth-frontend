import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ITag } from '../../../models/tag';
import { MatSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { TagService } from '../../../services/tag/tag.service';

@Component({
  selector: 'app-manage-tags',
  templateUrl: './manage-tags.component.html',
  styleUrls: ['./manage-tags.component.css']
})
export class ManageTagsComponent implements OnInit {

  private dataSize: number;
  private dataSource: TagDataSource;
  private displayedColumns = ['tagName', 'visible', 'delete'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.tagService.getTags().subscribe(
      result => this.setTags(result),
      error => alert('Error ' + error)
    );
  }

  setTags(result): void {
    if (result.error) {
        alert('Web API error ' + result.message);
    }

    this.dataSource = new TagDataSource(result.data, this.sort);
    this.dataSize = result.data.length;
    console.dir(result.data);
  }

  deleteTag(id: number) {
    this.tagService.deleteTag(id).subscribe(
      result => this.getTags(),
      error => alert('Error ' + error)
    );
  }

}

export class TagDataSource extends DataSource<ITag> {

    constructor(private tags: ITag[], private sort: MatSort) {
      super();
    }

    connect(): Observable<ITag[]> {
      return Observable.of(this.tags);
    }

    disconnect(): void {
    }
}
