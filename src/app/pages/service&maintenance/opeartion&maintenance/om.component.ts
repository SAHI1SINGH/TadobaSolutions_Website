import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ACTIVITIES, ACTIVITY_BASE } from '../../../models/activities.data';

@Component({
  selector: 'app-om',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './om.component.html',
  styleUrls: ['./om.component.css'],
})
export class OmComponent {
  // TODO: apni images ke Cloudinary URLs yahan daalo
  heroImage =
    'https://res.cloudinary.com/duk8n3cqw/image/upload/v1792152433/WhatsApp_Image_2026-10-16_at_5.24.51_PM_toxdar.jpg';
  aboutImage = 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1792153901/IMG-20261015-WA0008.jpg_nuqrjb.jpg';

  aboutPoints = [
    'Preventive and corrective maintenance',
    'Plant performance audits',
    'Inverter troubleshooting',
    'System diagnostics and reporting',
  ];

  services = [
    {
      title: 'Operation & Maintenance',
      description:
        'Routine inspection, servicing and tuning of your solar plant so it keeps delivering the generation it was designed for.',
      icon: 'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2',
      link: '/operations-management',
    },
    {
      title: 'Module Cleaning',
      description:
        'Safe removal of dust, grime and bird droppings so more sunlight reaches the cells and less energy is lost.',
      icon: 'M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z',
      link: '/module-cleaning',
    },
    {
      title: 'Predictive & Corrective Maintenance',
      description:
        'Spot early warning signs with data, and fix breakdowns fast when they do happen to limit downtime.',
      icon: 'M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z',
      link: '/predictive-corrective-maintenance',
    },
    {
      title: 'Plant Monitoring',
      description:
        'Round-the-clock tracking of generation and performance ratio, with alerts the moment something drifts.',
      icon: 'M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6',
      link: '/plant-monitoring',
    },
    {
      title: 'Preventive Maintenance',
      description:
        'Planned checks of modules, cables, structures and protection gear that stop small issues becoming costly faults.',
      icon: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4',
      link: '/preventive-maintenance',
    },
    {
      title: 'PV DG Synchronization',
      description:
        'Smart integration of solar with diesel generators for a stable, lower-cost and lower-emission power supply.',
      icon: 'M7 2v6M17 2v6M5 8h14v4a7 7 0 01-14 0V8zM12 19v3',
      link: '/pv-dg-synchronization',
    },
  ];

  // Activities ab shared file (activities.data.ts) se aati hain.
  // Images bhi wahin set hoti hain (card + detail page dono ke liye).
  activities = ACTIVITIES;
  activityBase = ACTIVITY_BASE;

  // ---------- QUERY FORM (yellow panel in hero) ----------
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

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}