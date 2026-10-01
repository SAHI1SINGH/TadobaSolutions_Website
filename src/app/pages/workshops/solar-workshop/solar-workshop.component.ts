import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { WorkshopRegistrationComponent } from "../../../components/workshop-registration/workshop-registration.component";
import { WorkshopGalleryComponent } from "../../../components/workshop-gallery/workshop-gallery.component";

@Component({
  selector: 'app-solar-workshop',
  standalone: true,
  imports: [CommonModule, WorkshopRegistrationComponent, WorkshopGalleryComponent],
  templateUrl: './solar-workshop.component.html',
  styleUrl: './solar-workshop.component.css',
})
export class SolarWorkshopComponent {

  workshopModules = [
    {
      title: '1. Solar Photovoltaic (PV) Operation & OFF-Grid PV Plant',
      image: './assets/images/workshops/solar-pv/module1.png',
      points: [
        'Solar PV Cell to Module, Series/Parallel, String, Array.',
        'Installation Requirements.',
        'Plant Operation & Site safety.',
        'Single Line Diagram (SLD).',
        '9 W AC/DC Bulb/Fan to kW of PV Plant Field Installation.',
        'Load Estimation, Battery Back-up Hrs. Calculation w.r.t. Load.',
        'Wire (AC/DC) Sizing, Earthing, Lightning Arrestor (LA).',
        'Structure (Roof-mounted/Industrial Shed/Ground Mounted/Elevated).'
      ]
    },
    {
      title: '2. ON-Grid PV Plant',
      image: './assets/images/workshops/solar-pv/module2.png',
      points: [
        'ACDB/DCDB.',
        'Generation Meter, Net Meter.',
        'Complete Connection Through CSPDCL Grid.'
      ]
    },
    {
      title: '3. Hybrid PV Plant',
      image: './assets/images/workshops/solar-pv/module3.jpg',
      points: [
        'PV Plant with ON-Grid and Battery back-up with critical Load.',
        'Live 5kW plant Installation.'
      ]
    },
    {
      title: '4. Basics of Wind Energy and Hydrogen Energy',
      image: './assets/images/workshops/solar-pv/module4.png',
      points: [
        'Small Wind Energy System Installation.',
        'Basics of Hydrogen Energy Practical study.'
      ]
    },
    {
      title: '5. Software Simulation, Site Safety Training, Marketing & Solar PV Plant Visit',
      image: '',
      points: [
        'PV System Design.',
        'How to convince the People.',
        'Site Safety Training.',
        'Solar PV Plant Visit.'
      ]
    }
  ];

  solarPvImages = [
    { src: './assets/images/workshops/solar-pv/sg1.png', title: 'Off Grid Solar Inverter Installation' },
    { src: './assets/images/workshops/solar-pv/sg2.png', title: 'Panel Mounting' },
    { src: './assets/images/workshops/solar-pv/sg3.png', title: 'Solar Panel Setup' },
    { src: './assets/images/workshops/solar-pv/sg4.png', title: 'Vardhman hospital durg 15 KW' },
    { src: './assets/images/workshops/solar-pv/sg5.png', title: 'Industrial Shed 5 kW Jute Factory Raipur' },
    { src: './assets/images/workshops/solar-pv/sg6.png', title: 'Solar Pump (3HP) Charma (Kanker)' },
    { src: './assets/images/workshops/solar-pv/sg7.png', title: 'Solar PV at Floating House Gangrel Dam' },
    { src: './assets/images/workshops/solar-pv/sg8.png', title: 'Bhilai Institute of Technology, Raipur' },
    { src: './assets/images/workshops/solar-pv/sg9.png', title: 'Risali, Maroda Basti, Bhilai' },
    { src: './assets/images/workshops/solar-pv/sg10.png', title: 'Industrial Shed 5 kW Shankar Nagar Raipur'},
    { src: './assets/images/workshops/solar-pv/sg11.png', title: '' },
    { src: './assets/images/workshops/solar-pv/sg12.png', title: 'Solar PV Water Proof Parking Stand' },
  ];  
  
}
