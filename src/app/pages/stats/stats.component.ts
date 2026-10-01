import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../services/api.service';
import { ApiResponse } from '../../models/ApiResponse';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent implements OnInit {
  visitCount!: number;
  animatedCount: number = 0;
  apiService = inject(ApiService);

  ngOnInit(): void {
    this.getVisitCount();
  }

  getVisitCount() {
    this.apiService.getVisitCount().subscribe({
      next: (responseData: ApiResponse<number>) => {
        this.visitCount = responseData.data;
        // this.animateCount();
      },
      error: (error) => {
        console.error('Something Went Wrong', error);
      },
    });
  }

  animateCount() {
    const duration = 2000; // animation duration in ms
    const frameRate = 30; // updates per second
    const totalFrames = duration / (1000 / frameRate);
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      this.animatedCount = Math.round((this.visitCount / totalFrames) * frame);
      if (frame >= totalFrames) {
        this.animatedCount = this.visitCount;
        clearInterval(interval);
      }
    }, 1000 / frameRate);
  }
}
