import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavManusComponent } from './nav-manus.component';

describe('NavManusComponent', () => {
  let component: NavManusComponent;
  let fixture: ComponentFixture<NavManusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavManusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavManusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
