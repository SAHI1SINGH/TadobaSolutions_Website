import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  whatsapp = faWhatsapp;

  whatsappNumber: string = '+918896444447';

  openWhatsApp(): void {
    // Encode the entire URL, so any special characters are handled
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=`;
    window.open(whatsappUrl, '_blank');
  }
}
