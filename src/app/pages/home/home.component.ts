import {
  Component,
  OnInit,
  HostListener,
  Inject,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ImgSliderComponent } from '../img-slider/img-slider.component';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ourProductList, retailProductList, Product } from '../../models/Product';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { ApiService } from '../../services/api.service';
import { Quote } from '../../models/Quote';
import { ApiResponse } from '../../models/ApiResponse';
import { AwardsSliderComponent } from '../../components/awards-slider/awards-slider.component';
import { StatsComponent } from '../stats/stats.component';
import { VocationalTrainingComponent } from '../../components/vocational-training/vocational-training.component';
import { CarasolComponent } from '../../core/carasol/carasol.component';

interface ServiceCardData {
  imgUrl: string;
  title: string;
  navUrl: string;
}

interface CategoryPillData {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    ServiceCardComponent,
    ImgSliderComponent,
    ProductCardComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AwardsSliderComponent,
    StatsComponent,
    VocationalTrainingComponent,
    CarasolComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  // icons
  rightArrow = faArrowRight;
  whatsapp = faWhatsapp;

  // screen size
  screenWidth!: number;

  loopNumber: number = 4;

  // service injection
  snackBarService = inject(SnackbarService);
  apiService = inject(ApiService);

  // quote form
  quoteForm!: FormGroup;

  serviceData: ServiceCardData[] = [
    {
      imgUrl: './assets/images/service/electromechanical.png',
      title: 'Electromechanical Product Design & Development',
      navUrl: 'water-overflow-controller',
    },
    {
      imgUrl: './assets/images/service/2.png',
      title: 'Solar PV Plant/EV/Batteries',
      navUrl: 'solar-pv-plant',
    },
    {
      imgUrl: './assets/images/service/3.png',
      title: 'Customized Industrial Solutions',
      navUrl: 'contact-us',
    },
    {
      imgUrl: './assets/images/service/5.png',
      title: 'PCB Design, Development & Fabrication',
      navUrl: 'pcb-design-development',
    },
    {
      imgUrl: './assets/images/service/6.png',
      title: 'Digital Agri Village Products & Solutions',
      navUrl: 'digital-agri-village',
    },
  ];

  // Category pills shown above the product grid
  categoryPills: CategoryPillData[] = [
    { icon: 'grid_view', label: 'All Products' },
    { icon: 'solar_power', label: 'Solar & Energy' },
    { icon: 'sensors', label: 'IoT Devices' },
    { icon: 'agriculture', label: 'Agri-Tech' },
    { icon: 'precision_manufacturing', label: 'Automation' },
  ];

  // Merged product preview — one combined list, both catalogs
  allProductsPreview: Product[] = [...ourProductList, ...retailProductList].slice(0, 4);
  allProductsPreview3: Product[] = [...ourProductList, ...retailProductList].slice(0, 3);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private fb: FormBuilder,
  ) {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      query: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.updateVisitCount();
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  submitQuteForm() {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
    } else {
      const formData: Quote = {
        quoteId: 1,
        customerName: this.quoteForm.value.name,
        customerEmail: this.quoteForm.value.email,
        customerMobileNumber: this.quoteForm.value.mobileNumber,
        queryDescription: this.quoteForm.value.query,
      };

      this.apiService.submitQuoteForm(formData).subscribe({
        next: (responseData: ApiResponse<string>) => {
          this.snackBarService.openSuccessSnackBar(
            'Form submitted, we will reach you in some days',
          );
          this.quoteForm.reset();
          console.log('Form submitted', responseData.data);
        },
        error: (error) => {
          console.error('Error submitting quote form', error);
          this.snackBarService.openFailedSnackBar('Failed to submit form');
        },
      });
    }
  }

  updateVisitCount() {
    this.apiService.UpdateVisitCount().subscribe({
      next: (responseData: ApiResponse<string>) => {},
      error: (error) => {
        console.error('Something Went Wrong', error);
      },
    });
  }
}