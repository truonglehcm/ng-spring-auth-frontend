import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePostDetailComponent } from './manage-post-detail.component';

describe('ManagePostDetailComponent', () => {
  let component: ManagePostDetailComponent;
  let fixture: ComponentFixture<ManagePostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
