import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicShopDetailsComponent } from './dynamic-shop-details.component';

describe('DynamicShopDetailsComponent', () => {
  let component: DynamicShopDetailsComponent;
  let fixture: ComponentFixture<DynamicShopDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicShopDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicShopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
