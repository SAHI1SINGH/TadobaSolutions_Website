import { Routes } from '@angular/router';
import { CareerComponent } from './pages/career/career.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EvWorkshopComponent } from './pages/workshops/ev-workshop/ev-workshop.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';
import { IiotWorkshopComponent } from './pages/workshops/iiot-workshop/iiot-workshop.component';
import { SolarWorkshopComponent } from './pages/workshops/solar-workshop/solar-workshop.component';
import { ThreeDComponent } from './pages/workshops/three-d/three-d.component';
import { SolarPvComponent } from './pages/service&maintenance/solar-pv/solar-pv.component';
import { DigitAgriVillagesComponent } from './pages/service&maintenance/digit-agri-villages/digit-agri-villages.component';
import { WaterOverflowControllerComponent } from './pages/service&maintenance/water-overflow-controller/water-overflow-controller.component';
import { ThreeDServiceComponent } from './pages/service&maintenance/three-d-service/three-d-service.component';
import { PcbComponent } from './pages/service&maintenance/pcb/pcb.component';
import { SoftwareDevelopmentComponent } from './pages/software-development/software-development.component';
import { RefundPolicyComponent } from './pages/refund-policy/refund-policy';
import { ShippingPolicyComponent } from './pages/shipping-policy/shipping-policy';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'our-products', component: ProductListComponent },
  { path: 'retail-products', redirectTo: '/our-products', pathMatch: 'full' },
  { path: 'product', component: ViewProductComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'terms&conditions', component: TermsAndConditionComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'product/:productId', component: ViewProductComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'workshop', component: WorkshopComponent },
  { path: 'ev-workshop', component: EvWorkshopComponent },
  { path: 'iiot-workshop', component: IiotWorkshopComponent },
  { path: 'solar-pv-plant-workshop', component: SolarWorkshopComponent },
  { path: '3d-workshop', component: ThreeDComponent },
  { path: 'solar-pv-plant', component: SolarPvComponent },
  { path: 'digital-agri-village', component: DigitAgriVillagesComponent },
  {
    path: 'water-overflow-controller',
    component: WaterOverflowControllerComponent,
  },
  { path: '3d-design-printing-service', component: ThreeDServiceComponent },
  { path: 'pcb-design-development', component: PcbComponent },
  { path: 'software-development', component: SoftwareDevelopmentComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: 'shipping-policy', component: ShippingPolicyComponent },
];