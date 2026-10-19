import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ACTIVITIES,
  ACTIVITY_BASE,
  Activity,
  findActivity,
} from '../../models/activities.data';

@Component({
  selector: 'app-activity-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css'],
})
export class ActivityDetailComponent implements OnInit, OnDestroy {
  base = ACTIVITY_BASE;
  activity?: Activity;
  related: Activity[] = [];

  private sub?: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // paramMap subscribe karte hain taaki "More Activities" se dusre article par
    // jaane par bhi page update ho (same component reuse hota hai).
    this.sub = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') ?? '';
      this.activity = findActivity(slug);
      this.related = ACTIVITIES.filter((a) => a.slug !== slug);
      window.scrollTo({ top: 0 });
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}