import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraGarabeComponent } from './extra-garabe.component';

describe('ExtraGarabeComponent', () => {
  let component: ExtraGarabeComponent;
  let fixture: ComponentFixture<ExtraGarabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraGarabeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraGarabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
