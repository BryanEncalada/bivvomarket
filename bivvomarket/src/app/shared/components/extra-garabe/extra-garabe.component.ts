import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TituloSeccionComponent } from '../titulo-seccion/titulo-seccion.component';
import { TranslocoModule } from '@jsverse/transloco';
import { EspaciadorComponent } from '../espaciador/espaciador.component';

declare const bootstrap: any; // requiere bootstrap.bundle.js cargado una sola vez

@Component({
  selector: 'app-extra-garabe',
  standalone: true,
  imports: [
    CommonModule,
    TituloSeccionComponent,
    TranslocoModule,
    EspaciadorComponent,
  ],
  templateUrl: './extra-garabe.component.html',
  styleUrls: ['./extra-garabe.component.scss'],
})
export class ExtraGarabeComponent implements AfterViewInit {
  videos = [
    {
      src: 'assets/video/video03.mp4',
      title: 'Video 1',
      poster: 'assets/img/receta/video01.jpg',
    },
    {
      src: 'assets/video/video01.mp4',
      title: 'Video 2',
      poster: 'assets/img/receta/video02.jpg',
    },
    {
      src: 'assets/video/video02.mp4',
      title: 'Video 3',
      poster: 'assets/img/receta/video03.jpg',
    },
  ];

  currentVideoSrc = '';

  @ViewChild('modalVideo') modalVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('videoModalEl') videoModalEl!: ElementRef<HTMLDivElement>;
  private bsModal!: any;

  ngAfterViewInit(): void {
    // Instancia única del modal
    this.bsModal = new bootstrap.Modal(this.videoModalEl.nativeElement);

    // Limpieza al cerrar
    this.videoModalEl.nativeElement.addEventListener('hidden.bs.modal', () => {
      const v = this.modalVideo?.nativeElement;
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
      this.currentVideoSrc = '';
    });
  }

  openVideo(src: string) {
    this.currentVideoSrc = src;
    // Abre modal y reproduce
    this.bsModal.show();
    setTimeout(() => {
      const v = this.modalVideo?.nativeElement;
      if (v) {
        v.muted = false;
        v.volume = 1;
        v.play().catch(() => {});
      }
    }, 0);
  }

  closeModal() {
    this.bsModal?.hide();
  }
}
