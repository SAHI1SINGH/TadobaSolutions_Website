import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css',
})
export class CareerComponent {

  careerForm!: FormGroup;

  fileName: string | null = null;

  private readonly googleFormUrl = 'https://forms.gle/Sde4rmSZc9zsK5TY9';

  constructor(private fb: FormBuilder) {
    this.careerForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      location: ['', [Validators.required]],
      query: ['']
    });
  }

  applyNow(): void {
    window.open(this.googleFormUrl, '_blank', 'noopener,noreferrer');
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = null;
    }
  }

  submitCareerForm() {
    if (this.careerForm.invalid) {
      this.careerForm.markAllAsTouched();
    }
  }

}