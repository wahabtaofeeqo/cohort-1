import { Component } from '@angular/core';

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

  submit(value: any) {
    console.log(value);
  }
}
