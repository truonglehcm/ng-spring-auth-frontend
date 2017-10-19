import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTagsDetailComponent } from './manage-tags-detail.component';

describe('ManageTagsDetailComponent', () => {
  let component: ManageTagsDetailComponent;
  let fixture: ComponentFixture<ManageTagsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTagsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTagsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
