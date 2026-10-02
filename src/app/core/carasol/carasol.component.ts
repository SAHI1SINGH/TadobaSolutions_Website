import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-carasol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carasol.component.html',
  styleUrls: ['./carasol.component.css'],
})
export class CarasolComponent implements AfterViewInit {
  /** Cloudinary public video URL yahan daalo */
  @Input() videoUrl: string =
    'https://res.cloudinary.com/duk8n3cqw/video/upload/v1790854393/Web_Page_Video_4K_File_2_vkfmmi.mp4';

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  /** Cloudinary se video ka first frame (jpg) poster ke roop me */
  get posterUrl(): string {
    if (!this.videoUrl.includes('/video/upload/')) return '';
    return this.videoUrl
      .replace('/video/upload/', '/video/upload/so_0,f_jpg,q_auto/')
      .replace(/\.(mp4|webm|mov)(\?.*)?$/i, '.jpg');
  }

  ngAfterViewInit(): void {
    const v = this.heroVideo.nativeElement;
    // Autoplay ke liye muted DOM property set karna zaroori hai
    v.muted = true;
    v.defaultMuted = true;
    v.play().catch(() => {
      /* autoplay blocked – ignore */
    });
  }
}