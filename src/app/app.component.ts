import { Component } from '@angular/core';
import { CohortService } from './cohort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'cohort';
  platform: any;

  constructor(private service: CohortService) {
    this.platform = this.service.platform;
  }

  setPlatform(title: any) {
    this.service.platform = title;
    this.platform = this.service.platform;
  }
}
