import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { EffectFade, Pagination } from 'swiper/modules';
import { IHeroSlider } from '../../../types/hero-slider-t';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-slider-two',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './hero-slider-two.component.html',
  styleUrl: './hero-slider-two.component.scss',
})
export class HeroSliderTwoComponent implements OnInit, AfterViewInit {
  @ViewChild('heroSliderContainer') heroSliderContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;
  public hero_slider_data: IHeroSlider[] = [];
  private subscription!: Subscription;
  isMobile: boolean = false;

  constructor(private translocoService: TranslocoService) { }

  checkDevice(): void {
    this.isMobile = window.innerWidth < 768; // umbral para móvil (Bootstrap usa 768px)
  }

  getImgPath(path: string): string {

    if (this.isMobile) {

      // Separar la extensión
      const extension = path.substring(path.lastIndexOf('.')); // ".webp"
      // Obtener la ruta sin la extensión
      const base = path.substring(0, path.lastIndexOf('.')); // "/assets/img/slider/03/fix/bivvo01"
      // Nuevo path con _movil
      const newPath = base + "_movil" + extension;

      return newPath;
    } else {
      return path;
    }


  }

  ngOnInit(): void {
    this.checkDevice();
    window.addEventListener('resize', () => this.checkDevice());
  }

  ngAfterViewInit() {
    const ids = [1, 2, 3, 4, 5, 6];
    const observables = ids.map((id) =>
      this.translocoService.selectTranslateObject(`heroSlider.${id}`)
    );

    this.subscription = combineLatest(observables).subscribe((translations) => {
      this.hero_slider_data = translations.map((translation, index) => ({
        id: ids[index],
        ...translation,
      }));

      setTimeout(() => {
        if (this.heroSliderContainer) {
          this.swiperInstance = new Swiper('.slider-active', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            effect: 'fade',
            modules: [Pagination, EffectFade],
            autoplay: {
              delay: 5000, // ⏱ cada 5 segundos
              disableOnInteraction: false, // sigue después de interactuar
            },
            pagination: {
              clickable: true,
              el: '.tp-slider-dot-2',
            },
          });
        }
      });
    });
  }
}
