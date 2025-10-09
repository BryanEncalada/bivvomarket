import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-video-solo',
  standalone: true,
  imports: [TranslocoModule, CommonModule],
  templateUrl: './video-solo.component.html',
  styleUrl: './video-solo.component.scss',
})
export class VideoSoloComponent implements AfterViewInit, OnDestroy {
  // Rutas reales
  // videoSrc = 'assets/video/VIDEO_VM01.webm';
  // poster = 'assets/video/VIDEO_VM01.webp'; // opcional

  videoSrc = 'assets/video/VIDEO_BIVVO_final.mp4';
  poster = 'assets/video/VIDEO_BIVVO_final.mp4'; // opcional

  shouldLoad = false; // hasta que entre al viewport
  private io?: IntersectionObserver;

  @ViewChild('viewport', { static: true }) viewport!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          this.shouldLoad = true; // ahora se renderiza el <video>
          this.io?.disconnect();
        }
      },
      {
        root: null,
        // Empieza a cargar ~200px antes de que sea visible
        rootMargin: '200px 0px',
        threshold: 0.01,
      }
    );
    this.io.observe(this.viewport.nativeElement);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
