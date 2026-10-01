import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
   bullete=faHandPointRight

}
