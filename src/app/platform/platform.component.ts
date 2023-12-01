import { Component, OnInit } from '@angular/core';
import { CohortService } from '../cohort.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Store } from '@ngrx/store';
import { loadUsers } from '../app-store/actions/app.actions';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent implements OnInit {

  constructor(
    private store$: Store,
    private dialog: MatDialog,
    public service: CohortService) {
  }

  ngOnInit(): void {
    this.store$.dispatch(loadUsers());
  }

  open() {
    this.dialog.open(ConfirmComponent, {
      width: '450px',
      data: {}
    })
  }
}
