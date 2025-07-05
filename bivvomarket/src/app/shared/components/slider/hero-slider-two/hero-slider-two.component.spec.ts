import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSliderTwoComponent } from './hero-slider-two.component';

describe('HeroSliderTwoComponent', () => {
  let component: HeroSliderTwoComponent;
  let fixture: ComponentFixture<HeroSliderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSliderTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSliderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
