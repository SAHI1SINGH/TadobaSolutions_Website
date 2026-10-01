import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../../components/solar-pv/hero-section/hero-section.component';
import { BenifitsSectionComponent } from '../../../components/solar-pv/benifits-section/benifits-section';
import { WorkProcessSectionComponent } from '../../../components/solar-pv/work-process-section/work-process-section';
import { MapSectionComponent } from '../../../components/solar-pv/map-section/map-section';
import { AppLaunchSectionComponent } from '../../../components/solar-pv/app-launch-section/app-launch-section';
import { SubsidyComponent } from '../../../components/solar-pv/subsidy/subsidy';
import { SolarcapacityComponent } from '../../../components/solar-pv/solarcapacity/solarcapacity';
import { FinancialComponent } from '../../../components/solar-pv/financial/financial';
import { SmartsolutionComponent } from '../../../components/solar-pv/smartsolution/smartsolution';
import { ChooseUsComponent } from '../../../components/solar-pv/choose-us/choose-us';
import { TestimonialsSectionComponent } from '../../../components/solar-pv/testimonials-section/testimonials-section';
import { FaqSectionComponent } from '../../../components/solar-pv/faq-section/faq-section';
import { ProcessSectionComponent } from '../../../components/solar-pv/process-section.component/process-section.component';
import { ContactQueryComponent } from '../../../components/solar-pv/contact-query.component/contact-query.component';

@Component({
  selector: 'app-solar-pv',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    BenifitsSectionComponent,
    WorkProcessSectionComponent,
    MapSectionComponent,
    AppLaunchSectionComponent,
    SubsidyComponent,
    SolarcapacityComponent,
    FinancialComponent,
    SmartsolutionComponent,
    ChooseUsComponent,
    TestimonialsSectionComponent,
    FaqSectionComponent,
    ProcessSectionComponent,
    ContactQueryComponent,

],
  templateUrl: './solar-pv.component.html',
  styleUrl: './solar-pv.component.css',
})
export class SolarPvComponent {}
