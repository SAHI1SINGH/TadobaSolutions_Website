import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {

  images = [
    'assets/images/solar-pv/hero-section/logo.png',
    'assets/images/solar-pv/hero-section/1.png',
    'assets/images/solar-pv/hero-section/30.jpeg',
    'assets/images/solar-pv/hero-section/3.jpeg'
  ];

}