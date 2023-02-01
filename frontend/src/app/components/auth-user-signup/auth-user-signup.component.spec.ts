import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserSignupComponent } from './auth-user-signup.component';

describe('AuthUserSignupComponent', () => {
  let component: AuthUserSignupComponent;
  let fixture: ComponentFixture<AuthUserSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthUserSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthUserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
