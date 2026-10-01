import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-water-overflow-controller',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './water-overflow-controller.component.html',
  styleUrl: './water-overflow-controller.component.css'
})
export class WaterOverflowControllerComponent {

}
