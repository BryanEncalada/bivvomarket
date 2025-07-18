import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAreaComponent } from './shop-area.component';

describe('ShopAreaComponent', () => {
  let component: ShopAreaComponent;
  let fixture: ComponentFixture<ShopAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
