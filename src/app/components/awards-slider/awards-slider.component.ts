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
      imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916431/awards1_hpbxmw.jpg',
      title: 'Battery Swapping Compartment with Team Tadoba',
    },
    {
      imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916436/awards2_tvcpor.jpg',
      title: 'Energy Trading Station at IIT BHILAI',
    },
    {
      imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916433/awards3_up8ley.jpg',
      title:
        'Inauguration of Battery Swapping Station by CM Chhattisgarh and Dr. Raman Singh',
    },
    {
      imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916431/awards4_fi4yc1.jpg',
      title: 'Startup Mahakumbh 2025: Ministry of Tribal Affairs',
    },
    { imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916433/awards5_nhqgil.jpg', title: 'Raising Star Award' },
    { imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916436/awards6_zchf8y.jpg', title: 'Tadoba Team' },
    {
      imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916471/awards7_ieb1k1.jpg',
      title: 'Battery Swapping Station at CREDA (C.G.)',
    },
    
    {
      imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916440/awards9_xg8wet.jpg',
      title: 'Kishan Mela at IGKV, Raipur',
    },
    {
      imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916444/awards10_wbw0yx.jpg',
      title: 'Making India Employable Award at, The Westin Mumbai Garden',
    },
    {
      imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916445/awards11_lkiyb4.jpg',
      title: 'Solar Integrated e-Rickshaw',
    },
    {
      imgUrl: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916448/awards12_taedt9.jpg',
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
