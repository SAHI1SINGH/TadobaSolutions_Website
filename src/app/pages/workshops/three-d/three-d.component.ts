import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { WorkshopRegistrationComponent } from "../../../components/workshop-registration/workshop-registration.component";
import { WorkshopGalleryComponent } from "../../../components/workshop-gallery/workshop-gallery.component";

@Component({
  selector: 'app-three-d',
  standalone: true,
  imports: [CommonModule, WorkshopRegistrationComponent, WorkshopGalleryComponent],
  templateUrl: './three-d.component.html',
  styleUrl: './three-d.component.css'
})
export class ThreeDComponent {

  workshopModules = [
    {
      title: '1. Foundations of 3D Design',
      image: './assets/images/workshops/3d/module1.png',
      points: [
        'Overview of manufacturing: Subtractive (CNC machining) vs. additive (3D printing).',
        'Why 3D design matters: Speed, customization, and prototyping.',
        'Software Installation: Assist participants in downloading free tools (e.g., TinkerCAD, Fusion360 for students).',
        'Activity: Icebreaker – Design a simple 2D object (e.g., a chair) using pen/paper and share ideas.',
        'Orthographic/isometric projections.',
        'Dimensioning, tolerances, and scale.',
        'Projections of planes/solids (cubes, cylinders).',
        'Activity: Sketch orthographic views of a simple object (e.g., a dice).',
        'Interface walkthrough (toolbars, workspace, shortcuts).',
        'Basic tools: Extrude, revolve, fillet, chamfer.',
        'Parametric vs. direct modeling.',
        'Activity: Create a 3D keychain with text/logo in CAD software.',
        'Assignment: Design a 2D sketch to convert to 3D on Day 2.'
      ]
    },
    {
      title: '2. 2D to 3D Conversion & Advanced Modeling',
      image: './assets/images/workshops/3d/module2.jpg',
      points: [
        'Troubleshoot common CAD errors (e.g., unconstrained sketches).',
        'Discuss real-world applications of 3D modeling (e.g., product design).',
        'Activity: Participants present their 2D bookshelf sketches; group feedback.',
        'Step-by-step demo: Turning 2D sketches into 3D models.',
        'Advanced tools: Loft, sweep, boolean operations.',
        'Design for assembly (e.g., interlocking parts).',
        'Activity: Convert the 2D bookshelf sketch into a 3D model with shelves, supports, and joints.',
        'Assignment: Export the model as an STL file for Day 3 printing.',
        'Stress analysis basics (simulate load-bearing structures).',
        'Hollowing, rib design, and material efficiency.',
        'Activity: Optimize the bookshelf model for lightweight 3D printing.'
      ]
    },
    {
      title: '3. 3D Printing, Post-Processing & Final Projects',
      image: './assets/images/workshops/3d/module3.png',
      points: [
        'Technologies: FDM (common), SLA (resin), SLS (industrial).',
        'Materials: PLA (beginner-friendly), ABS (durable), PETG (flexible).',
        'File Formats: STL vs. OBJ vs. 3MF.',
        'Activity: Compare printed samples of PLA vs. ABS (strength, texture).',
        'Slicing demo (Cura/PrusaSlicer): Layer height, infill, supports.',
        'Printer setup: Bed leveling, nozzle temperature, filament loading.',
        'Activity 1: Slice the bookshelf model and start group printing.',
        'Activity 2: Troubleshoot live issues (e.g., warping, stringing).',
        'Sanding, priming, and acetone smoothing (for ABS).',
        'Painting/assembly: Use adhesives (super glue, epoxy).',
        'Activity: Refine a printed object and assemble multi-part designs.',
        'Design and print a functional object (e.g., plant holder, puzzle).',
        'Constraints: Must use <50g of material and fit within 2 hours of print time.',
        'Showcase: Groups present their work, explaining design choices and challenges.',
        'Case Studies: Automotive (prototyping), healthcare (prosthetics).',
        'Certificates & Feedback: Distribute participation certificates and collect feedback forms.'
      ]
    }
  ];

  printing3dImages = [
    { src: './assets/images/workshops/3d/3dg4.png', title: '3D Workshop' },
    { src: './assets/images/workshops/3d/3dg1.png', title: 'Designing in CAD' },
    { src: './assets/images/workshops/3d/3dg3.png', title: 'Technical Design Stage' },
    // { src: './assets/images/workshops/3d/3dg5.png', title: 'Quality Check' },
    { src: './assets/images/workshops/3d/3dg6.png', title: 'Finalized Design' },
    { src: './assets/images/workshops/3d/3dg10.png', title: 'Printing in Process..' },
    // { src: './assets/images/workshops/3d/3dg8.png', title: 'Completed Prototypes' },
    { src: './assets/images/workshops/3d/3dg7.png', title: 'Final Product' },
    { src: './assets/images/workshops/3d/3dg9.png', title: 'Solar Power Bank 3D Model' },
    { src: './assets/images/workshops/3d/3dg2.png', title: 'In-House Designed Product' },
    { src: './assets/images/workshops/3d/3dg11.png', title: 'Designed & Printed Models' },
  ];
  
  

}
