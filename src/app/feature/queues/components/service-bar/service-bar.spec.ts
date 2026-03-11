import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBar } from './service-bar';

describe('ServiceBar', () => {
  let component: ServiceBar;
  let fixture: ComponentFixture<ServiceBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
