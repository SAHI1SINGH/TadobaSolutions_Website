import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {

  bullete=faBullseye

}
