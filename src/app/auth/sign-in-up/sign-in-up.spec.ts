import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUp } from './sign-in-up';

describe('SignInUp', () => {
  let component: SignInUp;
  let fixture: ComponentFixture<SignInUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
