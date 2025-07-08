import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsAreaComponent } from './product-details-area.component';

describe('ProductDetailsAreaComponent', () => {
  let component: ProductDetailsAreaComponent;
  let fixture: ComponentFixture<ProductDetailsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
