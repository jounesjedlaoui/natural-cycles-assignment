import { ComponentFixture, TestBed } from '@angular/core/testing';

import { createCountdownComponent } from './createCountdown.component';

describe('createcreateCountdownComponent', () => {
  let component: createCountdownComponent;
  let fixture: ComponentFixture<createCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [createCountdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(createCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
