import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownContainerComponent } from './countdown-container.component';

describe('CountdownContainerComponent', () => {
  let component: CountdownContainerComponent;
  let fixture: ComponentFixture<CountdownContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountdownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
