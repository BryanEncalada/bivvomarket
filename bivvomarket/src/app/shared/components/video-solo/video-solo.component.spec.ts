import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSoloComponent } from './video-solo.component';

describe('VideoSoloComponent', () => {
  let component: VideoSoloComponent;
  let fixture: ComponentFixture<VideoSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoSoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
