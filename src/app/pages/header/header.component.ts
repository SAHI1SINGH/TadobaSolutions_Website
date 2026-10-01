import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngleDown,
  faAngleRight,
  faBars,
  faBoxOpen,
  faBriefcase,
  faBuildingCircleArrowRight,
  faGears,
  faHouseMedicalCircleExclamation,
  faPaste,
  faPeopleGroup,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    SignUpComponent,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hamBurgerMenu = faBars;
  service = faGears;
  productIcon = faBoxOpen;
  dealer = faBuildingCircleArrowRight;
  course = faPaste;
  about = faPeopleGroup;
  closeMenu = faTimes;
  career = faBriefcase;
  angleDown = faAngleDown;
  angleRight = faAngleRight;

  isMenuOpen = false;
  isSignUpVisible = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isMenuOpen = false;
    });
  }
  dropdowns: { [key: string]: boolean } = {
    products: false,
    trainings: false,
    services: false,
    customSolutions: false,
  };

  toggleDropdown(menu: string): void {
    this.dropdowns[menu] = !this.dropdowns[menu];
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openSignUpPopup() {
    this.isSignUpVisible = true;
  }
  closeSignUpPopup(): void {
    this.isSignUpVisible = false;
  }

  // Dropdown overflow fix — screen ke available space check karke align decide karta hai
  onDropdownEnter(event: MouseEvent): void {
    const navItem = event.currentTarget as HTMLElement;
    const dropdownMenu = navItem.querySelector(
      '.dropdown-menu'
    ) as HTMLElement;
    if (!dropdownMenu) return;

    // Reset alignment first so we measure the menu's natural (left: 0) position
    dropdownMenu.classList.remove('align-right');

    // Menu is hidden (opacity:0) but still laid out, so getBoundingClientRect works.
    // Use requestAnimationFrame to ensure the class removal has been applied
    // before we measure, avoiding stale rect values.
    requestAnimationFrame(() => {
      const rect = dropdownMenu.getBoundingClientRect();
      // clientWidth excludes scrollbar, unlike innerWidth
      const viewportWidth = document.documentElement.clientWidth;

      if (rect.right > viewportWidth) {
        dropdownMenu.classList.add('align-right');
      }
    });
  }
}