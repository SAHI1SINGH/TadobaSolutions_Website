// Ek hi jagah se "Our Activities" cards aur unke detail pages ka data aata hai.
// Naya article add karna ho to bas ACTIVITIES me ek object aur jod do.

// Detail page ka base route. App routes me bhi yahi path use hona chahiye.
export const ACTIVITY_BASE = '/operation-maintenance/activity';

export interface ActivitySection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Activity {
  slug: string; // URL me use hota hai: /operation-maintenance/activity/<slug>
  title: string;
  tag: string;
  image: string; // Cloudinary URL yahan paste karo (card + detail hero dono me dikhega)
  date: string;
  readTime: string;
  excerpt: string; // card ke neeche / "More activities" me dikhne wali chhoti line
  intro: string;
  sections: ActivitySection[];
  takeaways: string[];
}

export const ACTIVITIES: Activity[] = [
  {
    slug: 'day-of-solar-plant-operations',
    title: 'Inside a Day of Solar Plant Operations',
    tag: 'Field Notes',
    image:
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1792154025/WhatsApp_Image_2026-10-16_at_5.24.53_PM_oovx1i.jpg',
    date: '12 Oct 2026',
    readTime: '4 min read',
    excerpt:
      'From the first dashboard check to the end-of-day report, here is how a typical maintenance visit unfolds.',
    intro:
      'A solar plant looks quiet from the outside, but keeping it at full output is a daily routine of checks, measurements and small decisions. Here is how a typical day on one of our maintenance visits unfolds.',
    sections: [
      {
        heading: 'Morning: start with the data',
        paragraphs: [
          'Before anyone climbs a roof or walks a row, the team opens the monitoring dashboard. Overnight alarms, inverter status and string-level output from the previous day show where to look first.',
          'The visit plan is then adjusted: a string that under-performed yesterday goes to the top of the list, ahead of the routine checklist.',
        ],
      },
      {
        heading: 'On site: inspection and testing',
        paragraphs: [
          'The walk-through follows a fixed checklist so nothing depends on memory. Typical items include:',
        ],
        bullets: [
          'Visual check of modules for cracks, discoloration, loose clamps and shading',
          'Thermal scan to spot hot cells and overheating connectors',
          'Inspection of cables, junction boxes, earthing and protection devices',
          'Inverter logs, filters and cooling checked and cleaned',
        ],
      },
      {
        heading: 'Midday: cleaning and corrective work',
        paragraphs: [
          'Modules are cleaned when soiling is visible and, where possible, in the cooler hours so the glass is not shocked by cold water. Faults found in the morning, such as a loose connector or a tripped fuse, are fixed while the sun is high so the repair can be confirmed with live readings.',
        ],
      },
      {
        heading: 'End of day: record and report',
        paragraphs: [
          'Every finding is logged with photos, readings and the action taken. The owner receives a short summary the same day, and open items carry over to the next visit with a clear owner and date.',
        ],
      },
    ],
    takeaways: [
      'Monitoring data decides where the team goes first',
      'A fixed checklist keeps inspections consistent',
      'Repairs are confirmed with live readings before leaving site',
      'Same-day reporting keeps owners informed',
    ],
  },
  {
    slug: 'clean-panels-lift-generation',
    title: 'How Clean Panels Lift Your Monthly Generation',
    tag: 'Insights',
    image: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1792392490/ChatGPT_Image_Oct_19_2026_12_16_16_PM_fy0f3b.png',
    date: '05 Oct 2026',
    readTime: '5 min read',
    excerpt:
      'Soiling losses build up slowly. Learn how to choose a cleaning method and time it using real plant data.',
    intro:
      'Dust, bird droppings and film from industrial air all block sunlight before it reaches the cells. The loss is gradual, so it often goes unnoticed until the monthly generation report looks lower than expected.',
    sections: [
      {
        heading: 'Why soiling matters',
        paragraphs: [
          'Soiling does not always reduce output evenly. A heavily soiled patch can pull down the output of a whole string, so a few dirty modules can cost more than their share.',
          'How much you lose depends on your location, tilt, season and nearby activity such as construction, farming or heavy traffic.',
        ],
      },
      {
        heading: 'Choosing a cleaning method',
        bullets: [
          'Dry cleaning with soft brushes suits light dust and water-scarce sites',
          'Wet cleaning with treated water handles bird droppings and sticky residue',
          'Automated or robotic systems make sense on large, flat ground-mounted fields',
          'Never use abrasive tools or high-pressure jets that can damage the glass coating',
        ],
      },
      {
        heading: 'Getting the timing right',
        paragraphs: [
          'The best cleaning cycle is set by data, not by the calendar. Compare performance ratio before and after a clean, and note how quickly it falls again. Plan cleaning ahead of high-generation months and after dust-heavy events such as strong winds or harvest season.',
        ],
      },
      {
        heading: 'Proving the gain',
        paragraphs: [
          'Record generation and irradiance for the days before and after each cleaning. The difference, adjusted for weather, shows what the clean recovered and tells you whether to clean more or less often.',
        ],
      },
    ],
    takeaways: [
      'Soiling losses build slowly, so measure them',
      'Match the cleaning method to the site and the dirt',
      'Set the cycle from performance-ratio data',
      'Compare before and after to prove the gain',
    ],
  },
  {
    slug: 'solar-industry-trends-to-watch',
    title: 'Solar Industry Trends Owners Should Watch',
    tag: 'Industry',
    image: 'https://res.cloudinary.com/duk8n3cqw/image/upload/v1792392932/ChatGPT_Image_Oct_19_2026_12_25_16_PM_zbjgww.png',
    date: '28 Sep 2026',
    readTime: '5 min read',
    excerpt:
      'Smarter monitoring, faster inspections and hybrid power setups are changing how plants are maintained.',
    intro:
      'Solar operations are changing as plants age and tools improve. These are the shifts we think plant owners should keep an eye on when planning maintenance and budgets.',
    sections: [
      {
        heading: 'Smarter monitoring',
        paragraphs: [
          'String-level and inverter-level data is now cheap to collect, and analytics can flag under-performance days before it shows up in a monthly report. Owners who review this data regularly find faults sooner and spend less time arguing over generation numbers.',
        ],
      },
      {
        heading: 'Faster inspections',
        paragraphs: [
          'Drone-based thermal imaging covers large fields in a fraction of the time a walk-through takes, and it leaves a record that can be compared year to year.',
        ],
      },
      {
        heading: 'Solar working with other power sources',
        paragraphs: [
          'Many industrial sites run solar together with diesel generators or grid supply, and some are adding battery storage. Keeping these sources synchronised and balanced is becoming part of everyday maintenance rather than a special project.',
        ],
      },
      {
        heading: 'What to do now',
        bullets: [
          'Check that your monitoring records data at string or inverter level',
          'Ask for maintenance reports with measurable KPIs, not just visit logs',
          'Plan for inverter replacement and module ageing in your long-term budget',
          'Review your O&M contract once a year against actual plant performance',
        ],
      },
    ],
    takeaways: [
      'Review monitoring data regularly, not only when something breaks',
      'Thermal drone surveys speed up large-site inspections',
      'Hybrid setups need ongoing synchronisation care',
      'Measure your O&M provider by plant performance',
    ],
  },
];

export function findActivity(slug: string): Activity | undefined {
  return ACTIVITIES.find((a) => a.slug === slug);
}