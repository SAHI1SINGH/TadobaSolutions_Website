import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faYoutube, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-top-contact-bar',
  standalone: true,
  imports: [
      MatIconModule,
      FontAwesomeModule,
      RouterModule,
      CommonModule,
      MatButtonModule,],
  templateUrl: './top-contact-bar.component.html',
  styleUrl: './top-contact-bar.component.css'
})
export class TopContactBarComponent {

  instagram = faInstagram;
    facebook = faFacebook;
    youtube = faYoutube;
    twitter = faXTwitter;
    whatsapp = faWhatsapp;
  

}
