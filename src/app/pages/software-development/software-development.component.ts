import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-software-development',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './software-development.component.html',
  styleUrl: './software-development.component.css',
})
export class SoftwareDevelopmentComponent {
  solutions = [
    {
      name: 'Full-Stack Software Development',
      icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006363.png',
    },
    {
      name: 'Web & Mobile Application',
      icon: 'https://cdn-icons-png.flaticon.com/512/888/888859.png',
    },
    {
      name: 'IoT & Embedded Integration (Raspberry Pi, Arduino, ESP 32 etc)',
      icon: 'https://cdn-icons-png.flaticon.com/128/6092/6092745.png',
    },
    {
      name: 'AI, ML & Machine Learning Solutions',
      icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103658.png',
    },
    {
      name: 'Real Time Dashboards & Control Panels',
      icon: 'https://cdn-icons-png.flaticon.com/128/13135/13135965.png',
    },
    {
      name: 'UX/UI Product Design',
      icon: 'https://cdn-icons-png.flaticon.com/128/12294/12294365.png',
    },
    {
      name: 'Hardware-Integrated Systems',
      icon: 'https://cdn-icons-png.flaticon.com/128/17335/17335989.png',
    },
    {
      name: 'Data-Driven Backend & Analytics',
      icon: 'https://cdn-icons-png.flaticon.com/128/6584/6584876.png',
    },
  ];

  technologies = {
    frontend: [
      {
        name: 'Angular',
        icon: './assets/images/software/angular.png',
      },
      {
        name: 'Flutter',
        icon: './assets/images/software/flutter.png',
      },
      {
        name: 'Kotlin',
        icon: './assets/images/software/kotlin.png',
      },
    ],
    backend: [
      {
        name: 'Spring Boot',
        icon: './assets/images/software/spring-boot.png',
      },
      {
        name: 'Node.js',
        icon: './assets/images/software/nodejs.png',
      },
    ],
    databases: [
      {
        name: 'MongoDB',
        icon: './assets/images/software/mongodb.png',
      },
      {
        name: 'MariaDB',
        icon: './assets/images/software/mariadb.png',
      },
      {
        name: 'MySQL',
        icon: './assets/images/software/mysql.png',
      },
    ],
    aiMl: [
      {
        name: 'ML',
        icon: 'https://cdn-icons-png.flaticon.com/128/4616/4616734.png',
      },
      {
        name: 'TensorFlow',
        icon: './assets/images/software/tensor-flow.png',
      },
      {
        name: 'PyTorch',
        icon: './assets/images/software/pytorch.png',
      },
      {
        name: 'scikit-learn',
        icon: './assets/images/software/sci-kit.png',
      },
    ],
    hosting: [
      {
        name: 'Hostinger',
        icon: './assets/images/software/hostinger.png',
      },
      {
        name: 'Linux VPS',
        icon: 'https://cdn-icons-png.flaticon.com/512/518/518713.png',
      },
    ],
  };

  processSteps = [
    {
      title: 'Discovery & Consultation',
      description:
        'Initial phase to understand clients needs and project scope',
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    },
    {
      title: 'Rapid Prototyping',
      description:
        'Creating quick iterative prototypes for testing and feedback',
      icon: 'https://cdn-icons-png.flaticon.com/128/17372/17372203.png',
    },
    {
      title: 'Architecture & Stack Selection',
      description: 'Choosing the right technology stack and architecture',
      icon: 'https://cdn-icons-png.flaticon.com/128/16949/16949247.png',
    },
    {
      title: 'Agile Development',
      description: 'Implementing flexible and iterative development practices',
      icon: 'https://cdn-icons-png.flaticon.com/128/15189/15189140.png',
    },
    {
      title: 'QA + Hardware Testing',
      description: 'Ensuring quality and reliability through rigorous testing',
      icon: 'https://cdn-icons-png.flaticon.com/128/17729/17729867.png',
    },
    {
      title: 'Launch & Support',
      description: 'Deploying the solutions and providing ongoing support',
      icon: 'https://cdn-icons-png.flaticon.com/128/8898/8898827.png',
    },
  ];

  projects = [
    {
      title: 'Battery Swapping System',
      description:
        'Developed a scalable battery swapping system integrating android, web, and raspberry pi based embedded platforms. The mobile app enables real time station discovery and battery tracking. Admin use a web portal with advanced analytics and monitoring. On site systems featured RFID based authentication battery telemetry and automated locking enabling seamless intelligent EV energy infrastructure deployment.',
      image: './assets/images/software/bss-creda.jpg',
      client: 'Chhattisgarh State Renewable Energy Development Agency (CREDA)',
    },
    {
      title: 'Soil Cloud-TM',
      description:
        'We developed an end to end solutions where TTGO GSM module capture real time soil temperaure & moisture data and transmit it to a robust spring boot backend. The backend validated processes and seamlessly updates the data into google sheets via the sheet api, along with database data storing for api purposes, enabling structured real time cloud storage and monitoring. This system highlights efficient IoT to cloud integration automated data workflows and scalable software architecture for smart agriculture and environment monitoring applications.',
      image: './assets/images/software/tm.png',
      client: 'Bhoomicam Pvt. Ltd.',
    },
  ];

  sendMail() {
    const email = 'info@tadobasolutions.com';
    const subject = 'Project Inquiry';
    const body = 'Hi, I would like to discuss a project with you.';

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

}
