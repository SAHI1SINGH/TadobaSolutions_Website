import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faBullseye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-terms-and-condition',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './terms-and-condition.component.html',
  styleUrl: './terms-and-condition.component.css'
})
export class TermsAndConditionComponent {
  bullete=faBullseye;

}
