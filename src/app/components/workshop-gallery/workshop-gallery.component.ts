import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { WorkshopGallery } from '../../models/WorkshopGallery.model';

@Component({
  selector: 'app-workshop-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshop-gallery.component.html',
  styleUrl: './workshop-gallery.component.css'
})
export class WorkshopGalleryComponent {

  @Input() galleryData: WorkshopGallery[] = [];

}
