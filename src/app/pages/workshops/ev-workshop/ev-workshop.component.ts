import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { WorkshopRegistrationComponent } from '../../../components/workshop-registration/workshop-registration.component';
import { WorkshopGalleryComponent } from "../../../components/workshop-gallery/workshop-gallery.component";

@Component({
  selector: 'app-ev-workshop',
  standalone: true,
  imports: [CommonModule, WorkshopRegistrationComponent, WorkshopGalleryComponent],
  templateUrl: './ev-workshop.component.html',
  styleUrls: ['./ev-workshop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvWorkshopComponent {
  workshopModules = [
    {
      title: '1. Introduction to e-Vehicle & Battery Technology',
      image: './assets/images/workshops/ev/module1.png',
      points: [
        'Overview of Electric Vehicles',
        'Types of EVs and Traction systems',
        'Benefits and limitations of EV adoption',
        'Batteries and Battery Management System(BMS)',
        'Types of batteries used in EVs',
        'Importance and functioning of BMS',
        'Practical activity: Hands-on with battery and BMS',
      ],
    },
    {
      title: '2. Types of Motors in EVs',
      image: './assets/images/workshops/ev/module2.jpg',
      points: [
        'Fundamentals of Motor Functioning in EVs',
        'Overview of motor types (AC, DC, BLDC, etc.)',
        'Hands-On Motor Analysis',
        'Exploring and comparing different motor types',
      ],
    },
    {
      title: '3. Inverters & Vehicle Dynamics in EVs',
      image: './assets/images/workshops/ev/module3.jpg',
      points: [
        'Importance of inverters and DC-DC converters in EVs',
        'Design principles and operations',
        'Hands-on activity: Working with inverters',
        'Fundamentals of Vehicle Dynamics',
        'Understanding weight distribution, acceleration, and stability',
        'Tractive Force Calculations',
      ],
    },
    {
      title: '4. Simulation in the EV Industry',
      image: './assets/images/workshops/ev/module4.png',
      points: [
        'Introduction to MATLAB and Simulink',
        'Overview of the interface and key features',
        'Creating basic EV models in MATLAB',
        'Running simulations and interpreting results',
      ],
    },
    {
      title: '5. Fault Analysis Using On-Board Diagnostic (OBD) Scanner',
      image: './assets/images/workshops/ev/module5.png',
      points: [
        'Basics of OBD Scanners',
        'Understanding OBD systems and applications in EVs',
        'Using an OBD scanner for EV diagnosis',
      ],
    },
  ];

  evWorkshopImages = [
    { src: './assets/images/workshops/ev/eg1.png', title: 'Coverting Regular Cycle to e-Cycle' },
    { src: './assets/images/workshops/ev/eg5.png', title: 'Process of Retrofitting' },
    { src: './assets/images/workshops/ev/eg2.png', title: 'Retrofitting Solar Powered e-Rickshaw' },
    { src: './assets/images/workshops/ev/eg3.png', title: 'Retrofitting e-Scooter' },
    { src: './assets/images/workshops/ev/eg4.png', title: 'Battery Swapping System' },
    { src: './assets/images/workshops/ev/eg6.png', title: 'Battery Packs' },
  ];
  
}
