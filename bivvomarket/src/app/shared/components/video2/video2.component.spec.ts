import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video2Component } from './video2.component';

describe('Video2Component', () => {
  let component: Video2Component;
  let fixture: ComponentFixture<Video2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Video2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Video2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
