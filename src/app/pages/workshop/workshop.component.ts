import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { WorkshopRegistrationComponent } from "../../components/workshop-registration/workshop-registration.component";

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, WorkshopRegistrationComponent],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css',
})
export class WorkshopComponent {
  workshops = [
    {
      title: 'EV Battery & Technology',
      description:
        'Discover innovative EV battery solutions and advanced technologies that drive sustainability and performance.',
      link: '/ev-workshop',
      backgroundColor: '#27ae60', 
    },
    {
      title: 'IIoT with Embedded System',
      description:
        'Explore industrial IoT integration with embedded systems for automation, monitoring, and efficiency.',
      link: '/iiot-workshop',
      backgroundColor: '#8e44ad', 
    },
    {
      title: 'Solar PV Plant Installation & Application',
      description:
        'Learn the design, installation, and application of solar photovoltaic systems for clean energy solutions.',
      link: '/solar-pv-plant-workshop',
      backgroundColor: '#e67e22', 
    },
    // {
    //   title: '3D Designing & Printing',
    //   description:
    //     'Understand 3D modeling and printing technologies for prototyping and industrial design applications.',
    //   link: '/3d-workshop',
    //   backgroundColor: '#2980b9', 
    // },
  ];
}
