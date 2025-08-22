import { Component } from '@angular/core';
import { ShopAreaComponent } from '../../shop/components/shop-area/shop-area.component';
import { EspaciadorComponent } from '../../shared/components/espaciador/espaciador.component';
import { VideoComponent } from '../../shared/components/video/video.component';
import { VideoSoloComponent } from '../../shared/components/video-solo/video-solo.component';
import { Video2Component } from '../../shared/components/video2/video2.component';

@Component({
  selector: 'app-product',
  imports: [
    ShopAreaComponent,
    EspaciadorComponent,
    VideoComponent,
    VideoSoloComponent,
    Video2Component,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {}
