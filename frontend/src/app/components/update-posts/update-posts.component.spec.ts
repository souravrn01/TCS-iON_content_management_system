import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostsComponent } from './update-posts.component';

describe('UpdatePostsComponent', () => {
  let component: UpdatePostsComponent;
  let fixture: ComponentFixture<UpdatePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
