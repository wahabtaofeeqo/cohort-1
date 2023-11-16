import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
  
  constructor(private builder: FormBuilder) {
    this.formGroup = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  submit(value: any) {
    if(this.formGroup.invalid) return;
  }
}
