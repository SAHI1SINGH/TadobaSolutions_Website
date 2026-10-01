import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  NgZone,
  PLATFORM_ID,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SliderData } from '../../models/AwardData';

declare const Swiper: any;

@Component({
  selector: 'app-img-slider',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './img-slider.component.html',
  styleUrl: './img-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgSliderComponent implements AfterViewInit {


    data:SliderData [] = [
      {
        imgUrl: 'assets/images/slider/single-phase.png',
      },
      {
        imgUrl: 'assets/images/slider/energy-meter-ac.png',
      },
      {
        imgUrl: 'assets/images/slider/farmeye-plus-iot.png',
      },
      {
        imgUrl: 'assets/images/slider/electric-rickshaw.png',
      },
      {
        imgUrl: 'assets/images/slider/three-phase.png',
      },
      {
        imgUrl: 'assets/images/slider/energy-meter-dc.png',
      },
      {
        imgUrl: 'assets/images/slider/farmeye-plus-portable.png',

      },
      {
        imgUrl: 'assets/images/slider/swapping-station.png',
      },
      {
        imgUrl: 'assets/images/slider/electric-cycle.png',
      },
      {
        imgUrl: 'assets/images/slider/gas-detection.png',
      },
      {
        imgUrl: 'assets/images/slider/lithophane.png',
      },
      {
        imgUrl: 'assets/images/slider/swapping-system.png',
      },
    ]



  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}



  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        new Swiper('.slider-wrapper', {
          loop: true,
          grabCursor: true,
          spaceBetween: 8,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },

          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            init: function () {
              document
                .querySelector('.slider-wrapper')
                ?.classList.add('swiper-initialized');
            },
          },
          breakpoints: {
            412: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          },
        });
      });
    }
  }
}
