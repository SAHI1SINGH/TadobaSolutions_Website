import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ourProductList, retailProductList, Product } from '../../models/Product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  private readonly whatsappNumber = '+918896444447';

  // Combined product source — both catalogs, one page
  allProducts: Product[] = [...ourProductList, ...retailProductList];

  // Filtered/displayed products
  products: Product[] = [];

  // Category pills, built from the data itself
  categories: string[] = [];
  activeCategory: string = 'All';

  // Search
  searchTerm: string = '';

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.categories = ['All', ...new Set(this.allProducts.map((p) => p.productCategory))];
    this.applyFilters();
  }

  navigateBack(): void {
    this.location.back();
  }

  selectCategory(cat: string): void {
    this.activeCategory = cat;
    this.applyFilters();
  }

  onSearch(): void {
    this.applyFilters();
  }

  private applyFilters(): void {
    const term = this.searchTerm.toLowerCase().trim();
    this.products = this.allProducts.filter((product) => {
      const matchesCategory =
        this.activeCategory === 'All' || product.productCategory === this.activeCategory;
      const matchesSearch = product.productName.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }

  onContact(): void {
    const currentUrl = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/${this.whatsappNumber}?text=${currentUrl}`, '_blank');
  }
}