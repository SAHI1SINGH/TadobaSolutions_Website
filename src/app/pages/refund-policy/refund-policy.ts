import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PolicySection {
  id: string;
  title: string;
  icon: string; // Font Awesome class
  intro?: string;
  points?: string[];
}

interface Eligibility {
  business: string;
  refundable: string;
  nonRefundable: string;
}

@Component({
  selector: 'app-refund-policy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './refund-policy.html',
  styleUrl: './refund-policy.scss',
})
export class RefundPolicyComponent implements AfterViewInit, OnDestroy {
  // ---- Edit these once; reuse the component on every site ----
  readonly company = {
    name: 'Tadoba Solutions Pvt. Ltd.',
    address: 'Sejbahar, Raipur (C.G.) 492015, India',
    phone: '+91 96857-78971',
    email: 'info@tadobasolutions.com',
    lastUpdated: '3 October 2026',
    requestWindowDays: 7,
    processingDays: '5–7 business days',
  };

  readonly highlights = [
    { icon: 'fa-regular fa-calendar-check', title: `${this.company.requestWindowDays} days`, text: 'To raise a refund request after delivery' },
    { icon: 'fa-solid fa-money-bill-transfer', title: this.company.processingDays, text: 'To credit an approved refund' },
    { icon: 'fa-solid fa-credit-card', title: 'Original method', text: 'Refunds go back to the payment source' },
  ];

  readonly eligibility: Eligibility[] = [
    {
      business: 'PCB Design, Development & Fabrication',
      refundable: 'Order cancelled before design or fabrication starts; fabrication defect traced to us',
      nonRefundable: 'Custom boards once fabrication starts; errors in client-supplied files',
    },
    {
      business: '3D Prototype Design & Printing',
      refundable: 'Cancellation before printing starts; print that materially differs from the approved design',
      nonRefundable: 'Custom prints already produced; changes of mind after approval',
    },
    {
      business: 'Digital Agri Village Products & Solutions',
      refundable: 'Hardware damaged or defective on delivery; duplicate payments',
      nonRefundable: 'Services already delivered or subscriptions in active use',
    },
  ];

  readonly sections: PolicySection[] = [
    {
      id: 'overview',
      title: 'Overview',
      icon: 'fa-solid fa-circle-info',
      intro:
        `At ${this.company.name}, we want you to be satisfied with every product and service. This policy explains when you can request a refund, how to do it, and how long it takes. It applies to all our businesses and websites.`,
    },
    {
      id: 'eligibility',
      title: 'Refund Eligibility',
      icon: 'fa-solid fa-circle-check',
      intro: 'You may be eligible for a refund if:',
      points: [
        `You raise a request within ${this.company.requestWindowDays} days of delivery (or of the issue arising).`,
        'The product arrived damaged, defective, or different from what you ordered.',
        'You cancelled the order before it was dispatched or before work on it began.',
        'You were charged more than once for the same order.',
      ],
    },
    {
      id: 'non-refundable',
      title: 'Non-Refundable Items',
      icon: 'fa-solid fa-ban',
      intro: 'Refunds are generally not available for:',
      points: [
        'Custom-made products (PCBs, 3D prints, tailored solutions) once production has started.',
        'Services that have already been delivered or completed.',
        'Damage caused by misuse, improper installation, or unauthorised modification.',
        'Requests raised after the refund window has closed.',
        'Gateway or bank charges levied by third parties, where applicable.',
      ],
    },
    {
      id: 'how-to',
      title: 'How to Request a Refund',
      icon: 'fa-solid fa-list-check',
      points: [
        `Email ${this.company.email} or call ${this.company.phone} with your order ID.`,
        'Describe the issue and attach photos or videos for damaged or defective items.',
        'Our team will review and reply within 24 hours with next steps.',
        'If a return is required, we will share pickup or shipping instructions.',
      ],
    },
    {
      id: 'processing',
      title: 'Processing & Timelines',
      icon: 'fa-solid fa-clock',
      intro:
        `Once approved, refunds are issued to your original payment method within ${this.company.processingDays}. Your bank or card issuer may take a few extra days to reflect the amount.`,
    },
    {
      id: 'cancellations',
      title: 'Cancellations',
      icon: 'fa-solid fa-rotate-left',
      intro:
        'Orders can be cancelled free of charge before dispatch or before design/fabrication begins. After that point, cancellation charges may apply to cover work already done and materials already purchased.',
    },
    {
      id: 'damaged',
      title: 'Damaged or Defective Items',
      icon: 'fa-solid fa-box-open',
      intro:
        'Please inspect your order on delivery. If anything is damaged or defective, report it within the refund window with supporting photos. We will offer a replacement, repair, or refund, whichever is appropriate.',
    },
  ];

  readonly active = signal<string>('overview');
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) this.active.set(visible.target.id);
      },
      { rootMargin: '-90px 0px -65% 0px' },
    );
    this.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) this.observer!.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.active.set(id);
  }
}