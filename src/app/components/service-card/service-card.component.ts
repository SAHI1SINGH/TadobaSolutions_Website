import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import {MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule,MatButtonModule,FontAwesomeModule,MatIconModule,MatCardModule,RouterModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
  icon = faScrewdriverWrench;

  @Input()imgUrl!: string;
  @Input() title!: string;
  @Input() navigation!: string;

}
