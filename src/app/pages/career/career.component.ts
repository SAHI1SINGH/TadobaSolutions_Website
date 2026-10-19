import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css',
})
export class CareerComponent {

  private readonly scriptUrl = 'https://script.google.com/macros/s/AKfycbxFf3I-HceeM44L7aU3yLmb11wFX6kMagWL2dMpAz06XQyhX0zrNB9l2JF5x2Z1MhA9kw/exec';

  private readonly maxFileSize = 5 * 1024 * 1024;

  jobOpenings: string[] = [
    'Embedded Engineer',
    'Solar - Site Inspection',
    'Solar - Operation and Maintenance',
    'Marketing Department'
  ];

  careerForm!: FormGroup;

  selectedFile: File | null = null;
  fileName: string | null = null;
  fileError = '';
  isSubmitting = false;
  submitted = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.careerForm = this.fb.group({
      position: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      place: ['', [Validators.required]]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fileError = '';
    this.selectedFile = null;
    this.fileName = null;

    if (!input?.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    if (file.type !== 'application/pdf') {
      this.fileError = 'Only PDF files are allowed';
      input.value = '';
      return;
    }
    if (file.size > this.maxFileSize) {
      this.fileError = 'File size must be under 5 MB';
      input.value = '';
      return;
    }

    this.selectedFile = file;
    this.fileName = file.name;
  }

  async submitCareerForm(): Promise<void> {
    this.submitted = true;
    this.careerForm.markAllAsTouched();

    if (this.careerForm.invalid || !this.selectedFile || this.fileError) {
      return;
    }

    this.isSubmitting = true;

    try {
      const base64 = await this.readFileAsBase64(this.selectedFile);

      const payload = {
        position: this.careerForm.value.position,
        fullName: this.careerForm.value.fullName.trim(),
        place: this.careerForm.value.place.trim(),
        fileName: this.selectedFile.name,
        fileData: base64
      };

      const response = await fetch(this.scriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success === true) {
        this.snackBar.open('Application submitted successfully!', 'Close', { duration: 5000 });
        this.resetForm();
      } else {
        this.snackBar.open('Could not submit. Please try again.', 'Close', { duration: 5000 });
      }
    } catch {
      this.snackBar.open('Something went wrong. Please try again.', 'Close', { duration: 5000 });
    } finally {
      this.isSubmitting = false;
    }
  }

  private readFileAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]);
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  }

  private resetForm(): void {
    this.careerForm.reset({ position: '', fullName: '', place: '' });
    this.selectedFile = null;
    this.fileName = null;
    this.fileError = '';
    this.submitted = false;
    const fileInput = document.getElementById('uploadBtn') as HTMLInputElement | null;
    if (fileInput) {
      fileInput.value = '';
    }
  }
}