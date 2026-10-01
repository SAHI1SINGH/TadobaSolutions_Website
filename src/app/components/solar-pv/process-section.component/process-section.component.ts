import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessStep {
  step: string;
  icon: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  variant: 'boxed' | 'plain';
}

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.css',
})
export class ProcessSectionComponent {

  steps: ProcessStep[] = [
    {
  step: 'Step 01',
  icon: 'fa-solid fa-globe',
  description: 'Visit the website at',
  link: { text: 'https://pmsuryaghar.gov.in/', url: 'https://pmsuryaghar.gov.in/' },
  variant: 'boxed'
},
{
  step: 'Step 02',
  icon: 'fa-solid fa-user-shield',
  description: 'Select "Apply Now" or open the Login menu and choose "Consumer Login".',
  variant: 'plain'
},
{
  step: 'Step 03',
  icon: 'fa-solid fa-circle-check',
  description: 'Enter your registered mobile number, complete the Captcha, accept the guidelines and click "Verify".',
  variant: 'boxed'
},
{
  step: 'Step 04',
  icon: 'fa-solid fa-comment-sms',
  description: 'Enter the OTP received via SMS and click "Login" to continue.',
  variant: 'plain'
},
{
  step: 'Step 05',
  icon: 'fa-solid fa-id-card',
  description: 'Fill in your profile details — Name, Email, Address, State, District and PIN — then click "Save".',
  variant: 'boxed'
},
{
  step: 'Step 06',
  icon: 'fa-solid fa-plug-circle-bolt',
  description: 'Apply for Solar Rooftop by selecting your State, District and Utility, fetching account details, then click "Next" to submit.',
  variant: 'plain'
}
  ];

}