import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-three-d-service',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './three-d-service.component.html',
  styleUrl: './three-d-service.component.css'
})
export class ThreeDServiceComponent {

}
