import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

/* =========================
   ALL FAQS (COMBINED)
========================= */

const ALL_FAQS = [
  {
    question:
    'What is PM Surya Ghar Yojana?',

    answer:
    'PM Surya Ghar Yojana is a MNRE government subsidy scheme that helps homeowners install On-Grid Connected rooftop solar systems at lower cost.'
  },

  {
    question:
    'How much subsidy can I get?',

    answer:
    'Subsidy depends on your rooftop solar capacity and latest government guidelines.'
  },

  {
    question:
    'How long does installation take?',

    answer:
    'Most residential solar systems are installed within 3 to 5 days after approval.'
  },

  {
    question:
    'Do solar panels work during cloudy weather?',

    answer:
    'Yes, solar panels still generate electricity during cloudy weather, though efficiency may reduce slightly.'
  },

  {
    question:
    'How much roof area is required for residential solar?',

    answer:
    'Typically, a 1kW solar system requires around 80 to 100 sq.ft of shadow-free rooftop area.'
  },

  {
    question:
    'Can I run my home completely on solar power?',

    answer:
    'Yes, depending on your electricity consumption and system size, solar can significantly reduce or fully offset your electricity bill.'
  },

  {
    question:
    'Will I get subsidy for rooftop solar?',

    answer:
    'Yes, residential rooftop systems are eligible for subsidy under PM Surya Ghar Yojana as per government norms.'
  },

  {
    question:
    'What is the lifespan of residential solar panels?',

    answer:
    'Most solar panels have a lifespan of 25 years or more with proper maintenance.'
  },

  {
    question:
    'How can commercial solar reduce electricity costs?',

    answer:
    'Commercial solar systems help businesses generate their own electricity and reduce dependency on grid power.'
  },

  {
    question:
    'Is solar suitable for industries and factories?',

    answer:
    'Yes, solar is highly beneficial for industries with high daytime electricity consumption.'
  },

  {
    question:
    'What is the ROI for commercial solar systems?',

    answer:
    'Most commercial solar projects achieve ROI within 3 to 5 years depending on consumption and project size.'
  },

  {
    question:
    'Can solar systems be installed without stopping operations?',

    answer:
    'Yes, installations are planned carefully to minimize operational disruption.'
  }
];

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-section.html',
  styleUrls: ['./faq-section.css']
})
export class FaqSectionComponent implements OnInit {

  @Input() title: string = '';

  @Input() subtitle: string = '';

  /* auto-loads ALL_FAQS if nothing is passed in */
  @Input() faqs: {
    question: string;
    answer: string;
    open?: boolean;
  }[] = [];

  ngOnInit(){
    if (!this.faqs.length) {
      this.faqs = ALL_FAQS;
    }
  }

  toggleFaq(index: number){

    this.faqs[index].open =
    !this.faqs[index].open;

  }

}