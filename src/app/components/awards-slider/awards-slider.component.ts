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

declare const Swiper: any;

@Component({
  selector: 'app-awards-slider',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './awards-slider.component.html',
  styleUrl: './awards-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AwardsSliderComponent implements AfterViewInit {
  awards = [
    {
      imgUrl: 'assets/images/awards/awards1.JPG',
      title: 'Battery Swapping Compartment with Team Tadoba',
    },
    {
      imgUrl: 'assets/images/awards/awards2.jpg',
      title: 'Energy Trading Station at IIT BHILAI',
    },
    {
      imgUrl: 'assets/images/awards/awards3.jpg',
      title:
        'Inauguration of Battery Swapping Station by CM Chhattisgarh and Dr. Raman Singh',
    },
    {
      imgUrl: 'assets/images/awards/awards4.jpg',
      title: 'Startup Mahakumbh 2025: Ministry of Tribal Affairs',
    },
    { imgUrl: 'assets/images/awards/awards5.jpg', title: 'Raising Star Award' },
    { imgUrl: 'assets/images/awards/awards6.jpg', title: 'Tadoba Team' },
    {
      imgUrl: 'assets/images/awards/awards7.jpg',
      title: 'Battery Swapping Station at CREDA (C.G.)',
    },
    
    {
      imgUrl: 'assets/images/awards/awards9.jpg',
      title: 'Kishan Mela at IGKV, Raipur',
    },
    {
      imgUrl: 'assets/images/awards/awards10.jpg',
      title: 'Making India Employable Award at, The Westin Mumbai Garden',
    },
    {
      imgUrl: 'assets/images/awards/awards11.jpg',
      title: 'Solar Integrated e-Rickshaw',
    },
    {
      imgUrl: 'assets/images/awards/awards12.jpg',
      title: 'IDEATHON 1.0 Project Grant at CSVTU FORTE',
    },
  ];

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
          spaceBetween: 6,
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
            425: {
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
