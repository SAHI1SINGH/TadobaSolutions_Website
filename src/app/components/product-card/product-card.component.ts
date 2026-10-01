import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface BadgeStyle {
  label: string;
  icon: string;
  bg: string;
  color: string;
}

const BADGE_MAP: Record<string, BadgeStyle> = {
  'best-seller': { label: 'Best Seller', icon: 'workspace_premium', bg: '#e3f6ea', color: '#1a7d3c' },
  'popular': { label: 'Popular', icon: 'local_fire_department', bg: '#fde6e6', color: '#d9362f' },
  'eco': { label: 'Energy Efficient', icon: 'eco', bg: '#e3f6ea', color: '#1a7d3c' },
  'new': { label: 'New Arrival', icon: 'auto_awesome', bg: '#ece7fb', color: '#5b3fd6' },
};

const DEFAULT_ICONS = ['bolt', 'shield', 'eco'];

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    RouterModule,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productId!: string;
  @Input() productImg!: string;
  @Input() productName!: string;
  @Input() productRating!: number;
  @Input() productDescription: string[] = [];
  @Input() productBadge?: 'best-seller' | 'popular' | 'eco' | 'new';
  @Input() productFeatures?: { icon: string; label: string }[];

  whatsapp = faWhatsapp;
  whatsappNumber: string = '+918896444447';

  isWishlisted = false;

  get badgeStyle(): BadgeStyle | null {
    return this.productBadge ? BADGE_MAP[this.productBadge] : null;
  }

  get blurb(): string {
    return this.productDescription?.[0] ?? '';
  }

  get features(): { icon: string; label: string }[] {
    if (this.productFeatures?.length) return this.productFeatures;
    return (this.productDescription || [])
      .slice(0, 3)
      .map((text, i) => ({
        icon: DEFAULT_ICONS[i % DEFAULT_ICONS.length],
        label: text.length > 22 ? text.slice(0, 20) + '…' : text,
      }));
  }

  get fullStars(): number[] {
    return Array(Math.floor(this.productRating || 0)).fill(0);
  }
  get hasHalfStar(): boolean {
    return (this.productRating || 0) % 1 >= 0.5;
  }
  get emptyStars(): number[] {
    const filled = Math.floor(this.productRating || 0) + (this.hasHalfStar ? 1 : 0);
    return Array(Math.max(0, 5 - filled)).fill(0);
  }

  toggleWishlist(event: Event): void {
    event.stopPropagation();
    this.isWishlisted = !this.isWishlisted;
  }

  openWhatsApp(productId: string): void {
    const currentUrl = `https://tadobasolutions.com/product/${encodeURIComponent(productId)}`;
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(currentUrl)}`;
    window.open(whatsappUrl, '_blank');
  }
}