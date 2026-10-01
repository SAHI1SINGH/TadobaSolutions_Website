import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-digit-agri-villages',

  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './digit-agri-villages.component.html',
  styleUrl: './digit-agri-villages.component.css'
})
export class DigitAgriVillagesComponent implements OnInit, OnDestroy {

  @ViewChild('targetSection') targetSection!:ElementRef;

  ngOnInit() {
    // Initialization logic here
  }

  ngOnDestroy() {
    // Cleanup logic here
  }

  scrollToProductSection(){
    this.targetSection.nativeElement.scrollIntoView({behavior:'smooth'});
  }

}
