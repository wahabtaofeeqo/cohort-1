import { Component } from '@angular/core';
import { CohortService } from '../cohort.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {

  constructor(
    private dialog: MatDialog,
    public service: CohortService) {
  }

  open() {
    this.dialog.open(ConfirmComponent, {
      width: '450px',
      data: {}
    })
  }
}
