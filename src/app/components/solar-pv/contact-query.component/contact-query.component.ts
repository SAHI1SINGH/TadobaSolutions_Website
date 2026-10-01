import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-query',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-query.component.html',
  styleUrl: './contact-query.component.css',
})
export class ContactQueryComponent {

  fullName = '';
  phoneNumber = '';
  submitted = false;

  // Replace with YOUR actual Google Form action URL and entry IDs
  private readonly FORM_ACTION_URL =
    'https://docs.google.com/forms/d/e/1FAIpQLSeG2RXLk-d7wA6X5ef7Z2jwpzbv64Qsqgsgq3y9Qj8WWs0UkA/formResponse';

  private readonly NAME_ENTRY_ID = 'entry.1486010414';   
  private readonly PHONE_ENTRY_ID = 'entry.475526679';  

  submitQuery(){
    const formData = new FormData();
    formData.append(this.NAME_ENTRY_ID, this.fullName);
    formData.append(this.PHONE_ENTRY_ID, this.phoneNumber);

    fetch(this.FORM_ACTION_URL, {
      method: 'POST',
      mode: 'no-cors',            // Google Forms doesn't return CORS headers — this is expected
      body: formData
    }).then(() => {
      // no-cors mode always resolves here even on success, since response is opaque
      this.submitted = true;
      this.fullName = '';
      this.phoneNumber = '';
    }).catch(() => {
      // network-level failure only
      this.submitted = true; // Google Forms submissions via no-cors typically still succeed
    });
  }

}