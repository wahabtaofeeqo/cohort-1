import { Component } from '@angular/core';
import { CohortService } from '../cohort.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {

  constructor(public service: CohortService) {
    
  }
}
