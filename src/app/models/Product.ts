export class Product {
  productId: string;
  productName: string;
  productRating: number;
  productAvailability: string;
  productPrice: string;
  productType: string;
  productImgUrl: string[];
  productCategory: string;
  productDescription: string[];
  productBadge?: 'best-seller' | 'popular' | 'eco' | 'new';
  productFeatures?: { icon: string; label: string }[];

  constructor() {
    this.productId = '';
    this.productName = '';
    this.productRating = 0;
    this.productAvailability = '';
    this.productPrice = '';
    this.productImgUrl = [''];
    this.productCategory = '';
    this.productDescription = [];
    this.productType = '';
  }
}

export const ourProductList: Product[] = [
  {
    productId: 'TSWC1PHT',
    productName: 'AquaController-AO',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '1350.00',
    productType: 'OUR',
    productImgUrl: [
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791001983/1_bhvopb.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791001983/1_bhvopb.png',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Water Overflow Controller',
      'Semi-Automatic Device',
      'Overflow Controller for underground tank or overhead tank.',
      'Work With Any Single Phase Motor For Home ,Office, Hospital, Restaurant.',
      'LED base for long time durability',
      'Single/ Multi tank controller.',
    ],
    productBadge: 'best-seller',
    productFeatures: [
      { icon: 'bolt', label: 'Semi-Automatic' },
      { icon: 'water_drop', label: 'Overflow Control' },
      { icon: 'eco', label: 'Long Life LED' },
    ],
  },
  // {
  //   productId: 'TSWC1PHU',
  //   productName: 'AquaController-AO (1-Φ Universal)',
  //   productRating: 3.5,
  //   productAvailability: 'in-stock',
  //   productPrice: '1350.00',
  //   productType: 'OUR',
  //   productImgUrl: [
  //     './assets/images/product/own-product/TSWC1PHU.png',
  //     './assets/images/product/own-product/TSWC1PHU-2.png',
  //   ],
  //   productCategory: 'Electronic',
  //   productDescription: [
  //     'Water Overflow Controller',
  //     'Semi-Automatic Device',
  //     'It’s an auto off device for submersible. ',
  //     'Back side Hanging Clam.',
  //     'LED base for long time durability',
  //     'Single/ Multi tank controller.',
  //     'Suitable for single phase contractor starter panel of submersible motor',
  //   ],
  //   productFeatures: [
  //     { icon: 'bolt', label: 'Auto-Off' },
  //     { icon: 'shield', label: 'Universal Fit' },
  //     { icon: 'eco', label: 'Long Life LED' },
  //   ],
  // },
  // {
  //   productId: 'TSWC3PHU',
  //   productName: 'AquaController-AO (3-Φ Submersible)',
  //   productRating: 3.5,
  //   productAvailability: 'in-stock',
  //   productPrice: '1550.00',
  //   productType: 'OUR',
  //   productImgUrl: [
  //     './assets/images/product/own-product/TSWC3PHU-2.png',
  //     './assets/images/product/own-product/TSWC3PHU.png',
  //     './assets/images/product/own-product/TSWC3PHU-3.png',
  //     './assets/images/product/own-product/TSWC3PHU-4.png',
  //   ],
  //   productCategory: 'Electronic',
  //   productDescription: [
  //     'Water Overflow Controller',
  //     ' Semi-Automatic Device',
  //     'Suitable for  three phase contractor starter panel of submersible motor',
  //     'Work With Any Three Phase Motor For Home ,Office, Hospital, Restaurant.',
  //     'LED base for long time durability.',
  //     'Single/ Multi tank controller.',
  //   ],
  //   productFeatures: [
  //     { icon: 'bolt', label: '3-Phase Support' },
  //     { icon: 'shield', label: 'Semi-Automatic' },
  //     { icon: 'eco', label: 'Durable LED' },
  //   ],
  // },
  {
    productId: ' TSD2DAC',
    productName: 'Day Night Smart Switch D2D(Dusk To Down) AC',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '150.00',
    productType: 'OUR',
    productImgUrl: [
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916898/TSD2DAC_phvtrr.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916897/TSD2DAC-2_xs8frd.png',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Load current up to 6A',
      'Load voltage 230V AC',
      'Rated input voltage 230V AC',
    ],
    productBadge: 'popular',
    productFeatures: [
      { icon: 'bolt', label: '6A Load Current' },
      { icon: 'shield', label: '230V AC' },
      { icon: 'eco', label: 'Auto Dusk-Dawn' },
    ],
  },
  {
    productId: 'TSPSSDD',
    productName: 'Agritech (Solar Power IOT Enabled Soil Health Monitoring System)',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '50700.00',
    productType: 'OUR',
    productImgUrl: [
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916900/TSPSSDD_vh1j9w.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916908/TSPSSDD-2_fncydh.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Measures soil Nitrogen, Phosphorus, and Potassium (NPK) levels for nutrient analysis.',
      'Monitors Electrical Conductivity (EC) to assess soil salinity and nutrient balance.',
      'pH measurement for detecting soil acidity or alkalinity.',
      'Real-time soil temperature monitoring for optimized planting and crop management.',
      'Detects soil moisture levels to manage irrigation effectively.',
      'Portable and lightweight design for convenient field use.',
      'Integrated display screen shows real-time measurements.',
      'Battery-powered for operation in remote locations.',
      'Ideal for data-driven decisions to enhance soil health and crop productivity.',
      'Empowers sustainable farming by addressing nutrient, salinity, pH, and moisture imbalances.',
    ],
    productBadge: 'new',
    productFeatures: [
      { icon: 'bolt', label: 'NPK Sensing' },
      { icon: 'wb_sunny', label: 'Solar Powered' },
      { icon: 'eco', label: 'IoT Enabled' },
    ],
  },
  {
    productId: 'TSSSDM',
    productName: 'Agritech (Portable Soil Health Monitoring System With Display)',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '27500.00',
    productType: 'OUR',
    productImgUrl: ['https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916914/TSSSDM_gfa4qp.png'],
    productCategory: 'Electronic',
    productDescription: [
      'Monitors key nutrients: Nitrogen, Phosphorus, Potassium (NPK).',
      'Real-time readings via a digital display.',
      'Easy installation with a modular design.',
      'Provides accurate soil fertility data.',
      'Portable with battery or external power support.',
      'Rugged, waterproof, and durable for outdoor use.',
      'Addresses nutrient, salinity, and pH issues.',
      'Tracks soil temperature and moisture levels.',
      'Supports data-driven farming decisions.',
      'Ideal for sustainable farming and research.',
    ],
    productFeatures: [
      { icon: 'bolt', label: 'NPK Monitoring' },
      { icon: 'shield', label: 'Waterproof' },
      { icon: 'eco', label: 'Portable' },
    ],
  },
  {
    productId: 'TSWS',
    productName: 'Weather Station',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '27700.00',
    productType: 'OUR',
    productImgUrl: ['https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916926/TSWS_e8jyft.jpg'],
    productCategory: 'Electronic',
    productDescription: [
      'Solar-powered system ensures uninterrupted functionality with renewable energy.',
      'Wind sensor accurately measures wind speed and direction for real-time weather data.',
      'CCTV camera provides 24/7 surveillance and monitoring of the area.',
      'Weather-resistant build ensures durability in extreme outdoor conditions.',
      'Robust modular design for easy installation and scalability.',
      'Integrated data collection for wind, temperature, and environmental conditions.',
      'Real-time weather updates enhance decision-making for agriculture and other applications.',
      'Supports remote monitoring via internet-enabled connectivity.',
      'Low maintenance requirements reduce operational costs.',
      'Ideal for smart farming, environmental monitoring, and security applications.',
    ],
    productFeatures: [
      { icon: 'wb_sunny', label: 'Solar Powered' },
      { icon: 'shield', label: 'Weatherproof' },
      { icon: 'eco', label: 'Remote Monitor' },
    ],
  },
  {
    productId: '  TSSACCTV',
    productName: ' Standlone CCTV Camera',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '18700.00',
    productType: 'OUR',
    productImgUrl: [
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916905/TSSACCTV-2_sywywn.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916904/TSSACCTV_dk7g7b.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916906/TSSACCTV-3_jgzzij.jpg',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1790916906/TSSACCTV-4_wpo85n.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Solar Panel Size: 20 Watts Polycrystalline',
      'Battery Size: 7000 mAh LiPo',
      'Battery Backup : 48 Hours',
      'Charge Controller: Inbuilt Charge Controller',
      'Mounting Type: Wall/Pole Mounting',
      'Circuit Enclosure: IP65 Enclousure of Battery and Charge Controller',
      'Outer Structure: Rust Proof Coated High Grade Metal Structure ',
      'Nut Bolt Accessories: Stainless Steel Material',
      '4G Bullet Camera Support All SIM Cards',
      ' Dual Light Colour Vision support thanks to powerful LED lights',
      ' 3MP Resolution to Clearly See Objects and Human in Day and Night',
      'Crystal Clear Audio Recording Helps Clear Hear and Monitor Area Built in mic and speaker',
      ' Memory support up to 64 GB SD card provide 4 6 day data backup',
      ' Real time data wireless data transmission.',
    ],
    productBadge: 'new',
    productFeatures: [
      { icon: 'wb_sunny', label: 'Solar Powered' },
      { icon: 'shield', label: 'IP65 Rated' },
      { icon: 'eco', label: '4G Enabled' },
    ],
  },
];

