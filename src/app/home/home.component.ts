import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadUsers, usersLoaded } from '../app-store/actions/app.actions';
import { appState, selectUserLoadState, selectUsers } from '../app-store/selectors/app-selectors';
import { CohortService } from '../cohort.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form = {
    name: '',
    email: ''
  }

  // formGroup: FormGroup = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email])
  // });

  today = new Date();

  formGroup: FormGroup;
  
  selectedItem: any;
  
  items: any[] = [
    {id: 1, name: 'Dev', role: 'FE'},
    {id: 2, name: 'Dev', role: 'BE'},
    {id: 3, name: 'Dev', role: 'FE'},
    {id: 4, name: 'Dev', role: 'BE'},
    {id: 5, name: 'Dev', role: 'FE'},
  ]

  users$ = this.store$.select(selectUsers)
  isUsersLoading$ = this.store$.select(selectUserLoadState);
  
  constructor(
    private store$: Store,
    private builder: FormBuilder,
    private service: CohortService) {

    this.formGroup = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.store$.dispatch(loadUsers());

    // this.store$.select(selectUserLoadState).subscribe(state => {
    //   console.log(state);
    // })

    // this.store$.select(selectUsers).subscribe(state => {
    //   console.log(state);
    // })

    // this.service.loadUsers().subscribe({
    //   next: users => {
    //     this.store$.dispatch(usersLoaded({data: users}))
    //   }
    // })
  }

  submit(value: any) {
    if(this.formGroup.invalid) return;
  }
}
