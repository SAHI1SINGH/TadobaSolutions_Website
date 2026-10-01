import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface CarouselHighlight {
  label: string;
  value: string;
}

interface CarouselSlide {
  imgUrl: string;
  title: string;
  subtitle: string;
  navUrl?: string;
  highlights: CarouselHighlight[];
}

@Component({
  selector: 'app-carasol',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './carasol.component.html',
  styleUrls: ['./carasol.component.css'],
})
export class CarasolComponent implements OnInit, OnDestroy {
  @Input() autoSlide: boolean = true;
  @Input() slideInterval: number = 4000;
  @Input() indicators: boolean = true;

  selectedIndex: number = 0;
  private autoSlideInterval: any;
  private swipeCoord: [number, number] = [0, 0];
  private swipeTime: number = new Date().getTime();

  slides: CarouselSlide[] = [
    {
      imgUrl: './assets/images/carasol/14.png',
      title: 'Day Night Smart Switch',
      subtitle:
        'Automatically Controls Lights from Dusk to Dawn for Smart & Energy-Efficient Lighting',
      navUrl: '/products/day-night-smart-switch',
      highlights: [
        { label: 'Load Current', value: '6A' },
        { label: 'Load Voltage', value: '220-250V AC' },
        { label: 'Night Power', value: '1-2 Watt' },
      ],
    },
    {
      imgUrl: './assets/images/carasol/16.png',
      title: 'Solar Camera',
      subtitle:
        'Smart Solar Surveillance with HD Video, Night Vision & Motion Detection',
      navUrl: '/products/solar-camera',
      highlights: [
        { label: 'Power Source', value: 'Solar' },
        { label: 'Vision', value: 'Night Vision' },
        { label: 'Detection', value: 'Motion-Based' },
      ],
    },
    {
      imgUrl: './assets/images/carasol/17.png',
      title: 'FarmEye+',
      subtitle:
        'AI-Powered Smart Soil & Crop Monitoring for Precision Agriculture',
      navUrl: '/products/farmeye',
      highlights: [
        { label: 'Monitoring', value: 'Soil & Crop' },
        { label: 'Powered By', value: 'AI Analytics' },
        { label: 'Use Case', value: 'Precision Farming' },
      ],
    },
    {
      imgUrl: './assets/images/carasol/18.png',
      title: 'Universal Water Controller',
      subtitle:
        'Automate Water Pump Operations with Intelligent Level Monitoring & Motor Protection',
      navUrl: '/products/universal-water-controller',
      highlights: [
        { label: 'Function', value: 'Pump Automation' },
        { label: 'Protection', value: 'Motor Winding' },
        { label: 'Support', value: '24/7 Helpline' },
      ],
    },
    {
      imgUrl: './assets/images/carasol/19.png',
      title: 'Automatic Water Tank Controller',
      subtitle:
        'Smart Water Level Automation with Motor Protection for Homes, Farms and Industries',
      navUrl: '/products/automatic-water-tank-controller',
      highlights: [
        { label: 'Ideal For', value: 'Home & Industry' },
        { label: 'Protection', value: 'Motor Safety' },
        { label: 'Control', value: 'Auto Level Sensing' },
      ],
    },
    {
      imgUrl: './assets/images/carasol/20.png',
      title: 'LED Solar Street Light',
      subtitle:
        'High-Efficiency Solar Lighting for Streets, Campuses, Parks & Outdoor Spaces',
      navUrl: '/products/led-solar-street-light',
      highlights: [
        { label: 'Efficiency', value: 'High-Output LED' },
        { label: 'Power Source', value: 'Solar' },
        { label: 'Best For', value: 'Streets & Campuses' },
      ],
    },
  ];

  ngOnInit(): void {
    if (this.autoSlide && this.slides.length > 0) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    this.selectedIndex =
      this.selectedIndex === 0
        ? this.slides.length - 1
        : this.selectedIndex - 1;
  }

  onNextClick(): void {
    this.selectedIndex =
      this.selectedIndex === this.slides.length - 1
        ? 0
        : this.selectedIndex + 1;
  }

  onSwipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY,
    ];
    const time = new Date().getTime();
    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [
        coord[0] - this.swipeCoord[0],
        coord[1] - this.swipeCoord[1],
      ];
      const duration = time - this.swipeTime;
      if (
        duration < 1000 &&
        Math.abs(direction[0]) > 30 &&
        Math.abs(direction[0]) > Math.abs(direction[1] * 3)
      ) {
        direction[0] < 0 ? this.onNextClick() : this.onPrevClick();
      }
    }
  }

  scrollToServices(): void {
    const el = document.getElementById('services-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}