export const retailProductList: Product[] = [
  {
    productId: '  TSMSP',
    productName: 'Solar Panel',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: 'contact us',
    productType: 'RETAIL',
    productImgUrl: [
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002006/TSMSP_iogbbl.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002003/TSMSP-2_igwxp1.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002004/TSMSP-3_akabtb.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002004/TSMSP-4_rc0gv1.png',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Moduel Type : MSE40',
      'Pmax : 40 W',
      'Voltage(Vmax) : 17.84 V',
      'Current(Imax) : 2.25 A',
      'Open Circuit Voltage (Voc) : 21.95 V',
      'Short Circuit Current(Isc) : 2.44 A',
      'System Voltage : 1000 V DC',
    ],
    productBadge: 'best-seller',
    productFeatures: [
      { icon: 'bolt', label: 'High Efficiency' },
      { icon: 'shield', label: 'Durable Build' },
      { icon: 'eco', label: 'Eco Friendly' },
    ],
  },
  {
    productId: 'TSWLS',
    productName: 'Water Level Sensor',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '25.00',
    productType: 'RETAIL',
    productImgUrl: [
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002015/TSWLS_zlceaj.jpg',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002015/TSWLS-2_uirbc6.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Designed for water tank overflow alarms and semi-automatic level controllers.',
      'Easy installation at the top of the water tank.',
      'Triggers alarms when water contacts stainless steel terminals.',
      'Sends signals to activate overflow controllers.',
      'Durable and reliable for efficient water management.',
    ],
    productBadge: 'popular',
    productFeatures: [
      { icon: 'water_drop', label: 'Accurate Reading' },
      { icon: 'shield', label: 'Long Life' },
      { icon: 'build', label: 'Easy Install' },
    ],
  },
  {
    productId: 'TSSC',
    productName: 'Sensor Cable',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '6.00 /mtr.',
    productType: 'RETAIL',
    productImgUrl: [
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002016/TSSC_zcavyi.jpg',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002012/TSSC-2_mahfxp.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      'Durable PVC insulation with copper conductor for efficient signal transmission.',
      'Minimizes signal loss and interference for reliable performance.',
      '90-meter length offers flexibility for diverse installations.',
    ],
    productBadge: 'new',
    productFeatures: [
      { icon: 'link', label: 'Strong Build' },
      { icon: 'shield', label: 'Long Durability' },
      { icon: 'settings', label: 'Wide Compatible' },
    ],
  },
  {
    productId: ' TSACSLD2D',
    productName: '36 Watts LED Street Light (Lens Model) With D2D(Dusk To Down)',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '750.00',
    productType: 'RETAIL',
    productImgUrl: [
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002000/TSACSLD2D_jyxzuo.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002002/TSACSLD2D-2_r9bh8z.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      '3600 Lumens: IP65',
      'Wide Operating Voltage Range from 110V to 270V AC',
      'Die-cast Aluminum Body for effective heat dissipation',
      'Over Voltage protection up to 440V AC',
      'Body Colour: Dark Grey',
      ' Input Voltage:  85V-265V',
    ],
    productFeatures: [
      { icon: 'wb_sunny', label: 'Bright Illumination' },
      { icon: 'eco', label: 'Low Power Use' },
      { icon: 'shield', label: 'Weather Resistant' },
    ],
  },
  {
    productId: ' TSACSL',
    productName: '24 Watts LED Street Light (Lens Model)',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '650.00',
    productType: 'RETAIL',
    productImgUrl: [
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791001999/TSACSL_apilck.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002001/TSACSL-2_gqpxzj.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      '2400 Lumens: IP65',
      ' Wide Operating Voltage Range from 110V to 270V AC',
      ' Die-cast Aluminum Body for effective heat dissipation',
      ' Over Voltage protection up to 440V AC',
      ' Body Colour: Grey',
      'Input Voltage:  85V-265V',
    ],
    productBadge: 'eco',
    productFeatures: [
      { icon: 'wb_sunny', label: 'Bright Illumination' },
      { icon: 'eco', label: 'Low Power Use' },
      { icon: 'shield', label: 'Weather Resistant' },
    ],
  },
  {
    productId: ' TSACSLD2DWAT',
    productName: '50 Watts LED Street Light (Lens Model) With Auto Timer D2D',
    productRating: 3.5,
    productAvailability: 'in-stock',
    productPrice: '950.00',
    productType: 'RETAIL',
    productImgUrl: [
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002003/TSACSLD2DWAT_vs8fxo.png',
      'https://res.cloudinary.com/duk8n3cqw/image/upload/v1791002003/TSACSLD2DWAT-2_w0yjvc.jpg',
    ],
    productCategory: 'Electronic',
    productDescription: [
      '5000 Lumens: IP65',
      'Wide Operating Voltage Range from 110V to 270V AC',
      'Die-cast Aluminum Body for effective heat dissipation',
      'Over Voltage protection up to 440V AC',
      'Body Colour: Grey',
      'Input Voltage:  85V-265V',
    ],
    productFeatures: [
      { icon: 'wb_sunny', label: 'Bright Illumination' },
      { icon: 'schedule', label: 'Auto Timer' },
      { icon: 'shield', label: 'Weather Resistant' },
    ],
  },
];