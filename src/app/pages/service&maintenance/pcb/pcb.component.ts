import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pcb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pcb.component.html',
  styleUrls: ['./pcb.component.css'],
})
export class PcbComponent {
  services = [
    {
      title: 'Schematic Design',
      description:
        'Professional circuit diagram creation using industry-standard tools',
      icon: '<path d="M13,4V10H17.57L14.28,13.29L15.7,14.71L21,9.41V15H23V7H15V9H10.57L7.28,5.71L8.7,4.29L13,8.59V4M3,17V19H19V17H3Z" />',
    },
    {
      title: 'PCB Layout',
      description:
        'Optimized board layouts for signal integrity and manufacturability',
      icon: '<path d="M19,5V19H5V5H19M21,3H3V21H21V3M17,7V17H7V7H17M18,8H8V16H18V8Z" />',
    },
    {
      title: 'Prototyping',
      description: 'Rapid prototyping services to test your designs',
      icon: '<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />',
    },
    {
      title: 'Fabrication',
      description:
        'High-quality PCB manufacturing with various material options',
      icon: '<path d="M19,3H17V9H19V3M15,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11L19,9V3M19,19H5V5H13V9H19V19Z" />',
    },
    {
      title: 'Assembly',
      description: 'Component placement and soldering services',
      icon: '<path d="M7,2V6H9V4H11V8H13V6H15V10H17V8H19V12H17V10H15V14H13V12H11V16H9V14H7V18H5V16H3V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V12H19V14H17V10H19V12H21V4H19V6H17V2H7Z" />',
    },
    {
      title: 'Testing',
      description: 'Comprehensive electrical and functional testing',
      icon: '<path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H13V4C13,5.1 12.1,6 11,6H8V9H5V12.1C6.4,11.6 7.6,12.1 8.4,13.1L10.8,16.6C11.5,17.7 10.8,19 9.6,19H4C2.9,19 2,19.9 2,21C2,22.1 2.9,23 4,23H9.6C11.3,23 12.7,21.8 12.9,20.1L13,19H18.6C20.5,19 22,17.5 22,15.6V10H21M18.6,17H14V13.4C14,12.6 13.4,12 12.6,12H12V10H18.6V17Z" />',
    },
  ];

  // Capabilities Data
  capabilities = [
    '1-16 layer boards',
    'HDI and rigid-flex designs',
    'Impedance control',
    'RF and high-speed designs',
    'DFM/DFA analysis',
    'RoHS compliant materials',
    'Thermal management solutions',
    'High-frequency & microwave PCBs',
  ];

  // Process Steps Data
  processSteps = [
    {
      number: '1',
      title: 'Requirement Analysis',
      description:
        'Understanding your technical specifications and constraints',
    },
    {
      number: '2',
      title: 'Schematic Capture',
      description:
        'Creating the circuit diagram with proper component selection',
    },
    {
      number: '3',
      title: 'Board Layout',
      description: 'Optimizing component placement and routing',
    },
    {
      number: '4',
      title: 'Design Verification',
      description: 'Running DRC, ERC and signal integrity checks',
    },
    {
      number: '5',
      title: 'Prototyping',
      description: 'Fabricating and assembling initial boards',
    },
    {
      number: '6',
      title: 'Testing & Validation',
      description: 'Ensuring the board meets all specifications',
    },
  ];
}
