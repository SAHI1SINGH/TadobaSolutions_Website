import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PolicySection {
  id: string;
  title: string;
  icon: string; // Font Awesome class
  intro?: string;
  points?: string[];
  steps?: boolean; // render points as numbered steps
}

interface DeliveryRow {
  business: string;
  dispatch: string;
  delivery: string;
}

@Component({
  selector: 'app-shipping-policy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './shipping-policy.html',
  styleUrl: './shipping-policy.scss',
})
export class ShippingPolicyComponent implements AfterViewInit, OnDestroy {
  // ---- Edit these once; reuse the component on every site ----
  readonly company = {
    name: 'Tadoba Solutions Pvt. Ltd.',
    address: 'Sejbahar, Raipur (C.G.) 492015, India',
    phone: '+91 96857-78971',
    email: 'info@tadobasolutions.com',
    lastUpdated: '3 October 2026',
  };

  readonly highlights = [
    { icon: 'fa-solid fa-box', title: '1–3 business days', text: 'Dispatch time for ready-stock items' },
    { icon: 'fa-solid fa-location-crosshairs', title: 'Live tracking', text: 'Tracking details shared once shipped' },
    { icon: 'fa-solid fa-truck-fast', title: 'Pan-India delivery', text: 'Shipping across India via trusted partners' },
  ];

  readonly deliveryTable: DeliveryRow[] = [
    { business: 'Solar PV Plant / EV / Batteries', dispatch: '3–7 business days', delivery: '5–10 business days (large equipment may take longer)' },
    { business: 'PCB Design, Development & Fabrication', dispatch: '5–10 business days after design approval', delivery: '2–6 business days after dispatch' },
    { business: '3D Prototype Design & Printing', dispatch: '3–7 business days after design approval', delivery: '2–6 business days after dispatch' },
    { business: 'Digital Agri Village Products', dispatch: '2–5 business days', delivery: '3–8 business days' },
  ];

  readonly sections: PolicySection[] = [
    {
      id: 'overview',
      title: 'Overview',
      icon: 'fa-solid fa-circle-info',
      intro:
        `This policy explains how ${this.company.name} processes, ships and delivers physical orders placed through our websites. Services such as design, consulting and on-site installation are not shipped and are scheduled directly with you.`,
    },
    {
      id: 'processing',
      title: 'Order Processing',
      icon: 'fa-solid fa-gears',
      points: [
        'Orders are processed on business days (Monday to Saturday, excluding public holidays).',
        'You will receive an email or call confirming your order once payment is verified.',
        'Custom products (PCBs, 3D prints, tailored solutions) enter production only after you approve the design or specification.',
        'Orders placed after business hours or on holidays are processed on the next business day.',
      ],
    },
    {
      id: 'charges',
      title: 'Shipping Charges',
      icon: 'fa-solid fa-indian-rupee-sign',
      intro:
        'Shipping charges depend on the weight, size and destination of your order and are shown at checkout or in your quotation. Bulk and heavy equipment, such as solar panels and battery banks, is quoted separately. Any applicable taxes are included in the final amount.',
    },
    {
      id: 'coverage',
      title: 'Delivery Coverage',
      icon: 'fa-solid fa-map-location-dot',
      intro:
        'We currently ship to most serviceable PIN codes across India through reputed courier and freight partners. We do not offer international shipping at this time. If your PIN code is not serviceable, we will contact you to arrange an alternative or cancel with a full refund.',
    },
    {
      id: 'tracking',
      title: 'Order Tracking',
      icon: 'fa-solid fa-route',
      steps: true,
      points: [
        'Once your order is dispatched, we send you the courier name and tracking number by email or SMS.',
        'Use the tracking link or the courier’s website to follow your shipment.',
        `If you have not received tracking details within the dispatch window, contact us at ${this.company.email}.`,
      ],
    },
    {
      id: 'delays',
      title: 'Delays & Failed Deliveries',
      icon: 'fa-solid fa-hourglass-half',
      intro:
        'Delivery timelines are estimates. Delays can occur due to weather, strikes, festivals, customs of local carriers or incorrect addresses. We will keep you informed of significant delays. If a delivery attempt fails because the address is wrong or nobody is available, re-delivery charges may apply.',
    },
    {
      id: 'damage',
      title: 'Damaged or Lost Shipments',
      icon: 'fa-solid fa-box-open',
      points: [
        'Please inspect the package at delivery. If it is visibly damaged, note it with the courier or refuse delivery.',
        'Report any damage or missing items within 48 hours of delivery with photos or video of the package and product.',
        'If a shipment is lost in transit, we will investigate with the courier and send a replacement or issue a refund as per our Refund Policy.',
      ],
    },
    {
      id: 'address',
      title: 'Address Changes',
      icon: 'fa-solid fa-location-dot',
      intro:
        'Please double-check your shipping address before placing your order. Address changes are possible only before dispatch, so contact us as soon as possible. Once an order has shipped, we cannot guarantee a change of address.',
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
    [...this.sections.map((s) => s.id), 'timelines', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
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