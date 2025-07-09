import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsUpperComponent } from './product-details-upper.component';

describe('ProductDetailsUpperComponent', () => {
  let component: ProductDetailsUpperComponent;
  let fixture: ComponentFixture<ProductDetailsUpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsUpperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
