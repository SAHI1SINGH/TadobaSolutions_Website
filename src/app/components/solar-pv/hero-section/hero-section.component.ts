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
    'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790918680/logo_vfujnw.png',
    'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790918663/1_ducqzc.png',
    'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790918674/30_f70app.jpg',
    'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790918671/3_byupgm.jpg'
  ];

}