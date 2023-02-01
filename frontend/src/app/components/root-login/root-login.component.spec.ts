import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootLoginComponent } from './root-login.component';

describe('RootLoginComponent', () => {
  let component: RootLoginComponent;
  let fixture: ComponentFixture<RootLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RootLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
