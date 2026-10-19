import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solar-query',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './solar-query.component.html',
  styleUrls: ['./solar-query.component.css'],
})
export class SolarQueryComponent {
  private readonly WHATSAPP_NUMBER = '918109804693';

  private fb = inject(FormBuilder);

  submitted = false;

  plantTypes = ['Rooftop', 'Ground-mounted', 'Floating', 'Other'];

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{10,15}$/)]],
    plantType: ['Rooftop', Validators.required],
    capacity: [''],
    location: [''],
    query: ['', [Validators.required, Validators.minLength(10)]],
  });

  get f() {
    return this.form.controls;
  }

  sendToWhatsApp(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.value;
    const lines = [
      '*New Solar Plant Query*',
      '',
      `*Name:* ${v.name}`,
      `*Phone:* ${v.phone}`,
      `*Plant Type:* ${v.plantType}`,
      v.capacity ? `*Capacity:* ${v.capacity}` : '',
      v.location ? `*Location:* ${v.location}` : '',
      '',
      `*Query:*`,
      `${v.query}`,
    ].filter((line, i, arr) => line !== '' || (arr[i - 1] !== '' && i !== arr.length - 1));

    const url = `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  }
}