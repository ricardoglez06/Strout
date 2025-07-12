import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdReset } from './pwd-reset';

describe('PwdReset', () => {
  let component: PwdReset;
  let fixture: ComponentFixture<PwdReset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwdReset]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PwdReset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
