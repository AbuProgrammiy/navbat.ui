import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogCustom } from './confirm-dialog-custom';

describe('ConfirmDialogCustom', () => {
  let component: ConfirmDialogCustom;
  let fixture: ComponentFixture<ConfirmDialogCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDialogCustom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogCustom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
